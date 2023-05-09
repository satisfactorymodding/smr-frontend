// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import type { OperationResultStore } from '@urql/svelte/dist/types/common';
import { browser } from '$app/env';

// Pretend you didn't see this file

export const loadWaitForNoFetch = async (queries: {
  [key: string]: OperationResultStore;
}): { [key: string]: OperationResultStore } => {
  // If on SSR, block the load until all queries have returned
  if (!browser) {
    await Promise.all(
      Object.values(queries).map(
        (query) =>
          new Promise((resolve) => {
            query.subscribe((res) => {
              if (!res.fetching) {
                resolve();
              }
            });
          })
      )
    );
  }
  return queries;
};
