import type { OperationStore } from '@urql/svelte/dist/types/operationStore';
import { get, readable } from 'svelte/store';
import type { Load } from '@sveltejs/kit';
import { browser } from '$app/env';
import { gqlClient } from '$lib/stores/global';

export const loadWaitForNoFetch = (queries: { [key: string]: OperationStore }): Load => {
  return async function () {
    if (browser) {
      const result = Object.keys(queries).map((key) => {
        const query = queries[key];

        get(gqlClient)
          .query(query.query, query.variables, query.context)
          .toPromise()
          .then((data) => {
            query.set({
              ...data,
              fetching: false
            });
          })
          .catch((err) => {
            query.set({
              fetching: false,
              data: undefined,
              error: err
            });
          });

        query.set({
          fetching: true
        });

        return [key, query];
      });

      return {
        props: Object.fromEntries(result)
      };
    }

    return {
      props: Object.fromEntries(
        await Promise.all(
          Object.keys(queries).map((key) => {
            const query = queries[key];
            return get(gqlClient)
              .query(query.query, query.variables, query.context)
              .toPromise()
              .then((data) => [key, readable(data)]);
          })
        )
      )
    };
  };
};
