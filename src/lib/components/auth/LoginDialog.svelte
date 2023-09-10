<script lang="ts">
  import {
    GetMeDocument,
    GetOAuthOptionsDocument,
    OAuthFacebookDocument,
    OAuthGithubDocument,
    OAuthGoogleDocument,
    LogoutDocument
  } from '$lib/generated';
  import { getContextClient, queryStore } from '@urql/svelte';
  import { browser } from '$app/environment';
  import { page } from '$app/stores';
  import Toast from '../general/Toast.svelte';
  import { user, userToken } from '$lib/stores/user';
  import cookie from 'js-cookie';
  import { getTranslate } from '@tolgee/svelte';
  import { getModalStore, type ModalSettings } from "@skeletonlabs/skeleton";
  import LoginModal from "$lib/modals/LoginModal.svelte";

  const client = getContextClient();

  export const { t } = getTranslate();

  if (browser) {
    const getMe = queryStore({
      query: GetMeDocument,
      client,
      variables: {},
      requestPolicy: 'network-only',
      pause: true
    });

    let first = true;
    userToken.subscribe((token) => {
      if (token) {
        const oneMonth = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000);
        cookie.set('token', token, {
          domain: window.location.hostname,
          expires: oneMonth
        });
      } else if (!first) {
        client
          .mutation(LogoutDocument, undefined, {
            requestPolicy: 'network-only'
          })
          .toPromise()
          .catch()
          .then(() => {
            cookie.remove('token');
          });
      }

      first = false;

      if (token) {
        getMe.pause();
        getMe.resume();

        const unsub = getMe.subscribe((response) => {
          if (!response.fetching) {
            if (response.error) {
              // TODO Toast or something
              console.error(response.error.message);
              unsub();
            } else if (response.data) {
              user.set(response.data.getMe);
              unsub();
            }
          }
        });
      } else {
        user.set(null);
      }
    });
  }

  const signInMethods = {
    github: OAuthGithubDocument,
    google: OAuthGoogleDocument,
    facebook: OAuthFacebookDocument
  };

  let errorMessage = '';
  let errorToast = false;
  let signingIn = false;


  $: loginModal = {
    type: 'component',
    component: {
      ref: LoginModal,
      props: {
        signingIn
      },
    },
  } satisfies ModalSettings;

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
      signingIn = true;
      modalStore.trigger(loginModal);

      client
        .mutation(signInMethods[signInMethod as 'github' | 'google' | 'facebook'], {
          code,
          state
        })
        .toPromise()
        .then((result) => {
          if (result.error) {
            console.error(result.error.message);
            errorMessage = 'Error logging in: ' + result.error.message;
            errorToast = true;
          } else {
            userToken.set(result.data.session.token);
            modalStore.close();
          }
        })
        .catch()
        .then(() => (signingIn = false));
    }
  }
</script>

<Toast bind:running={errorToast}>
  <span>{errorMessage}</span>
</Toast>
