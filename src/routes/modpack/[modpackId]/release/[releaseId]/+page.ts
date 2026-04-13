import type { PageLoad } from './$types';
import { queryStore } from '@urql/svelte';
import { GetModpackDocument } from '$lib/generated';
import { loadWaitForNoFetch } from '$lib/utils/gql';

export const load: PageLoad = async ({ params, parent }) => {
  const { client } = await parent();
  return {
    ...params,
    ...(await loadWaitForNoFetch({
      modpack: queryStore({
        query: GetModpackDocument,
        client,
        variables: { modpackID: params.modpackId },
        requestPolicy: 'cache-and-network'
      })
    }))
  };
};
