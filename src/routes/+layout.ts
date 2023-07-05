import type { LayoutLoad } from './$types';
import './_global.postcss';
import { initializeGraphQLClient } from '$lib/core';

export const load: LayoutLoad = async ({ fetch }) => {
  const client = initializeGraphQLClient(fetch);
  return {
    client
  };
};
