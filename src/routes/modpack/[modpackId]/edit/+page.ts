import { GetModpackDocument } from '$lib/generated';
import { loadWaitForNoFetch } from '$lib/utils/gql';
import { queryStore } from '@urql/svelte';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, parent }) => ({
  ...params,
  ...(await loadWaitForNoFetch({
    modpack: queryStore({
      query: GetModpackDocument,
      client: (await parent()).client,
      variables: { modpackID: params.modpackId },
      requestPolicy: 'network-only'
    })
  }))
});
