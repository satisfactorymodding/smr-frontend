<script lang="ts">
  import { getDrawerStore, getModalStore, SlideToggle } from '@skeletonlabs/skeleton';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { user, userToken } from '$lib/stores/user';
  import { getTranslate } from '@tolgee/svelte';
  import LoginModal from '$lib/modals/LoginModal.svelte';
  import type { SidebarItemData } from '$lib/utils/sidebarItemData';
  import SidebarItem from './SidebarItem.svelte';

  export let accessibility: boolean;

  export const { t } = getTranslate();

  $: isAdmin = !$user ? false : $user.roles.approveMods || $user.roles.approveVersions || $user.roles.editSMLVersions;

  let top: SidebarItemData[];
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

  let bottom: SidebarItemData[];
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

  const modalStore = getModalStore();
  const drawerStore = getDrawerStore();
</script>

<div class="flex h-full max-w-xl flex-col justify-between overflow-y-auto p-4">
  <div class="flex h-full max-w-xl flex-col gap-4">
    <nav class="list-nav xl:hidden">
      <ul>
        {#if $user === null}
          <button
            on:click={() => {
              modalStore.trigger({
                type: 'component',
                component: {
                  ref: LoginModal
                }
              });
              drawerStore.close();
            }}
            class="w-full">
            <span class="material-icons">login</span>
            <span>{$t('user.sign-in')}</span>
          </button>
        {:else}
          {#if isAdmin}
            <button
              on:click={() => {
                goto(base + '/admin');
                drawerStore.close();
              }}
              class="w-full">
              <span class="material-icons">admin_panel_settings</span>
              <span>Admin</span>
            </button>
          {/if}
          <button class="grid w-full grid-flow-col" on:click={() => goto(base + '/user/' + $user.id)}>
            <div class="h-7 w-7 rounded-full bg-cover" style={`background-image: url("${$user.avatar}")`} />
            <div>{$user.username}</div>
          </button>

          <button
            on:click={() => {
              userToken.set(null);
              drawerStore.close();
            }}
            class="w-full">
            <span class="material-icons">logout</span>
            <span>{$t('user.logout')}</span>
          </button>
        {/if}
      </ul>
    </nav>

    <div class="xl:hidden">
      <hr />
    </div>

    <nav class="list-nav">
      <ul>
        {#each top as item}
          <SidebarItem {item} />
        {/each}
      </ul>
    </nav>
  </div>

  <nav class="list-nav">
    <ul>
      {#each bottom as item}
        <SidebarItem {item} />
      {/each}

      <li class="xl:hidden">
        <a target="_blank" href="https://smm.ficsit.app" rel="noopener">
          <span class="material-icons">file_download</span>
          <span class="flex-auto">{$t('sidebar.mod-manager')}</span>
        </a>
      </li>

      <li class="flex flex-row items-center justify-center gap-4 px-3 pt-2">
        <SlideToggle
          bind:checked={accessibility}
          aria-label="Accessibility Font"
          name="accessibility_font"
          size="sm"
          active="bg-primary-500" />
        <span>{$t('sidebar.accessibility-font')}</span>
      </li>
    </ul>
  </nav>
</div>
