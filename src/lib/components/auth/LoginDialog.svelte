<script lang="ts">
  import Dialog from "../general/Dialog.svelte";
  import {loginDialogOpen} from "$lib/stores/global";
  import {
    GetMeDocument,
    GetOAuthOptionsDocument,
    OAuthFacebookDocument,
    OAuthGithubDocument,
    OAuthGoogleDocument
  } from "../../generated";
  import {mutation, operationStore, query} from "@urql/svelte";
  import Icon from "@iconify/svelte";
  import githubIcon from '@iconify/icons-mdi/github.js';
  import googleIcon from '@iconify/icons-mdi/google.js';
  import facebookIcon from '@iconify/icons-mdi/facebook.js';
  import {browser} from '$app/env';
  import {page} from '$app/stores';
  import {goto} from '$app/navigation';
  import Toast from "../general/Toast.svelte";
  import {user, userToken} from "$lib/stores/user";
  import cookie from "js-cookie";

  if (browser) {
    const getMe = operationStore(GetMeDocument, undefined, {
      pause: true
    });

    query(getMe);

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
        getMe.reexecute({
          requestPolicy: 'network-only',
        });

        const unsub = getMe.subscribe((response) => {
          if (!response.fetching) {
            if (response.error) {
              // TODO Toast or something
              console.error(response.error.message);
              unsub();
            } else if (response.data) {
              user.set(response.data.getMe)
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
  }

  let errorMessage = '';
  let errorToast = false;

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
      signInMethods[signInMethod as 'github' | 'google' | 'facebook']({
        code,
        state
      }).then((result) => {
        if (result.error) {
          console.error(result.error.message);
          errorMessage = 'Error logging in: ' + result.error.message;
          errorToast = true;
        } else {
          userToken.set(result.data.session.token);
        }
      })
    }
  }

  const oauthOptions = operationStore(
    GetOAuthOptionsDocument,
    {callback_url: ''},
    {
      requestPolicy: 'network-only'
    }
  )

  $: if ($loginDialogOpen) {
    oauthOptions.variables.callback_url = encodeURIComponent(window.location.origin + window.location.pathname);
    query(oauthOptions);
  }

  const goTo = (service: string, url: string) => {
    localStorage.setItem('sign.in.method', service);
    goto(url);
  }
</script>

<Dialog bind:open={$loginDialogOpen}>
  <div class="grid grid-flow-row gap-4">
    <h3 class="text-2xl font-bold">Login / Sign Up</h3>
    {#if $oauthOptions.fetching}
      <!-- TODO Placeholders -->
      <p>Loading...</p>
    {:else if $oauthOptions.error}
      <p>Oh no... {$oauthOptions.error.message}</p>
    {:else}
      <button on:click={() => goTo('github', $oauthOptions.data.getOAuthOptions.github)} class="login-button">
        <Icon icon={githubIcon} inline={true} class="inline-block mr-2"/>
        <span>Sign in with Github</span>
      </button>
      <button on:click={() => goTo('google', $oauthOptions.data.getOAuthOptions.google)} class="login-button">
        <Icon icon={googleIcon} inline={true} class="inline-block mr-2"/>
        <span>Sign in with Google</span>
      </button>
      <button on:click={() => goTo('facebook', $oauthOptions.data.getOAuthOptions.facebook)} class="login-button">
        <Icon icon={facebookIcon} inline={true} class="inline-block mr-2"/>
        <span>Sign in with Facebook</span>
      </button>
    {/if}
  </div>
</Dialog>

<Toast bind:running={errorToast}>
  <span>{errorMessage}</span>
</Toast>

<style lang="postcss">
  .login-button {
    @apply px-4 py-2 hover:bg-white hover:bg-opacity-10 rounded;
    @apply focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50;
  }
</style>
