<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';
  import './_global.postcss';
  import { base } from '$app/paths';
  import { initializeGraphQLClient } from '$lib/core';
  import type { Client } from '@urql/svelte';
  import { gqlClient } from '$lib/stores/global';

  let client: Client;

  export const load: Load = async ({ fetch }) => {
    client = initializeGraphQLClient(fetch);
    gqlClient.set(client);
    return {};
  };
</script>

<script lang="ts">
  import LoginDialog from '$lib/components/auth/LoginDialog.svelte';
  import { setClient } from '@urql/svelte';
  import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
  import Drawer, { AppContent, Content, Scrim } from '@smui/drawer';
  import List, { Item, Text, Graphic } from '@smui/list';
  import IconButton from '@smui/icon-button';
  import Button, { Label, Icon } from '@smui/button';
  import { page } from '$app/stores';
  import { user } from '$lib/stores/user';
  import { browser } from '$app/env';
  import { goto } from '$app/navigation';

  setClient(client);

  $: currentPath = $page.path;
  $: isAdmin = !$user ? false : $user.roles.approveMods || $user.roles.approveVersions || $user.roles.editSMLVersions;

  let open = false;
  let drawerVariant: 'modal' | undefined = 'modal';
  if (browser) {
    const mediaQuery = window.matchMedia('(min-width: 1280px)');

    mediaQuery.addEventListener('change', (data) => {
      drawerVariant = data.matches ? undefined : 'modal';
    });

    drawerVariant = mediaQuery.matches ? undefined : 'modal';
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
  <meta name="theme-color" content="#da8517" />

  <link rel="preload" href="{base}/assets/fonts/flow-rounded.woff" as="font" type="font/woff" />
</svelte:head>

<div class="app-container">
  <TopAppBar variant="static">
    <Row>
      <Section>
        {#if drawerVariant === 'modal'}
          <IconButton class="material-icons" on:click={() => (open = !open)}>menu</IconButton>
        {/if}
        <Title>FICSIT Augmentation Database</Title>
      </Section>
      <Section align="end" toolbar>
        <Button color="secondary" variant="outlined">
          <Label>Mod Manager</Label>
          <Icon class="material-icons">file_download</Icon>
        </Button>

        {#if isAdmin}
          <IconButton class="material-icons" aria-label="Admin Panel" on:click={() => goto(base + '/admin')}>
            admin_panel_settings
          </IconButton>
        {/if}

        <IconButton class="material-icons" aria-label="Sign In">login</IconButton>
      </Section>
    </Row>
  </TopAppBar>

  <div class="drawer-container">
    <Drawer variant={drawerVariant} fixed={false} bind:open>
      <Content>
        <div class="drawer-content">
          <List>
            <Item href="{base}/" activated={currentPath === '/'}>
              <Graphic class="material-icons">home</Graphic>
              <Text>Home</Text>
            </Item>
            <Item href="{base}/mods" activated={currentPath.startsWith('/mods')}>
              <Graphic class="material-icons">extension</Graphic>
              <Text>Mods</Text>
            </Item>
            <Item href="{base}/guides" activated={currentPath.startsWith('/guides')}>
              <Graphic class="material-icons">description</Graphic>
              <Text>Guides</Text>
            </Item>
            <Item href="{base}/sml-versions" activated={currentPath.startsWith('/sml-versions')}>
              <Graphic class="material-icons">lightbulb</Graphic>
              <Text>SML Versions</Text>
            </Item>
            <Item href="{base}/tools" activated={currentPath.startsWith('/tools')}>
              <Graphic class="material-icons">apps</Graphic>
              <Text>Tools</Text>
            </Item>
            <Item href="https://discord.gg/xkVJ73E" target="_blank">
              <Graphic class="material-icons">people</Graphic>
              <Text>Discord</Text>
            </Item>
            <Item href="https://docs.ficsit.app/" target="_blank">
              <Graphic class="material-icons">find_in_page</Graphic>
              <Text>Docs</Text>
            </Item>
          </List>

          <List>
            <Item href="{base}/help" activated={currentPath.startsWith('/help')}>
              <Graphic class="material-icons">help</Graphic>
              <Text>Help</Text>
            </Item>
            <Item href="{base}/privacy-policy" activated={currentPath.startsWith('/privacy-policy')}>
              <Graphic class="material-icons">policy</Graphic>
              <Text>Privacy Policy</Text>
            </Item>
            <Item href="{base}/tos" activated={currentPath.startsWith('/tos')}>
              <Graphic class="material-icons">gavel</Graphic>
              <Text>Terms of Service</Text>
            </Item>
            <Item href="{base}/api-docs" activated={currentPath.startsWith('/api-docs')}>
              <Graphic class="material-icons">api</Graphic>
              <Text>API</Text>
            </Item>
          </List>
        </div>
      </Content>
    </Drawer>

    {#if drawerVariant === 'modal'}
      <Scrim fixed={false} />
    {/if}

    <AppContent class="app-content" style="overflow: auto; width: 100%; padding: 20px 15px;">
      <main class="main-content">
        <slot />
      </main>
    </AppContent>
  </div>
</div>

<LoginDialog />

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

  .drawer-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
</style>
