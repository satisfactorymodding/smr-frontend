<script lang="ts">
  import { Switch } from '@skeletonlabs/skeleton-svelte';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { user, userToken } from '$lib/stores/user';
  import { getTranslate } from '@tolgee/svelte';
  import TranslationDropdown from '$lib/components/general/TranslationDropdown.svelte';
  import type { SidebarItemData } from '$lib/utils/sidebarItemData';
  import SidebarItem from './SidebarItem.svelte';
  import { Navigation } from '@skeletonlabs/skeleton-svelte';

  interface Props {
    accessibility: boolean;
  }

  let { accessibility = $bindable() }: Props = $props();

  export const { t } = getTranslate();

  let isAdmin = $derived(
    !$user ? false : $user.roles.approveMods || $user.roles.approveVersions || $user.roles.editSatisfactoryVersions
  );

  let top: SidebarItemData[] = $derived([
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
      url: base + '/tools',
      icon: 'apps',
      label: $t('sidebar.tools')
    },
    {
      url: 'https://discord.ficsit.app',
      icon: 'forum',
      label: $t('discord'),
      external: true
    },
    {
      url: '/community',
      icon: 'people',
      label: $t('sidebar.community', 'Community')
    },
    {
      url: 'https://docs.ficsit.app/',
      icon: 'find_in_page',
      label: $t('sidebar.docs'),
      external: true
    }
  ]);

  let bottom: SidebarItemData[] = $derived([
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
  ]);

  const onClickLogin = () => {
    // modalStore.trigger({
    //   type: 'component',
    //   component: {
    //     ref: LoginModal
    //   }
    // });
    // drawerStore.close();
  };

  const onClickAdmin = () => {
    goto(base + '/admin');
    // drawerStore.close();
  };

  const onClickLogout = () => {
    userToken.set(null);
    // drawerStore.close();
  };
</script>

<li class="flex flex-row items-center justify-center gap-4 px-3 pt-2 xl:hidden">
  <TranslationDropdown />
</li>

<div class="grid h-[728px] w-full grid-cols-[auto_1fr] items-stretch border border-surface-200-800">
  <Navigation layout="sidebar" class="grid grid-rows-[auto_1fr_auto] gap-4">
    <Navigation.Header>
      <div class="list-nav xl:hidden">
        {#if $user === null}
          <button onclick={onClickLogin} class="w-full">
            <span class="material-icons">login</span>
            <span>{$t('user.sign-in')}</span>
          </button>
        {:else}
          {#if isAdmin}
            <button onclick={onClickAdmin} class="w-full">
              <span class="material-icons">admin_panel_settings</span>
              <span>Admin</span>
            </button>
          {/if}
          <button class="grid w-full grid-flow-col" onclick={() => goto(base + '/user/' + $user.id)}>
            <div class="h-7 w-7 rounded-full bg-cover" style={`background-image: url("${$user.avatar}")`}></div>
            <div>{$user.username}</div>
          </button>

          <button onclick={onClickLogout} class="w-full">
            <span class="material-icons">logout</span>
            <span>{$t('user.logout')}</span>
          </button>
        {/if}
      </div>
    </Navigation.Header>

    <Navigation.Content>
      <Navigation.Group>
        {#each top as item (item.url)}
          <SidebarItem {item} />
        {/each}
      </Navigation.Group>
    </Navigation.Content>

    <Navigation.Footer>
      <Navigation.Group>
        {#each bottom as item (item.url)}
          <SidebarItem {item} />
        {/each}

        <li class="xl:hidden">
          <a target="_blank" href="https://smm.ficsit.app" rel="noopener">
            <span class="material-icons">file_download</span>
            <span class="flex-auto">{$t('sidebar.mod-manager')}</span>
          </a>
        </li>

        <li class="flex flex-row items-center justify-center gap-4 px-3 pt-2">
          <Switch
            checked={accessibility}
            onCheckedChange={(e) => (accessibility = e.checked)}
            name="accessibility_font">
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
            <Switch.Label>{$t('sidebar.accessibility-font')}</Switch.Label>
            <Switch.HiddenInput />
          </Switch>
        </li>
      </Navigation.Group>
    </Navigation.Footer>
  </Navigation>
</div>
