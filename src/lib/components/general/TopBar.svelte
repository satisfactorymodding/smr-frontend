<script lang="ts">
  import { hasLauncher, pingLauncher } from '$lib/stores/launcher';
  import { user, userToken } from '$lib/stores/user';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import TranslationDropdown from '$lib/components/general/TranslationDropdown.svelte';
  import { getTranslate } from '@tolgee/svelte';
  import { AppBar, Popover, Portal } from '@skeletonlabs/skeleton-svelte';
  import LoginModal from '$lib/modals/LoginModal.svelte';

  let isAdmin = $derived(
    !$user ? false : $user.roles.approveMods || $user.roles.approveVersions || $user.roles.editSatisfactoryVersions
  );

  export const { t } = getTranslate();

  const openSidebar = () => {
    // drawerStore.open({
    //   width: 'w-[280px]'
    // });
  };

  let loginOpen = $state(false);
</script>

<AppBar>
  <AppBar.Toolbar class="grid-cols-[auto_1fr_auto]">
    <AppBar.Lead>
      <button class="material-icons btn-sm xl:hidden" onclick={openSidebar}>menu</button>
    </AppBar.Lead>

    <AppBar.Headline>
      <span class="text-lg">{$t('top-bar.title')}</span>
    </AppBar.Headline>

    <AppBar.Trail>
      <div class="hidden gap-3 xl:flex">
        <TranslationDropdown />

        {#if $hasLauncher}
          <button class="btn border border-primary-500 preset-tonal-primary btn-sm" onclick={pingLauncher}>
            <span>Open Mod Manager</span>
            <span class="material-icons">launch</span>
          </button>
        {:else}
          <a
            class="btn border border-primary-500 preset-tonal-primary btn-sm"
            target="_blank"
            rel="noopener"
            href="https://smm.ficsit.app">
            <span>Download the Mod Manager</span>
            <span class="material-icons">file_download</span>
          </a>
        {/if}

        {#if $user === null}
          <LoginModal bind:open={loginOpen} />
          <button class="btn border border-primary-500 preset-tonal-primary btn-sm" onclick={() => (loginOpen = true)}>
            <span>{$t('user.sign-in')}</span>
            <span class="material-icons">login</span>
          </button>
        {:else}
          {#if isAdmin}
            <button
              class="btn border border-primary-500 preset-tonal-primary btn-sm"
              onclick={() => goto(base + '/admin')}>
              <span>Admin</span>
              <span class="material-icons">admin_panel_settings</span>
            </button>
          {/if}

          <Popover>
            <Popover.Trigger class="btn grid grid-flow-col border border-primary-500 preset-tonal-primary btn-sm">
              <div>{$user.username}</div>
              <div class="h-7 w-7 rounded-full bg-cover" style={`background-image: url("${$user.avatar}")`}></div>
            </Popover.Trigger>
            <Portal>
              <Popover.Positioner>
                <Popover.Content class="max-w-md space-y-2 card bg-surface-100-900 p-4 shadow-xl">
                  <Popover.Description>
                    <div class="w-48 card preset-filled-surface-100-900 py-2 shadow-xl" data-popup="userMenuBox">
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
                      <div class="arrow bg-surface-100-900"></div>
                    </div>
                  </Popover.Description>
                  <Popover.Arrow
                    style="--arrow-size: calc(var(--spacing) * 2); --arrow-background: var(--color-surface-100-900);">
                    <Popover.ArrowTip />
                  </Popover.Arrow>
                </Popover.Content>
              </Popover.Positioner>
            </Portal>
          </Popover>
        {/if}
      </div>
    </AppBar.Trail>
  </AppBar.Toolbar>
</AppBar>
