<script lang="ts">
  import LoginDialog from '$lib/components/auth/LoginDialog.svelte';
  import { setContextClient } from '@urql/svelte';
  import { AppContent, Scrim } from '@smui/drawer';
  import { onMobile, sidebarOpen } from '$lib/stores/global';
  import { onMount } from 'svelte';
  import { customProtocolCheck, hasLauncher } from '$lib/stores/launcher';
  import Sidebar from '$lib/components/general/Sidebar.svelte';
  import AnnouncementHeader from '$lib/components/announcements/AnnouncementHeader.svelte';
  import { base } from '$app/paths';
  import { browser } from '$app/environment';
  import { PUBLIC_GOOGLE_SITE_TAG, PUBLIC_TOLGEE_API_URL, PUBLIC_TOLGEE_API_KEY } from '$env/static/public';
  import type { LayoutData } from './$types';
  import { TolgeeProvider, Tolgee, DevTools, FormatSimple, LanguageDetector } from '@tolgee/svelte';

  import enCommon from '../i18n/common/en.json';
  import deCommon from '../i18n/common/de.json';
  import frCommon from '../i18n/common/fr.json';
  import lvCommon from '../i18n/common/lv.json';
  import TopBar from '$lib/components/general/TopBar.svelte';

  export let data: LayoutData;

  const { client } = data;

  const tolgee = Tolgee()
    .use(DevTools())
    .use(FormatSimple())
    .use(LanguageDetector())
    .init({
      defaultNs: 'common',

      defaultLanguage: 'en',
      fallbackLanguage: 'en',

      apiUrl: PUBLIC_TOLGEE_API_URL,
      apiKey: PUBLIC_TOLGEE_API_KEY,

      staticData: {
        'en:common': enCommon,
        'de:common': deCommon,
        'fr:common': frCommon,
        'lv:common': lvCommon
      }
    });

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

      if ('cookieconsent' in window) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.cookieconsent.initialise({
          palette: {
            popup: {
              background: '#000'
            },
            button: {
              background: '#f1d600'
            }
          },
          theme: 'edgeless',
          position: 'bottom-right'
        });
      }

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

  let drawerVariant: 'modal' | undefined = 'modal';
  let hideTopElements = true;
  if (browser) {
    onMobile.subscribe((mobile) => {
      drawerVariant = mobile ? 'modal' : undefined;
      hideTopElements = mobile;
    });
  }
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
    <!-- Global site tag (gtag.js) - Google Analytics -->
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
  <div class="app-container">
    <TopBar />

    <div class="drawer-container">
      <Sidebar bind:open={$sidebarOpen} bind:accessibility bind:drawerVariant bind:hideTopElements />

      {#if drawerVariant === 'modal'}
        <Scrim fixed={false} />
      {/if}

      <AppContent class="app-content w-full overflow-auto">
        <AnnouncementHeader />
        <main class="main-content min-h-100% py-6 px-3">
          <slot />
        </main>
      </AppContent>
    </div>
  </div>

  <LoginDialog />
</TolgeeProvider>

<style lang="postcss">
  .app-container {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100vh;
    max-height: 100vh;
    width: 100vw;
    max-width: 100vw;
  }

  .drawer-container {
    display: flex;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
</style>
