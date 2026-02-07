import type { PageLoad } from './$types';
import { queryStore } from '@urql/svelte';
import { GetModpackDocument } from '$lib/generated';
import { loadWaitForNoFetch } from '$lib/utils/gql';

export const prerender = false;

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
