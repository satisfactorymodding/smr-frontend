import type { PageLoad } from './$types';
import { queryStore } from '@urql/svelte';
import { GetUserDocument } from '$lib/generated';
import { loadWaitForNoFetch } from '$lib/utils/gql';

export const load: PageLoad = async ({ params, parent }) => ({
  ...params,
  ...(await loadWaitForNoFetch({
    user: queryStore({
      query: GetUserDocument,
      client: (await parent()).client,
      variables: { user: params.userId }
    })
  }))
});
