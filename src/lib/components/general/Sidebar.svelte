<script lang="ts">
  import Switch from '@smui/switch';
  import FormField from '@smui/form-field';
  import Drawer, { Content } from '@smui/drawer';
  import List, { Item, Text, Graphic, Separator } from '@smui/list';
  import { goto, prefetch } from '$app/navigation';
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { user, userToken } from '$lib/stores/user';
  import { loginDialogOpen } from '$lib/stores/global';

  export let open: boolean;
  export let drawerVariant: 'modal' | 'dismissible';
  export let hideTopElements: boolean;
  export let accessibility: boolean;

  $: currentPath = $page.url.pathname;
  $: isAdmin = !$user ? false : $user.roles.approveMods || $user.roles.approveVersions || $user.roles.editSMLVersions;

  const top = [
    {
      url: base + '/',
      icon: 'home',
      label: 'Home'
    },
    {
      url: base + '/mods',
      icon: 'extension',
      label: 'Mods'
    },
    {
      url: base + '/guides',
      icon: 'description',
      label: 'Guides'
    },
    {
      url: base + '/sml-versions',
      icon: 'lightbulb',
      label: 'SML Versions'
    },
    {
      url: base + '/tools',
      icon: 'apps',
      label: 'Tools'
    },
    {
      url: 'https://discord.gg/xkVJ73E',
      icon: 'people',
      label: 'Discord',
      external: true
    },
    {
      url: 'https://docs.ficsit.app/',
      icon: 'find_in_page',
      label: 'Docs',
      external: true
    },
    {
      url: 'https://forums.ficsit.app/',
      icon: 'forum',
      label: 'Forums',
      external: true
    }
  ];

  const bottom = [
    {
      url: base + '/help',
      icon: 'help',
      label: 'Help'
    },
    {
      url: base + '/privacy-policy',
      icon: 'policy',
      label: 'Privacy Policy'
    },
    {
      url: base + '/tos',
      icon: 'gavel',
      label: 'Terms of Service'
    },
    {
      url: base + '/api-docs',
      icon: 'api',
      label: 'API'
    },
    {
      url: 'https://github.com/satisfactorymodding',
      icon: 'source',
      label: 'GitHub',
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
            <Item on:click={() => loginDialogOpen.set(true)}>
              <Graphic class="material-icons">login</Graphic>
              <Text>Sign In</Text>
            </Item>
          {:else}
            {#if isAdmin}
              <Item on:click={() => goto(base + '/admin')} activated={currentPath.startsWith('/admin')}>
                <Graphic class="material-icons">admin_panel_settings</Graphic>
                <Text>Admin</Text>
              </Item>
            {/if}

            <Item on:click={() => goto(base + '/user/' + $user.id)} activated={currentPath.startsWith('/user')}>
              <Graphic>
                <div class="rounded-full bg-cover w-7 h-7" style={`background-image: url("${$user.avatar}")`} />
              </Graphic>
              <Text>{$user.username}</Text>
            </Item>

            <Item on:click={() => userToken.set(null)}>
              <Graphic class="material-icons">logout</Graphic>
              <Text>Logout</Text>
            </Item>
          {/if}
        </List>

        <Separator />
      {/if}

      <List>
        {#each top as item}
          {#if !item.external}
            <Item href={item.url} activated={currentPath === item.url} on:mouseover={() => prefetch(item.url)}>
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
            <Item href={item.url} activated={currentPath === item.url} on:mouseover={() => prefetch(item.url)}>
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
            <Text>Mod Manager</Text>
          </Item>
        {/if}

        <Item>
          <FormField align="end">
            <Switch bind:checked={accessibility} aria-label="Accessibility Font" />
            <span slot="label">Accessibility Font</span>
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
