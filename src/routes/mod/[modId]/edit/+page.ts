import { GetModDocument } from '$lib/generated';
import { loadWaitForNoFetch } from '$lib/utils/gql';
import { queryStore } from '@urql/svelte';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, parent }) => ({
  ...params,
  ...(await loadWaitForNoFetch({
    mod: queryStore({
      query: GetModDocument,
      client: (await parent()).client,
      variables: { mod: params.modId }
    })
  }))
});
