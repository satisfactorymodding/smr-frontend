<script lang="ts">
  import { loginDialogOpen } from '$lib/stores/global';
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
  import { goto } from '$app/navigation';
  import Toast from '../general/Toast.svelte';
  import { user, userToken } from '$lib/stores/user';
  import cookie from 'js-cookie';
  import Dialog, { Title, Content } from '@smui/dialog';
  import Button from '@smui/button';
  import CircularProgress from '@smui/circular-progress';
  import { getTranslate } from '@tolgee/svelte';

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
      loginDialogOpen.set(true);

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
            loginDialogOpen.set(false);
          }
        })
        .catch()
        .then(() => (signingIn = false));
    }
  }

  const oauthOptions = queryStore({
    query: GetOAuthOptionsDocument,
    client,
    variables: { callback_url: browser ? encodeURIComponent(window.location.origin + window.location.pathname) : '' },
    requestPolicy: 'network-only'
  });

  $: if ($loginDialogOpen) {
    oauthOptions.pause();
    oauthOptions.resume();
  }

  const goTo = (service: string, url: string) => {
    localStorage.setItem('sign.in.method', service);
    goto(url);
  };
</script>

<Dialog bind:open={$loginDialogOpen}>
  <Title>{$t('user.sign-in')} / {$t('user.sign-up')}</Title>
  <Content>
    <div class="grid grid-flow-row gap-4">
      {#if signingIn}
        <p>{$t('user.logging-in')}...</p>
        <div class="flex justify-center">
          <CircularProgress class="h-10 w-10" indeterminate />
        </div>
      {:else if $oauthOptions.fetching}
        <!-- TODO Placeholders -->
        <p>{$t('loading')}...</p>
      {:else if $oauthOptions.error}
        <p>Oh no... {$oauthOptions.error.message}</p>
      {:else}
        <Button variant="outlined" on:click={() => goTo('github', $oauthOptions.data.getOAuthOptions.github)}>
          {$t('login-dialog.sign-in-with-github')}
        </Button>
        <Button variant="outlined" on:click={() => goTo('google', $oauthOptions.data.getOAuthOptions.google)}>
          {$t('login-dialog.sign-in-with-google')}
        </Button>
        <Button variant="outlined" on:click={() => goTo('facebook', $oauthOptions.data.getOAuthOptions.facebook)}>
          {$t('login-dialog.sign-in-with-facebook')}
        </Button>
      {/if}
    </div>
  </Content>
</Dialog>

<Toast bind:running={errorToast}>
  <span>{errorMessage}</span>
</Toast>
