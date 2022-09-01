import type { OperationStore } from '@urql/svelte';
import { get, readable } from 'svelte/store';
import type { Load } from '@sveltejs/kit';
import { browser } from '$app/env';
import { gqlClient } from '$lib/stores/global';

// Pretend you didn't see this file

export const loadWaitForNoFetch = (queries: { [key: string]: OperationStore }): Load =>
  async function () {
    // If on the browser, initialize queries and start fetching, but instantly return out
    if (browser) {
      const result = Object.keys(queries).map((key) => {
        const query = queries[key];

        // Retrieve the global GQL client
        get(gqlClient)
          .query(query.query, query.variables, query.context)
          .toPromise()
          .then((data) => {
            // Update query fields without calling set
            query.update((value) => {
              (value as unknown).fetching = false;
              if (data) {
                (value as unknown).data = data.data;
                (value as unknown).error = data.error;
              }
              return value;
            });

            // Force query to update its underlying store
            query.set({
              context: {
                ...query.context,
                updated: new Date()
              }
            });
          })
          .catch((err) => {
            // Update query fields without calling set
            query.update((value) => {
              (value as unknown).fetching = false;
              (value as unknown).data = undefined;
              (value as unknown).error = err;
              return value;
            });

            // Force query to update its underlying store
            query.set({
              context: {
                ...query.context,
                updated: new Date()
              }
            });
          });

        // Update query fields without calling set
        query.update((value) => {
          (value as unknown).fetching = true;
          return value;
        });

        // Force query to update its underlying store
        query.set({
          context: {
            ...query.context,
            updated: new Date()
          }
        });

        return [key, query];
      });

      return {
        props: Object.fromEntries(result)
      };
    }

    // If on SSR, block the load until all queries have returned
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
