<script lang="ts">
  import { hasLauncher, pingLauncher } from '$lib/stores/launcher';
  import { user, userToken } from '$lib/stores/user';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import TranslationDropdown from '$lib/components/general/TranslationDropdown.svelte';
  import { getTranslate } from '@tolgee/svelte';
  import { AppBar, type PopupSettings, popup, getDrawerStore, getModalStore } from '@skeletonlabs/skeleton';
  import LoginModal from '$lib/modals/LoginModal.svelte';

  $: isAdmin = !$user ? false : $user.roles.approveMods || $user.roles.approveVersions || $user.roles.editSMLVersions;

  export const { t } = getTranslate();

  const drawerStore = getDrawerStore();

  const userMenuBox: PopupSettings = {
    event: 'focus-click',
    target: 'userMenuBox',
    placement: 'bottom',
    closeQuery: 'li'
  };

  const modalStore = getModalStore();

  const openSidebar = () => {
    drawerStore.open({
      width: 'w-[280px]',
    });
  }
</script>

<AppBar variant="static">
  <svelte:fragment slot="lead">
    <button class="material-icons xl:hidden btn-sm" on:click={openSidebar}>menu</button>
    <span class="text-lg">{$t('top-bar.title')}</span>
  </svelte:fragment>

  <svelte:fragment slot="trail">
    <div class="hidden xl:flex xl:gap-3">
      <TranslationDropdown />

      {#if $hasLauncher}
        <button class="btn btn-sm variant-ghost-primary" on:click={pingLauncher}>
          <span>Launcher Detected</span>
          <span class="material-icons">file_download</span>
        </button>
      {:else}
        <a class="btn btn-sm variant-ghost-primary" target="_blank" rel="noopener" href="https://smm.ficsit.app">
          <span>Mod Manager</span>
          <span class="material-icons">file_download</span>
        </a>
      {/if}

      {#if $user === null}
        <button
          class="btn btn-sm variant-ghost-primary"
          on:click={() =>
            modalStore.trigger({
              type: 'component',
              component: {
                ref: LoginModal
              }
            })}>
          <span>{$t('user.sign-in')}</span>
          <span class="material-icons">login</span>
        </button>
      {:else}
        {#if isAdmin}
          <button class="btn btn-sm variant-ghost-primary" on:click={() => goto(base + '/admin')}>
            <span>Admin</span>
            <span class="material-icons">admin_panel_settings</span>
          </button>
        {/if}

        <div>
          <button class="grid grid-flow-col btn btn-sm variant-ghost-primary" use:popup={userMenuBox}>
            <div>{$user.username}</div>
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
    </div>
  </svelte:fragment>
</AppBar>
