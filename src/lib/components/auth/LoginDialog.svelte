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
  import { mutation, operationStore, query } from '@urql/svelte';
  import { browser } from '$app/env';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import Toast from '../general/Toast.svelte';
  import { user, userToken } from '$lib/stores/user';
  import cookie from 'js-cookie';
  import Dialog, { Title, Content } from '@smui/dialog';
  import Button from '@smui/button';
  import CircularProgress from '@smui/circular-progress';

  const logoutMutation = mutation({
    query: LogoutDocument
  });

  if (browser) {
    const getMe = operationStore(GetMeDocument, undefined, {
      pause: true
    });

    query(getMe);

    let first = true;
    userToken.subscribe((token) => {
      if (token) {
        const oneMonth = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000);
        cookie.set('token', token, {
          domain: window.location.hostname,
          expires: oneMonth
        });
      } else if (!first) {
        logoutMutation(undefined, {
          requestPolicy: 'network-only'
        })
          .catch()
          .then(() => {
            while (typeof cookie.get('token') === 'string') {
              cookie.remove('token');
            }
          });
      }

      first = false;

      if (token) {
        getMe.reexecute({
          requestPolicy: 'network-only',
          fetchOptions: {
            cache: 'no-cache'
          }
        });

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
    github: mutation({
      query: OAuthGithubDocument
    }),
    google: mutation({
      query: OAuthGoogleDocument
    }),
    facebook: mutation({
      query: OAuthFacebookDocument
    })
  };

  let errorMessage = '';
  let errorToast = false;
  let signingIn = false;

  if (browser) {
    const signInMethod = localStorage.getItem('sign.in.method');
    localStorage.removeItem('sign.in.method');

    let queryParams = Object.fromEntries($page.query.entries());
    if (Object.keys(queryParams).length === 0) {
      queryParams = Object.fromEntries(new URLSearchParams(window.location.search));
    }

    const code = queryParams['code'];
    const state = queryParams['state'];

    if (signInMethod && code && state) {
      signingIn = true;
      loginDialogOpen.set(true);

      signInMethods[signInMethod as 'github' | 'google' | 'facebook']({
        code,
        state
      })
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

  const oauthOptions = operationStore(
    GetOAuthOptionsDocument,
    { callback_url: '' },
    {
      requestPolicy: 'network-only'
    }
  );

  $: if ($loginDialogOpen) {
    oauthOptions.variables.callback_url = encodeURIComponent(window.location.origin + window.location.pathname);
    query(oauthOptions);
  }

  const goTo = (service: string, url: string) => {
    localStorage.setItem('sign.in.method', service);
    goto(url);
  };
</script>

<Dialog bind:open={$loginDialogOpen}>
  <Title>Login / Sign Up</Title>
  <Content>
    <div class="grid grid-flow-row gap-4">
      {#if signingIn}
        <p>Logging in...</p>
        <div class="flex justify-center">
          <CircularProgress class="h-10 w-10" indeterminate />
        </div>
      {:else if $oauthOptions.fetching}
        <!-- TODO Placeholders -->
        <p>Loading...</p>
      {:else if $oauthOptions.error}
        <p>Oh no... {$oauthOptions.error.message}</p>
      {:else}
        <Button variant="outlined" on:click={() => goTo('github', $oauthOptions.data.getOAuthOptions.github)}>
          Sign in with Github
        </Button>
        <Button variant="outlined" on:click={() => goTo('google', $oauthOptions.data.getOAuthOptions.google)}>
          Sign in with Google
        </Button>
        <Button variant="outlined" on:click={() => goTo('facebook', $oauthOptions.data.getOAuthOptions.facebook)}>
          Sign in with Facebook
        </Button>
      {/if}
    </div>
  </Content>
</Dialog>

<Toast bind:running={errorToast}>
  <span>{errorMessage}</span>
</Toast>
