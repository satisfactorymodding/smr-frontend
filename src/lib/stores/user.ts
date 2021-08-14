import {writable} from 'svelte/store';
import cookie from 'js-cookie';
import {browser} from '$app/env';
import {operationStore, query} from "@urql/svelte";
import {GetMeDocument, GetMeQuery} from "$lib/generated";

export type MeUser = GetMeQuery['getMe'];

export const userToken = writable<string | null>(cookie.get('token') || null);

export const user = writable<MeUser | null>(null);

export const initializeUserStore = (): void => {
  if (browser) {
    const getMe = operationStore(GetMeDocument);

    let first = true;
    userToken.subscribe(token => {
      if (token) {
        const oneMonth = new Date(new Date().getTime() + (30 * 24 * 60 * 60 * 1000));
        cookie.set('token', token, {
          domain: window.location.hostname,
          expires: oneMonth,
        });
      } else if (!first) {
        cookie.remove('token');
      }

      first = false;

      if (token) {
        query(getMe);

        const unsub = getMe.subscribe((response) => {
          if (!response.fetching) {
            if (response.error) {
              // TODO Toast or something
              console.error(response.error.message);
            } else {
              user.set(response.data.getMe)
            }
            unsub();
          }
        });
      } else {
        user.set(null);
      }
    });
  }
}

