import { API_BASE } from '$lib/core';
import type { Handle, HandleFetch } from '@sveltejs/kit';
import { env } from '$env/dynamic/public';

export const handleFetch = (async ({ request, fetch }) => {
  if (env.PUBLIC_API_BASE_OVERRIDE) {
    if (request.url.startsWith(API_BASE) && env.PUBLIC_API_BASE_OVERRIDE) {
      request = new Request(request.url.replace(API_BASE, env.PUBLIC_API_BASE_OVERRIDE), request);
    }
  }

  return fetch(request);
}) satisfies HandleFetch;

export const handle = (async ({ event, resolve }) =>
  resolve(event, {
    filterSerializedResponseHeaders: (name) => name === 'content-type'
  })) satisfies Handle;
