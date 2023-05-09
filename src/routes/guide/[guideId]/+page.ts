import type { PageLoad } from './$types';
import { queryStore } from '@urql/svelte';
import { GetGuideDocument } from '$lib/generated';
import { loadWaitForNoFetch } from '$lib/utils/gql';

export const load: PageLoad = async ({ params, parent }) => ({
  ...params,
  ...(await loadWaitForNoFetch({
    guide: queryStore({
      query: GetGuideDocument,
      client: (await parent()).client,
      variables: { guide: params.guideId }
    })
  }))
});
