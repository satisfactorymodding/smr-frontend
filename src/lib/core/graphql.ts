import schema from '$lib/generated/graphql.schema.urql.json';
import type { Client } from '@urql/svelte';
import { createClient } from '@urql/svelte';
import { cacheExchange } from '@urql/exchange-graphcache';
import { persistedFetchExchange } from '@urql/exchange-persisted-fetch';
import { multipartFetchExchange } from '@urql/exchange-multipart-fetch';
import { API_GRAPHQL } from './api';
import { userToken } from '$lib/stores/user';
import { authExchange } from '@urql/exchange-auth';
import type { Operation } from '@urql/core';
import type { LoadInput } from '@sveltejs/kit/types/page';
import { get } from 'svelte/store';

interface SMRAuthState {
  token: string | null;
}

export const initializeGraphQLClient = (fetch?: LoadInput['fetch']): Client => {
  return createClient({
    url: API_GRAPHQL,
    fetch,
    exchanges: [
      cacheExchange({
        schema,
        keys: {
          GetMods: () => null,
          LatestVersions: () => null,
          UserMod: () => null,
          GetGuides: () => null,
          OAuthOptions: () => null,
          UserRoles: () => null
        },
        updates: {
          Mutation: {
            deleteGuide(_result, args, cache) {
              cache.invalidate({
                __typename: 'Guide',
                id: args.guideId as string
              });
            },
            deleteMod(_result, args, cache) {
              cache.invalidate({
                __typename: 'Mod',
                id: args.modId as string
              });
            },
            approveMod(_result, args, cache) {
              cache.invalidate({
                __typename: 'Mod',
                id: args.modId as string
              });
            },
            denyMod(_result, args, cache) {
              cache.invalidate({
                __typename: 'Mod',
                id: args.modId as string
              });
            },
            approveVersion(_result, args, cache) {
              cache.invalidate({
                __typename: 'Version',
                id: args.versionId as string
              });
            },
            denyVersion(_result, args, cache) {
              cache.invalidate({
                __typename: 'Version',
                id: args.versionId as string
              });
            },
            deleteSMLVersion(_result, args, cache) {
              cache.invalidate({
                __typename: 'SMLVersion',
                id: args.smlVersionId as string
              });
            },
            deleteVersion(_result, args, cache) {
              cache.invalidate({
                __typename: 'Version',
                id: args.versionId as string
              });
            },
            updateVersion(_result, args, cache) {
              cache.invalidate({
                __typename: 'Version',
                id: args.versionId as string
              });
            }
          }
        }
      }),
      authExchange({
        addAuthToOperation(params: { authState: SMRAuthState | null; operation: Operation }): Operation {
          if (!params.authState || !params.authState.token) {
            return params.operation;
          }

          const fetchOptions =
            typeof params.operation.context.fetchOptions === 'function'
              ? params.operation.context.fetchOptions()
              : params.operation.context.fetchOptions || {};

          return {
            ...params.operation,
            context: {
              ...params.operation.context,
              fetchOptions: {
                ...fetchOptions,
                headers: {
                  ...fetchOptions.headers,
                  Authorization: params.authState.token
                }
              }
            }
          };
        },
        getAuth: async (): Promise<SMRAuthState | null> => {
          return {
            token: get(userToken)
          };
        },
        didAuthError({ error }): boolean {
          return error.message.indexOf('user not logged in') >= 0;
        }
      }),
      persistedFetchExchange({
        preferGetForPersistedQueries: true
      }),
      multipartFetchExchange
    ]
  });
};
