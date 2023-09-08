<script lang="ts">
  import { hasLauncher, pingLauncher } from '$lib/stores/launcher';
  import { user, userToken } from '$lib/stores/user';
  import { loginDialogOpen, onMobile, sidebarOpen } from '$lib/stores/global';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import TranslationDropdown from '$lib/components/general/TranslationDropdown.svelte';
  import { browser } from '$app/environment';
  import { getTranslate } from '@tolgee/svelte';
  import { AppBar, type PopupSettings, popup } from "@skeletonlabs/skeleton";

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

  const userMenuBox: PopupSettings = {
    event: 'focus-click',
    target: 'userMenuBox',
    placement: 'bottom',
    closeQuery: '.listbox-item'
  };
</script>

<AppBar variant="static">
  <svelte:fragment slot="lead">
    {#if drawerVariant === 'modal'}
      <span class="material-icons" on:click={() => sidebarOpen.set(!$sidebarOpen)}>menu</span>
    {/if}
    <span>{$t('top-bar.title')}</span>
  </svelte:fragment>

  <svelte:fragment slot="trail">
    {#if !hideTopElements}
      <TranslationDropdown />

      {#if $hasLauncher}
        <button class="btn variant-ghost-primary mr-3" on:click={pingLauncher}>
          <span>Launcher Detected</span>
          <span class="material-icons">file_download</span>
        </button>
      {:else}
        <a
          class="btn variant-ghost-primary mr-3"
          target="_blank"
          rel="noopener"
          href="https://smm.ficsit.app">
          <span>Mod Manager</span>
          <span class="material-icons">file_download</span>
        </a>
      {/if}

      {#if $user === null}
        <button class="btn variant-ghost-primary" on:click={() => loginDialogOpen.set(true)}>
          <span>{$t('user.sign-in')}</span>
          <span class="material-icons">login</span>
        </button>
      {:else}
        {#if isAdmin}
          <button class="mr-3 btn variant-ghost-primary" on:click={() => goto(base + '/admin')}>
            <span>Admin</span>
            <span class="material-icons">admin_panel_settings</span>
          </button>
        {/if}

        <div>
          <button class="grid grid-flow-col btn variant-ghost-primary" use:popup={userMenuBox}>
            <div class="mr-3">{$user.username}</div>
            <div class="rounded-full bg-cover w-7 h-7" style={`background-image: url("${$user.avatar}")`} />
          </button>

          <div class="card w-48 shadow-xl py-2" data-popup="userMenuBox">
            <nav class="list-nav">
              <ul>
                <li>
                  <button class="w-full" on:click={() => goto(base + '/user/' + $user.id)}>
                    <span>{$t('top-bar.user.profile')}</span>
                  </button>
                </li>
                <li>
                  <button class="w-full" on:click={() => goto(base + '/settings')}>
                    <span>{$t('top-bar.user.settings')}</span>
                  </button>
                </li>
                <li>
                  <button class="w-full" on:click={() => userToken.set(null)}>
                    <span>{$t('user.logout')}</span>
                  </button>
                </li>
              </ul>
            </nav>
            <div class="arrow bg-surface-100-800-token" />
          </div>
        </div>
      {/if}
    {/if}
  </svelte:fragment>
</AppBar>
