import {API_BASE} from "$lib/core";
import type {ExternalFetch} from "@sveltejs/kit";

export const externalFetch: ExternalFetch = async (request) => {
  if (process && process.env && process.env.API_BASE_OVERRIDE) {
    if (request.url.startsWith(API_BASE as string)) {
      request = new Request(
        request.url.replace(API_BASE as string, process.env.API_BASE_OVERRIDE),
        request
      );
    }
  }

  return fetch(request);
}
