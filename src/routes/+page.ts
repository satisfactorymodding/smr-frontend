import { queryStore } from '@urql/svelte';
import { GetModpacksDocument, GetModsDocument, ModFields, Order } from '$lib/generated';
import { loadWaitForNoFetch } from '$lib/utils/gql';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => ({
  ...(await loadWaitForNoFetch({
    mods: queryStore({
      query: GetModsDocument,
      client: (await parent()).client,
      variables: {
        offset: 0,
        limit: 4,
        order: Order.Desc,
        orderBy: ModFields.LastVersionDate
      }
    })
  })),
  modpacks: queryStore({
    query: GetModpacksDocument,
    client: (await parent()).client,
    variables: {
      offset: 0,
      limit: 4,
      order: Order.Desc
    }
  })
});
