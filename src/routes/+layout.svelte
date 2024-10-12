<script lang="ts">
  import { page } from '$app/stores'; // Importing this enables dynamic handling of <meta> tags

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
  import { initializeStores, AppShell, Modal, storePopup, Drawer, Toast } from '@skeletonlabs/skeleton';
  import TopBar from '$lib/components/general/TopBar.svelte';
  import './_global.postcss';
  import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';

  export let data: LayoutData;
  // Using the $page store, this script supplies default metadeta
  const defaultMeta = {
    title: 'Satisfactory Mod Repository',
    description: 'Your source for mods!',
    image: '/assets/favicon.ico',
    url: $page.url.origin + $page.url.pathname
  };
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
  <!-- STATIC head elements that don't change across page nav -->
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

  <!-- Ensure the meta tags are only rendered if no duplication occurs -->
  <!-- Title and meta tags dynamically controlled by page data or default values -->
  <title>{$page.data.meta?.title || defaultMeta.title} - SMR</title>
  <meta name="description" content={$page.data.meta?.description || defaultMeta.description} />
  <meta property="og:title" content="{$page.data.meta?.title || defaultMeta.title} - SMR" />
  <meta property="og:description" content={$page.data.meta?.description || defaultMeta.description} />
  <meta property="og:image" content={$page.data.meta?.image || defaultMeta.image} />
  <meta property="og:url" content={$page.data.meta?.url || defaultMeta.url} />

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

  <AppShell>
    <svelte:fragment slot="header">
      <TopBar />
    </svelte:fragment>

    <svelte:fragment slot="sidebarLeft">
      <aside class="hidden h-full xl:block">
        <Sidebar bind:accessibility />
      </aside>
    </svelte:fragment>

    <svelte:fragment slot="pageHeader">
      <AnnouncementHeader />
    </svelte:fragment>

    <div class="app-content w-full overflow-auto">
      <main class="main-content min-h-100% xl:py-6 xl:pr-3">
        <slot />
      </main>
    </div>
  </AppShell>

  <LoginDialog />
</TolgeeProvider>
