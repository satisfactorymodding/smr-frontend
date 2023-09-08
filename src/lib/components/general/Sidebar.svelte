<script lang="ts">
  import { SlideToggle } from '@skeletonlabs/skeleton';
  import { goto, preloadData } from '$app/navigation';
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { user, userToken } from '$lib/stores/user';
  import { loginDialogOpen } from '$lib/stores/global';
  import { getTranslate } from '@tolgee/svelte';

  export let open: boolean;
  // export let drawerVariant: 'modal' | 'dismissible';
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

<aside class="hidden lg:block">
  <div class="p-4 pb-20 space-y-4 overflow-y-auto">
    <!-- TODO -->
    <!--{#if hideTopElements}-->
    <!--  <List>-->
    <!--    {#if $user === null}-->
    <!--      <Item on:click={() => loginDialogOpen.set(true)}>-->
    <!--        <Graphic class="material-icons">login</Graphic>-->
    <!--        <Text>{$t('user.sign-in')}</Text>-->
    <!--      </Item>-->
    <!--    {:else}-->
    <!--      {#if isAdmin}-->
    <!--        <Item on:click={() => goto(base + '/admin')} activated={currentPath.startsWith('/admin')}>-->
    <!--          <Graphic class="material-icons">admin_panel_settings</Graphic>-->
    <!--          <Text>Admin</Text>-->
    <!--        </Item>-->
    <!--      {/if}-->

    <!--      <Item on:click={() => goto(base + '/user/' + $user.id)} activated={currentPath.startsWith('/user')}>-->
    <!--        <Graphic>-->
    <!--          <div class="rounded-full bg-cover w-7 h-7" style={`background-image: url("${$user.avatar}")`} />-->
    <!--        </Graphic>-->
    <!--        <Text>{$user.username}</Text>-->
    <!--      </Item>-->

    <!--      <Item on:click={() => userToken.set(null)}>-->
    <!--        <Graphic class="material-icons">logout</Graphic>-->
    <!--        <Text>{$t('user.logout')}</Text>-->
    <!--      </Item>-->
    <!--    {/if}-->
    <!--  </List>-->

    <!--  <Separator />-->
    <!--{/if}-->


    <nav class="list-nav">
      <ul>
        {#each top as item}
          <li>
            {#if !item.external}
              <a href={item.url} class:bg-primary-active-token={currentPath === item.url} on:mouseover={() => preloadData(item.url)}>
                <span class="badge bg-primary-500 material-icons">{item.icon}</span>
                <span class="flex-auto">{item.label}</span>
              </a>
            {:else}
              <a href={item.url} target="_blank" rel="noopener">
                <span class="badge bg-primary-500 material-icons">{item.icon}</span>
                <span class="flex-auto">{item.label}</span>
              </a>
            {/if}
          </li>
        {/each}
      </ul>
    </nav>


    <nav class="list-nav">
      <ul>
        {#each bottom as item}
          <li>
            {#if !item.external}
              <a href={item.url} class:bg-primary-active-token={currentPath === item.url} on:mouseover={() => preloadData(item.url)}>
                <span class="badge bg-primary-500 material-icons">{item.icon}</span>
                <span class="flex-auto">{item.label}</span>
              </a>
            {:else}
              <a href={item.url} target="_blank" rel="noopener">
                <span class="badge bg-primary-500 material-icons">{item.icon}</span>
                <span class="flex-auto">{item.label}</span>
              </a>
            {/if}
          </li>
        {/each}

        {#if hideTopElements}
          <li>
            <a target="_blank" href="https://smm.ficsit.app" rel="noopener">
              <span class="badge bg-primary-500 material-icons">file_download</span>
              <span class="flex-auto">{$t('sidebar.mod-manager')}</span>
            </a>
          </li>
        {/if}

        <li>
          <SlideToggle bind:checked={accessibility} aria-label="Accessibility Font" />
          <span>{$t('sidebar.accessibility-font')}</span>
        </li>
      </ul>
    </nav>
  </div>
</aside>

<style lang="postcss">
  .drawer-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
</style>
