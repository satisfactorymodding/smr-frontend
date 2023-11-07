<script lang="ts">
  import Switch from '@smui/switch';
  import FormField from '@smui/form-field';
  import Drawer, { Content } from '@smui/drawer';
  import List, { Item, Text, Graphic, Separator } from '@smui/list';
  import { goto, preloadData } from '$app/navigation';
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { user, userToken } from '$lib/stores/user';
  import { loginDialogOpen } from '$lib/stores/global';
  import { getTranslate } from '@tolgee/svelte';

  export let open: boolean;
  export let drawerVariant: 'modal' | 'dismissible';
  export let hideTopElements: boolean;
  export let accessibility: boolean;

  export const { t } = getTranslate();

  $: currentPath = $page.url.pathname;
  $: isAdmin = !$user ? false : $user.roles.approveMods || $user.roles.approveVersions || $user.roles.editSMLVersions;

  $: top = [
    {
      url: base + '/',
      icon: 'home',
      label: $t('sidebar.home')
    },
    {
      url: base + '/mods',
      icon: 'extension',
      label: $t('sidebar.mods')
    },
    {
      url: base + '/guides',
      icon: 'description',
      label: $t('sidebar.guides')
    },
    {
      url: base + '/sml-versions',
      icon: 'lightbulb',
      label: $t('sidebar.sml-versions')
    },
    {
      url: base + '/tools',
      icon: 'apps',
      label: $t('sidebar.tools')
    },
    {
      url: 'https://discord.gg/xkVJ73E',
      icon: 'people',
      label: $t('discord'),
      external: true
    },
    {
      url: 'https://docs.ficsit.app/',
      icon: 'find_in_page',
      label: $t('sidebar.docs'),
      external: true
    },
    {
      url: 'https://forums.ficsit.app/',
      icon: 'forum',
      label: $t('sidebar.forums'),
      external: true
    }
  ];

  $: bottom = [
    {
      url: base + '/help',
      icon: 'help',
      label: $t('sidebar.help')
    },
    {
      url: base + '/content-policy',
      icon: 'verified_user',
      label: $t('content-policy')
    },
    {
      url: base + '/privacy-policy',
      icon: 'policy',
      label: $t('sidebar.privacy-policy')
    },
    {
      url: base + '/tos',
      icon: 'gavel',
      label: $t('sidebar.tos')
    },
    {
      url: base + '/api-docs',
      icon: 'api',
      label: $t('sidebar.api')
    },
    {
      url: 'https://github.com/satisfactorymodding',
      icon: 'source',
      label: $t('sidebar.github'),
      external: true
    }
  ];
</script>

<Drawer variant={drawerVariant} fixed={false} bind:open>
  <Content>
    <div class="drawer-content">
      {#if hideTopElements}
        <List>
          {#if $user === null}
            <Item
              on:click={() => {
                loginDialogOpen.set(true);
                open = false;
              }}>
              <Graphic class="material-icons">login</Graphic>
              <Text>{$t('user.sign-in')}</Text>
            </Item>
          {:else}
            {#if isAdmin}
              <Item
                on:click={() => {
                  open = false;
                  return goto(base + '/admin');
                }}
                activated={currentPath.startsWith('/admin')}>
                <Graphic class="material-icons">admin_panel_settings</Graphic>
                <Text>Admin</Text>
              </Item>
            {/if}

            <Item
              on:click={() => {
                open = false;
                return goto(base + '/user/' + $user.id);
              }}
              activated={currentPath.startsWith('/user')}>
              <Graphic>
                <div class="rounded-full bg-cover w-7 h-7" style={`background-image: url("${$user.avatar}")`} />
              </Graphic>
              <Text>{$user.username}</Text>
            </Item>

            <Item
              on:click={() => {
                userToken.set(null);
                open = false;
              }}>
              <Graphic class="material-icons">logout</Graphic>
              <Text>{$t('user.logout')}</Text>
            </Item>
          {/if}
        </List>

        <Separator />
      {/if}

      <List>
        {#each top as item}
          {#if !item.external}
            <Item
              on:click={() => (open = false)}
              href={item.url}
              activated={currentPath === item.url}
              on:mouseover={() => preloadData(item.url)}>
              <Graphic class="material-icons">{item.icon}</Graphic>
              <Text>{item.label}</Text>
            </Item>
          {:else}
            <Item href={item.url} target="_blank" rel="noopener">
              <Graphic class="material-icons">{item.icon}</Graphic>
              <Text>{item.label}</Text>
            </Item>
          {/if}
        {/each}
      </List>

      <List>
        {#each bottom as item}
          {#if !item.external}
            <Item
              on:click={() => (open = false)}
              href={item.url}
              activated={currentPath === item.url}
              on:mouseover={() => preloadData(item.url)}>
              <Graphic class="material-icons">{item.icon}</Graphic>
              <Text>{item.label}</Text>
            </Item>
          {:else}
            <Item href={item.url} target="_blank" rel="noopener">
              <Graphic class="material-icons">{item.icon}</Graphic>
              <Text>{item.label}</Text>
            </Item>
          {/if}
        {/each}

        {#if hideTopElements}
          <Item target="_blank" href="https://smm.ficsit.app" rel="noopener">
            <Graphic class="material-icons">file_download</Graphic>
            <Text>{$t('sidebar.mod-manager')}</Text>
          </Item>
        {/if}

        <Item>
          <FormField align="end">
            <Switch bind:checked={accessibility} aria-label="Accessibility Font" />
            <span slot="label">{$t('sidebar.accessibility-font')}</span>
          </FormField>
        </Item>
      </List>
    </div>
  </Content>
</Drawer>

<style lang="postcss">
  .drawer-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
</style>
