import type { PageLoad } from './$types';
import { queryStore } from '@urql/svelte';
import { GetModDocument } from '$lib/generated';
import { loadWaitForNoFetch } from '$lib/utils/gql';

export const prerender = false;

export const load: PageLoad = async ({ params, parent }) => ({
  ...params,
  ...(await loadWaitForNoFetch({
    mod: queryStore({
      query: GetModDocument,
      client: (await parent()).client,
      variables: { mod: params.modId },
      requestPolicy: 'network-only'
    })
  })),
  meta: {
    title: 'Mods',
    description: 'Mods available from the Satisfactory Mod Repository',
    image: '/assets/favicon.ico'
  }
});
