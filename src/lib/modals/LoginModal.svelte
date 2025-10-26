<script lang="ts">
  import { getTranslate } from '@tolgee/svelte';
  import { getContextClient, queryStore } from '@urql/svelte';
  import { GetOAuthOptionsDocument } from '$lib/generated';
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';

  interface Props {
    signingIn?: boolean;
    open?: boolean;
  }

  let { signingIn = false, open = $bindable(false) }: Props = $props();

  export const { t } = getTranslate();

  const client = getContextClient();

  let self: HTMLDialogElement;

  const goTo = (service: string, url: string) => {
    self.close();
    localStorage.setItem('sign.in.method', service);
    window.location.href = url;
  };

  const oauthOptions = queryStore({
    query: GetOAuthOptionsDocument,
    client,
    variables: { callback_url: browser ? encodeURIComponent(window.location.origin + window.location.pathname) : '' },
    requestPolicy: 'network-only'
  });

  onMount(() => {
    if (open) {
      self.showModal();
    }
  });

  $effect(() => {
    if (open) {
      self.showModal();
    } else {
      self.close();
    }
  });
</script>

<dialog
  data-dialog
  bind:this={self}
  class="top-1/2 left-1/2 z-10 max-w-[640px] -translate-1/2 space-y-4 rounded-container bg-surface-100-900 p-4 text-inherit backdrop:bg-surface-50/75 dark:backdrop:bg-surface-950/75">
  <div class="flex flex-col gap-2 card preset-filled-surface-100-900 p-4">
    <h2 class="text-2xl">{$t('user.sign-in')} / {$t('user.sign-up')}</h2>
    <div>
      <div class="grid grid-flow-row gap-4">
        {#if signingIn}
          <p>{$t('user.logging-in')}...</p>
          <div class="flex justify-center">
            <div
              class="size-24 animate-spin rounded-full bg-conic/decreasing from-primary-800 via-primary-700 to-primary-600">
            </div>
          </div>
        {:else if $oauthOptions.fetching}
          <!-- TODO Placeholders -->
          <p>{$t('loading')}...</p>
        {:else if $oauthOptions.error}
          <p>Oh no... {$oauthOptions.error.message}</p>
        {:else}
          <button
            class="btn border border-primary-500 preset-tonal-primary"
            onclick={() => goTo('github', $oauthOptions.data.getOAuthOptions.github)}>
            {$t('login-dialog.sign-in-with-github')}
          </button>
          <button
            class="btn border border-primary-500 preset-tonal-primary"
            onclick={() => goTo('google', $oauthOptions.data.getOAuthOptions.google)}>
            {$t('login-dialog.sign-in-with-google')}
          </button>
          <button
            class="btn border border-primary-500 preset-tonal-primary"
            onclick={() => goTo('facebook', $oauthOptions.data.getOAuthOptions.facebook)}>
            {$t('login-dialog.sign-in-with-facebook')}
          </button>
          <button class="btn border border-primary-500 preset-tonal-surface" onclick={() => (open = false)}>
            {$t('close')}
          </button>
        {/if}
      </div>
    </div>
  </div>
</dialog>
