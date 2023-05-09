import type { PageLoad } from './$types';
import { queryStore } from '@urql/svelte';
import { GetModVersionDocument } from '$lib/generated';
import { loadWaitForNoFetch } from '$lib/utils/gql';

export const load: PageLoad = async ({ params, parent }) => ({
  ...params,
  ...(await loadWaitForNoFetch({
    version: queryStore({
      query: GetModVersionDocument,
      client: (await parent()).client,
      variables: { version: params.versionId }
    })
  }))
});
