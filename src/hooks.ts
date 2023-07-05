import { API_BASE } from '$lib/core';
import type { HandleFetch } from '@sveltejs/kit';
import { env } from '$env/dynamic/public';

export const handleFetch: HandleFetch = async ({ request, fetch }) => {
  if (env.PUBLIC_API_BASE_OVERRIDE) {
    if (request.url.startsWith(API_BASE)) {
      request = new Request(request.url.replace(API_BASE, env.PUBLIC_API_BASE_OVERRIDE), request);
    }
  }

  return fetch(request);
};
