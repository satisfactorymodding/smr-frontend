import type { LayoutLoad } from './$types';
import { initializeGraphQLClient } from '$lib/core';

export const load: LayoutLoad = async ({ fetch }) => {
  const client = initializeGraphQLClient(fetch);
  return {
    client
  };
};
