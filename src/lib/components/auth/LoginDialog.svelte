<script lang="ts">
  import {
    GetMeDocument,
    OAuthFacebookDocument,
    OAuthGithubDocument,
    OAuthGoogleDocument,
    LogoutDocument
  } from '$lib/generated';
  import { getContextClient } from '@urql/svelte';
  import { browser } from '$app/environment';
  import { page } from '$app/stores';
  import { user, userToken } from '$lib/stores/user';
  import cookie from 'js-cookie';
  import { getTranslate } from '@tolgee/svelte';
  import { getModalStore, getToastStore, type ModalSettings } from '@skeletonlabs/skeleton';
  import LoginModal from '$lib/modals/LoginModal.svelte';
  import { derived, get, writable } from 'svelte/store';

  const client = getContextClient();

  const toastStore = getToastStore();

  export const { t } = getTranslate();

  if (browser) {
    let first = true;

    userToken.subscribe((token) => {
      if (!token && !first) {
        // User is logged in but token has been set to null (logging out)
        client
          .mutation(LogoutDocument, undefined, {
            requestPolicy: 'network-only'
          })
          .toPromise()
          .catch()
          .then(() => {
            cookie.remove('token');
          });
        $user = null;
      } else if (token) {
        const oneMonth = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000);
        cookie.set('token', token, {
          expires: oneMonth
        });
        first = false;
        client
          .query(GetMeDocument, {}, { requestPolicy: 'network-only' })
          .toPromise()
          .then((response) => {
            if (response.error) {
              console.error(response.error.message);
            } else if (response.data) {
              $user = response.data.getMe;
            }
          });
      }
    });
  }

  const signInMethods = {
    github: OAuthGithubDocument,
    google: OAuthGoogleDocument,
    facebook: OAuthFacebookDocument
  };

  const signingIn = writable(false);
  const loginModal = derived(
    signingIn,
    (val) =>
      ({
        type: 'component',
        component: {
          ref: LoginModal,
          props: {
            signingIn: val
          }
        }
      }) satisfies ModalSettings
  );

  const modalStore = getModalStore();

  if (browser) {
    const signInMethod = localStorage.getItem('sign.in.method');
    localStorage.removeItem('sign.in.method');

    let queryParams = Object.fromEntries($page.url.searchParams.entries());
    if (Object.keys(queryParams).length === 0) {
      queryParams = Object.fromEntries(new URLSearchParams(window.location.search));
    }

    const code = queryParams.code;
    const state = queryParams.state;

    if (signInMethod && code && state) {
      signingIn.set(true);
      modalStore.trigger(get(loginModal));

      client
        .mutation(signInMethods[signInMethod as 'github' | 'google' | 'facebook'], {
          code,
          state
        })
        .toPromise()
        .then((result) => {
          if (result.error) {
            console.error(result.error.message);
            toastStore.trigger({
              message: 'Error logging in: ' + result.error.message,
              background: 'variant-filled-error',
              autohide: false
            });
          } else {
            $userToken = result.data.session.token;
            modalStore.close();
          }
        })
        .catch()
        .then(() => signingIn.set(false));
    }
  }
</script>
