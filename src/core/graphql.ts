import schema from '../generated/graphql.schema.urql.json';
import {initClient} from '@urql/svelte';
import {cacheExchange} from '@urql/exchange-graphcache';
import {persistedFetchExchange} from './persisted-query/persistedFetchExchange';
import {multipartFetchExchange} from '@urql/exchange-multipart-fetch';

export const initializeGraphQLClient = (): void => {
  initClient({
    url: 'https://api.ficsit.app/v2/query',
    exchanges: [
      cacheExchange({
        schema,
        keys: {
          GetMods: () => null
        }
      }),
      persistedFetchExchange({
        preferGetForPersistedQueries: true,
      }),
      multipartFetchExchange,
    ]
  });
}
