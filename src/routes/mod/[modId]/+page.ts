import type { PageLoad } from './$types';
import { queryStore } from '@urql/svelte';
import { GetModDocument } from '$lib/generated';
import { loadWaitForNoFetch } from '$lib/utils/gql';

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
