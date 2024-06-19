import schema from '$lib/generated/graphql.schema.urql.json';
import { createClient, fetchExchange, type Client } from '@urql/svelte';
import { cacheExchange } from '@urql/exchange-graphcache';
import { persistedExchange } from '@urql/exchange-persisted';
import { API_GRAPHQL } from './api';
import { userToken } from '$lib/stores/user';
import { authExchange } from '@urql/exchange-auth';
import type { LoadEvent } from '@sveltejs/kit';
import { get } from 'svelte/store';

export const initializeGraphQLClient = (fetch?: LoadEvent['fetch']): Client =>
  createClient({
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
          UserRoles: () => null,
          Compatibility: () => null,
          CompatibilityInfo: () => null,
          VersionTarget: () => null,
          VersionDependency: () => null
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
      authExchange(async (utils) => ({
        addAuthToOperation(operation) {
          return utils.appendHeaders(operation, {
            Authorization: get(userToken)
          });
        },
        didAuthError(error) {
          return error.message.indexOf('user not logged in') >= 0;
        },
        async refreshAuth() {
          // Token cannot be refreshed currently
        }
      })),
      persistedExchange({
        preferGetForPersistedQueries: true
      }),
      fetchExchange
    ]
  });
