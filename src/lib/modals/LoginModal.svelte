<script lang="ts">
  import { getTranslate } from '@tolgee/svelte';
  import { ConicGradient, type ConicStop } from '@skeletonlabs/skeleton';
  import { getContextClient, queryStore } from '@urql/svelte';
  import { GetOAuthOptionsDocument } from '$lib/generated';
  import { browser } from '$app/environment';

  export let signingIn = false;

  export const { t } = getTranslate();

  const client = getContextClient();

  const goTo = (service: string, url: string) => {
    localStorage.setItem('sign.in.method', service);
    window.location.href = url;
  };

  const conicStops: ConicStop[] = [
    { color: 'transparent', start: 0, end: 25 },
    { color: 'rgb(var(--color-primary-500))', start: 75, end: 100 }
  ];

  const oauthOptions = queryStore({
    query: GetOAuthOptionsDocument,
    client,
    variables: { callback_url: browser ? encodeURIComponent(window.location.origin + window.location.pathname) : '' },
    requestPolicy: 'network-only'
  });
</script>

<div class="card flex flex-col gap-2 p-4">
  <h2 class="text-2xl">{$t('user.sign-in')} / {$t('user.sign-up')}</h2>
  <div>
    <div class="grid grid-flow-row gap-4">
      {#if signingIn}
        <p>{$t('user.logging-in')}...</p>
        <div class="flex justify-center">
          <ConicGradient stops={conicStops} spin>Loading</ConicGradient>
        </div>
      {:else if $oauthOptions.fetching}
        <!-- TODO Placeholders -->
        <p>{$t('loading')}...</p>
      {:else if $oauthOptions.error}
        <p>Oh no... {$oauthOptions.error.message}</p>
      {:else}
        <button
          class="variant-ghost-primary btn"
          on:click={() => goTo('github', $oauthOptions.data.getOAuthOptions.github)}>
          {$t('login-dialog.sign-in-with-github')}
        </button>
        <button
          class="variant-ghost-primary btn"
          on:click={() => goTo('google', $oauthOptions.data.getOAuthOptions.google)}>
          {$t('login-dialog.sign-in-with-google')}
        </button>
        <button
          class="variant-ghost-primary btn"
          on:click={() => goTo('facebook', $oauthOptions.data.getOAuthOptions.facebook)}>
          {$t('login-dialog.sign-in-with-facebook')}
        </button>
      {/if}
    </div>
  </div>
</div>
