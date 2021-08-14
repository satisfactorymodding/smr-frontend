/* eslint-disable */

import type {File} from "$lib/models/file";
import type {ExecuteMutation, OperationStore} from "@urql/svelte";
import type {
  CheckVersionUploadStateQuery,
  CreateVersionMutation,
  Exact,
  FinalizeCreateVersionMutation,
  NewVersion,
  UploadVersionPartMutation
} from "$lib/generated";
import type {Writable} from "svelte/store";

export type UploadState = {
  total: number;
  uploaded: number;
}

export type ChunkedResponse = CheckVersionUploadStateQuery['checkVersionUploadState'];

export const chunkedUpload = async (file: File, modId: string, version: NewVersion, state: Writable<UploadState>, gql: {
  createVersion: ExecuteMutation<CreateVersionMutation, Exact<{ modId: any }>>,
  uploadVersionPart: ExecuteMutation<UploadVersionPartMutation, Exact<{ modId: any, versionId: any, part: number, file: any }>>,
  finalizeCreateVersion: ExecuteMutation<FinalizeCreateVersionMutation, Exact<{ modId: any, versionId: any, version: NewVersion }>>,
  checkVersionUploadState: OperationStore<CheckVersionUploadStateQuery, Exact<{ modId: any, versionId: any }>, CheckVersionUploadStateQuery>,
}): Promise<ChunkedResponse> => {
  const chunkSize = 10000000; // ~ 10MB

  const chunksQuantity = Math.ceil(file.size / chunkSize);
  const chunksQueue = new Array(chunksQuantity).fill(0).map((_, index) => index).reverse();

  const upload = (chunk: Blob, chunkId: number, versionID: string) => {
    return gql.uploadVersionPart({
      modId: modId,
      versionId: versionID,
      part: chunkId,
      file: chunk
    });
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
      upload(chunk, chunkId + 1, versionID).then(() => {
        activeConnections -= 1;

        state.set({
          total: chunksQuantity,
          uploaded: (chunksQuantity - chunksQueue.length) - activeConnections
        });

        return sendNext(versionID);
      }).catch(err => {
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

  return gql.createVersion({modId}).then(async data => {
    state.set({
      total: chunksQuantity,
      uploaded: 0
    });

    await sendNext(data.data.createVersion);

    return data.data.createVersion;
  }).then((versionID) => {
    console.log('Finalizing', {versionID});

    return gql.finalizeCreateVersion({
      modId: modId,
      versionId: versionID,
      version: version
    }).then(() => {
      return new Promise<ChunkedResponse>((resolve, reject) => {
        let tries = 0;
        const interval = setInterval(() => {
          if (tries == 60) {
            clearInterval(interval);
            return reject(new Error('Timed out waiting for mod processing'));
          }

          gql.checkVersionUploadState.reexecute({
            requestPolicy: 'network-only',
          });
          tries++;
        }, 10000);

        gql.checkVersionUploadState.variables.versionId = versionID;
        const sub = gql.checkVersionUploadState.subscribe(data => {
          if (data.fetching) {
            return;
          }

          if (data.error) {
            clearInterval(interval);
            reject(new Error(data.error.message));
            setTimeout(sub);
            return;
          }

          if (!data.data) {
            return;
          }

          if (!data.data.checkVersionUploadState) {
            return;
          }

          if (!data.data.checkVersionUploadState.version) {
            return;
          }

          if (!data.data.checkVersionUploadState.version.id) {
            return;
          }

          sub();
          clearInterval(interval);
          resolve(data.data.checkVersionUploadState);
        });
      });
    });
  }).catch(err => {
    console.error(err);
    throw err;
  })
}
