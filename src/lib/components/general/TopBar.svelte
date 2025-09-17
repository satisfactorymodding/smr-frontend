<script lang="ts">
  import { hasLauncher, pingLauncher } from '$lib/stores/launcher';
  import { user, userToken } from '$lib/stores/user';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import TranslationDropdown from '$lib/components/general/TranslationDropdown.svelte';
  import { getTranslate } from '@tolgee/svelte';
  import { AppBar } from '@skeletonlabs/skeleton-svelte';

  let isAdmin = $derived(
    !$user ? false : $user.roles.approveMods || $user.roles.approveVersions || $user.roles.editSatisfactoryVersions
  );

  export const { t } = getTranslate();

  const userMenuBox = {
    event: 'focus-click',
    target: 'userMenuBox',
    placement: 'bottom',
    closeQuery: 'li'
  };

  const openSidebar = () => {
    // drawerStore.open({
    //   width: 'w-[280px]'
    // });
  };

  const onClickLogin = () => {
    // modalStore.trigger({
    //   type: 'component',
    //   component: {
    //     ref: LoginModal
    //   }
    // });
  };
</script>

<AppBar variant="static">
  {#snippet lead()}
    <button class="material-icons btn-sm xl:hidden" onclick={openSidebar}>menu</button>
    <span class="text-lg">{$t('top-bar.title')}</span>
  {/snippet}

  {#snippet trail()}
    <div class="hidden xl:flex xl:gap-3">
      <TranslationDropdown />

      {#if $hasLauncher}
        <button class="preset-tonal-primary border-primary-500 btn btn-sm border" onclick={pingLauncher}>
          <span>Open Mod Manager</span>
          <span class="material-icons">launch</span>
        </button>
      {:else}
        <a
          class="preset-tonal-primary border-primary-500 btn btn-sm border"
          target="_blank"
          rel="noopener"
          href="https://smm.ficsit.app">
          <span>Download the Mod Manager</span>
          <span class="material-icons">file_download</span>
        </a>
      {/if}

      {#if $user === null}
        <button class="preset-tonal-primary border-primary-500 btn btn-sm border" onclick={onClickLogin}>
          <span>{$t('user.sign-in')}</span>
          <span class="material-icons">login</span>
        </button>
      {:else}
        {#if isAdmin}
          <button
            class="preset-tonal-primary border-primary-500 btn btn-sm border"
            onclick={() => goto(base + '/admin')}>
            <span>Admin</span>
            <span class="material-icons">admin_panel_settings</span>
          </button>
        {/if}

        <div>
          <button
            class="preset-tonal-primary border-primary-500 btn btn-sm grid grid-flow-col border"
            use:popup={userMenuBox}>
            <div>{$user.username}</div>
            <div class="h-7 w-7 rounded-full bg-cover" style={`background-image: url("${$user.avatar}")`}></div>
          </button>

          <div class="card w-48 py-2 shadow-xl" data-popup="userMenuBox">
            <nav class="list-nav">
              <ul>
                <li>
                  <button class="w-full" onclick={() => goto(base + '/user/' + $user.id)}>
                    <span>{$t('top-bar.user.profile')}</span>
                  </button>
                </li>
                <li>
                  <button class="w-full" onclick={() => goto(base + '/settings')}>
                    <span>{$t('top-bar.user.settings')}</span>
                  </button>
                </li>
                <li>
                  <button class="w-full" onclick={() => userToken.set(null)}>
                    <span>{$t('user.logout')}</span>
                  </button>
                </li>
              </ul>
            </nav>
            <div class="bg-surface-100-900 arrow"></div>
          </div>
        </div>
      {/if}
    </div>
  {/snippet}
</AppBar>
