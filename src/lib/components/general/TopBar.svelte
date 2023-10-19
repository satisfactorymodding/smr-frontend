<script lang="ts">
  import { hasLauncher, pingLauncher } from '$lib/stores/launcher';
  import { user, userToken } from '$lib/stores/user';
  import { loginDialogOpen, onMobile, sidebarOpen } from '$lib/stores/global';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
  import List, { Item, Text } from '@smui/list';
  import TranslationDropdown from '$lib/components/general/TranslationDropdown.svelte';
  import Menu from '@smui/menu';
  import IconButton from '@smui/icon-button';
  import Button, { Icon, Label } from '@smui/button';
  import { browser } from '$app/environment';
  import { getTranslate } from '@tolgee/svelte';

  $: isAdmin = !$user ? false : $user.roles.approveMods || $user.roles.approveVersions || $user.roles.editSMLVersions;

  export const { t } = getTranslate();

  let drawerVariant: 'modal' | undefined = 'modal';
  let hideTopElements = true;
  if (browser) {
    onMobile.subscribe((mobile) => {
      drawerVariant = mobile ? 'modal' : undefined;
      hideTopElements = mobile;
    });
  }

  let menu: Menu;
</script>

<TopAppBar variant="static">
  <Row>
    <Section>
      {#if drawerVariant === 'modal'}
        <IconButton class="material-icons" on:click={() => sidebarOpen.set(!$sidebarOpen)}>menu</IconButton>
      {/if}
      <Title>{$t('top-bar.title')}</Title>
    </Section>
    {#if !hideTopElements}
      <Section align="end" toolbar>
        <TranslationDropdown />

        {#if $hasLauncher}
          <Button color="secondary" variant="outlined" class="mr-3" on:click={pingLauncher}>
            <Label>Launcher Detected</Label>
            <Icon class="material-icons">file_download</Icon>
          </Button>
        {:else}
          <Button
            color="secondary"
            variant="outlined"
            class="mr-3"
            target="_blank"
            rel="noopener"
            href="https://smm.ficsit.app">
            <Label>Mod Manager</Label>
            <Icon class="material-icons">file_download</Icon>
          </Button>
        {/if}

        {#if $user === null}
          <Button color="secondary" variant="outlined" on:click={() => loginDialogOpen.set(true)}>
            <Label>{$t('user.sign-in')}</Label>
            <Icon class="material-icons">login</Icon>
          </Button>
        {:else}
          {#if isAdmin}
            <Button color="secondary" variant="outlined" class="mr-3" on:click={() => goto(base + '/admin')}>
              <Label>Admin</Label>
              <Icon class="material-icons">admin_panel_settings</Icon>
            </Button>
          {/if}

          <div>
            <Button variant="outlined" color="secondary" on:click={() => menu.setOpen(true)} class="grid grid-flow-col">
              <div class="mr-3">{$user.username}</div>
              <div class="rounded-full bg-cover w-7 h-7" style={`background-image: url("${$user.avatar}")`} />
            </Button>

            <Menu bind:this={menu}>
              <List>
                <Item on:SMUI:action={() => goto(base + '/user/' + $user.id)}>
                  <Text>{$t('top-bar.user.profile')}</Text>
                </Item>
                <Item on:SMUI:action={() => goto(base + '/settings')}>
                  <Text>{$t('top-bar.user.settings')}</Text>
                </Item>
                <Item on:SMUI:action={() => userToken.set(null)}>
                  <Text>{$t('user.logout')}</Text>
                </Item>
              </List>
            </Menu>
          </div>
        {/if}
      </Section>
    {/if}
  </Row>
</TopAppBar>
