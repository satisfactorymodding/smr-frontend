<svelte:head>
  <title>SMR</title>

  <link rel="icon" type="image/x-icon" href="{base}/assets/favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href="{base}/assets/apple-touch-icon.png?v=69P26YMB35">
  <link rel="icon" type="image/png" sizes="32x32" href="{base}/assets/favicon-32x32.png?v=69P26YMB35">
  <link rel="icon" type="image/png" sizes="16x16" href="{base}/assets/favicon-16x16.png?v=69P26YMB35">
  <link rel="manifest" href="{base}/manifest.json?v=69P26YMB35">
  <link rel="mask-icon" href="{base}/assets/safari-pinned-tab.svg?v=69P26YMB35" color="#da8517">
  <link rel="shortcut icon" href="{base}/assets/favicon.ico?v=69P26YMB35">
  <meta name="msapplication-TileColor" content="#da8517">
  <meta name="msapplication-config" content="{base}/static/assets/browserconfig.xml?v=69P26YMB35">
  <meta name="theme-color" content="#da8517">
</svelte:head>

<script lang="ts">
  import './_global.postcss';
  import {initializeGraphQLClient} from "$lib/core";
  import {base} from '$app/paths';
  import LoginDialog from "$lib/components/auth/LoginDialog.svelte";

  initializeGraphQLClient();
</script>

<main>
  <slot/>

  <LoginDialog/>
</main>
