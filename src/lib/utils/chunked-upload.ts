/* eslint-disable */

import type { File } from '$lib/models/file';
import type { Client } from 'urql';
import {
  CheckVersionUploadStateDocument,
  FinalizeCreateVersionDocument,
  type Exact,
  type NewVersion,
  CreateVersionDocument,
  UploadVersionPartDocument,
  type CheckVersionUploadStateQuery
} from '$lib/generated';
import type { Writable } from 'svelte/store';
import { queryStore } from '@urql/svelte';

export type UploadState = {
  total: number;
  uploaded: number;
};

export type ChunkedResponse = CheckVersionUploadStateQuery['checkVersionUploadState'];

export const chunkedUpload = async (
  file: File,
  modId: string,
  version: NewVersion,
  state: Writable<UploadState>,
  client: Client
): Promise<ChunkedResponse> => {
  const chunkSize = 10000000; // ~ 10MB

  const chunksQuantity = Math.ceil(file.size / chunkSize);
  const chunksQueue = new Array(chunksQuantity)
    .fill(0)
    .map((_, index) => index)
    .reverse();

  const upload = (chunk: Blob, chunkId: number, versionID: string) => {
    return client
      .mutation(UploadVersionPartDocument, {
        modId: modId,
        versionId: versionID,
        part: chunkId,
        file: chunk
      })
      .toPromise();
  };

  const threadsQuantity = 10;
  let activeConnections = 0;
  let retries = 0;
  const sendNext = (versionID: string) => {
    if (activeConnections >= threadsQuantity) {
      return;
    }

    if (!chunksQueue.length) {
      return;
    }

    const chunkId = chunksQueue.pop();
    const begin = chunkId * chunkSize;
    const chunk = file.slice(begin, begin + chunkSize);

    activeConnections += 1;

    return Promise.all([
      upload(chunk, chunkId + 1, versionID)
        .then(() => {
          activeConnections -= 1;

          state.set({
            total: chunksQuantity,
            uploaded: chunksQuantity - chunksQueue.length - activeConnections
          });

          return sendNext(versionID);
        })
        .catch((err) => {
          console.error('Upload failed:', err);
          activeConnections -= 1;
          chunksQueue.push(chunkId);
          retries += 1;
          if (retries < 5) {
            return sendNext(versionID);
          } else {
            throw new Error('Failed uploading after 5 attempts');
          }
        }),
      sendNext(versionID)
    ]);
  };

  return client
    .mutation(CreateVersionDocument, { modId })
    .toPromise()
    .then(async (data) => {
      state.set({
        total: chunksQuantity,
        uploaded: 0
      });

      await sendNext(data.data.createVersion);

      return data.data.createVersion;
    })
    .then((versionID) => {
      console.log('Finalizing', { versionID });

      return client
        .mutation(FinalizeCreateVersionDocument, { modId, versionId: versionID, version })
        .toPromise()
        .then(() => {
          return new Promise<ChunkedResponse>((resolve, reject) => {
            let tries = 0;
            let checkVersionUploadState = queryStore({
              query: CheckVersionUploadStateDocument,
              client,
              variables: {
                modId: modId,
                versionId: versionID
              },
              requestPolicy: 'network-only'
            });
            const interval = setInterval(() => {
              if (tries == 60) {
                clearInterval(interval);
                return reject(new Error('Timed out waiting for mod processing'));
              }

              checkVersionUploadState.pause();
              checkVersionUploadState.resume();
              tries++;
            }, 10000);

            const unsub = checkVersionUploadState.subscribe((data) => {
              if (data.fetching) {
                return;
              }

              if (data.error) {
                clearInterval(interval);
                reject(new Error(data.error.message));
                setTimeout(unsub);
                return;
              }

              if (!data.data?.checkVersionUploadState?.version?.id) {
                return;
              }

              unsub();
              clearInterval(interval);
              resolve(data.data.checkVersionUploadState);
            });
          });
        });
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};
