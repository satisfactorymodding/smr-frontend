<script lang="ts">
  import LoginDialog from '$lib/components/auth/LoginDialog.svelte';
  import { setContextClient } from '@urql/svelte';
  import { onMount } from 'svelte';
  import { customProtocolCheck, hasLauncher } from '$lib/stores/launcher';
  import Sidebar from '$lib/components/general/Sidebar.svelte';
  import AnnouncementHeader from '$lib/components/announcements/AnnouncementHeader.svelte';
  import { base } from '$app/paths';
  import { browser } from '$app/environment';
  import { PUBLIC_GOOGLE_SITE_TAG } from '$env/static/public';
  import type { LayoutData } from './$types';
  import { TolgeeProvider } from '@tolgee/svelte';
  import { initializeStores, Modal, storePopup, Drawer, Toast } from '@skeletonlabs/skeleton';
  import TopBar from '$lib/components/general/TopBar.svelte';
  import './_global.postcss';
  import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';

  export let data: LayoutData;

  const { client, tolgee } = data;

  initializeStores();
  storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

  let gTag: unknown;
  if (browser) {
    gTag = PUBLIC_GOOGLE_SITE_TAG as string;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.gTag = gTag;
  }

  let root: HTMLElement;
  onMount(async () => {
    if (browser) {
      root = document.body;

      await import('cookieconsent/src/cookieconsent');

      tolgee.on('initialLoad', () => {
        if ('cookieconsent' in window) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // cspell:ignore initialise
          window.cookieconsent.initialise({
            palette: {
              popup: {
                background: '#000'
              },
              button: {
                background: '#f1d600'
              }
            },
            content: {
              message: tolgee.t('cookieconsent.message'),
              link: tolgee.t('cookieconsent.link'),
              dismiss: tolgee.t('cookieconsent.dismiss')
            },
            theme: 'edgeless',
            position: 'bottom-right'
          });
        }
      });

      customProtocolCheck.set(await import('$lib/thirdparty/custom_protocol'));

      if (localStorage.getItem('hasLauncher') && localStorage.getItem('hasLauncher').toLocaleLowerCase() === 'true') {
        hasLauncher.set(true);
      }

      hasLauncher.subscribe((value) => {
        if (value === true || value === false) {
          localStorage.setItem('hasLauncher', value.toString().toLocaleLowerCase());
        }
      });
    }
  });

  let accessibility = false;
  $: root && (accessibility ? root.classList.add('accessibility') : root.classList.remove('accessibility'));

  setContextClient(client);
</script>

<svelte:head>
  <link rel="icon" type="image/x-icon" href="{base}/assets/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="{base}/assets/apple-touch-icon.png?v=69P26YMB35" />
  <link rel="icon" type="image/png" sizes="32x32" href="{base}/assets/favicon-32x32.png?v=69P26YMB35" />
  <link rel="icon" type="image/png" sizes="16x16" href="{base}/assets/favicon-16x16.png?v=69P26YMB35" />
  <link rel="manifest" href="{base}/manifest.json?v=69P26YMB35" />
  <link rel="mask-icon" href="{base}/assets/safari-pinned-tab.svg?v=69P26YMB35" color="#da8517" />
  <link rel="shortcut icon" href="{base}/assets/favicon.ico?v=69P26YMB35" />
  <meta name="msapplication-TileColor" content="#da8517" />
  <meta name="msapplication-config" content="{base}/static/assets/browserconfig.xml?v=69P26YMB35" />
  <meta name="theme-color" content="#ff6f00" />

  <link rel="preload" href="{base}/assets/fonts/flow-rounded.woff" as="font" type="font/woff" />

  {#if gTag}
    <script async src="https://www.googletagmanager.com/gtag/js?id={gTag}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];

      function gtag() {
        dataLayer.push(arguments);
      }

      gtag('js', new Date());

      gtag('config', window['gTag']);
    </script>
  {/if}
</svelte:head>

<TolgeeProvider {tolgee}>
  <Toast />
  <Modal />

  <Drawer>
    <Sidebar bind:accessibility />
  </Drawer>

  <div class="grid grid-rows-[auto_1fr_auto]">
    <header class="sticky top-0 z-10">
      <TopBar />
    </header>
    <div class="grid grid-cols-1 md:grid-cols-[auto_1fr]">
      <aside class="sticky top-[calc(72px)] col-span-1 hidden h-[calc(100vh-72px)] xl:block">
        <Sidebar bind:accessibility />
      </aside>
      <main class="space-y-4 p-4">
        <AnnouncementHeader />
        <slot />
      </main>
    </div>
  </div>

  <LoginDialog />
</TolgeeProvider>
