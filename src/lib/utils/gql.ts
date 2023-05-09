import type { OperationResultStore } from '@urql/svelte';
import { browser } from '$app/env';

export const loadWaitForNoFetch = async <T extends Record<string, OperationResultStore>>(queries: T): T => {
  // If on SSR, block the load until all queries have returned
  if (!browser) {
    await Promise.all(
      Object.values(queries).map(
        (query) =>
          new Promise<void>((resolve) => {
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
