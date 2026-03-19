<script lang="ts">
  import UserInfo from '$lib/components/users/UserInfo.svelte';
  import UserAvatar from '$lib/components/users/UserAvatar.svelte';
  import ModCard from '$lib/components/mods/ModCard.svelte';
  import ModpackCard from '$lib/components/modpacks/ModpackCard.svelte';
  import GuideCard from '$lib/components/guides/GuideCard.svelte';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import { user as me } from '$lib/stores/user';
  import { base } from '$app/paths';
  import type { PageData } from './$types';
  import Page404 from '$lib/components/general/Page404.svelte'; 
  import { Tab, TabGroup } from '@skeletonlabs/skeleton';
  import { getTranslate } from '@tolgee/svelte';

  export let data: PageData;


  export const { t } = getTranslate();

  $: ({ user } = data);

  let tabSet = 'mods';
</script>

<svelte:head>
  {#if !$user.fetching && !$user.error && $user.data.getUser}
    <MetaDescriptors
      description="{$user.data.getUser.username} profile"
      title="{$user.data.getUser.username} profile" />
  {/if}
</svelte:head>

{#if $user.fetching}
  <p>Loading...</p>
{:else if $user.error}
  <p>Oh no... {$user.error.message}</p>
{:else if $user.data.getUser}
  <div class="grid gap-6 xlx:grid-flow-row">
    <div class="flex h-auto flex-wrap items-center justify-between">
      <h1 class="text-4xl font-bold">{$user.data.getUser.username}</h1>

      <div>
        {#if $me && $user.data.getUser.id === $me.id}
          <a class="variant-ghost-primary btn" href="{base}/settings">Settings</a>
        {/if}

        <div class="grid gap-8 xl:grid-cols-4 mt-4">
          <div class="xl:col-span-3">
            <TabGroup class="w-full">
              <div class="flex w-full border-b border-surface-300">
                <div class="flex-1 text-center">
                  <Tab bind:group={tabSet} name="mods" value="mods">
                    {$t('sidebar.mods')}
                  </Tab>
                </div>
                <div class="flex-1 text-center">
                  <Tab bind:group={tabSet} name="modpacks" value="modpacks">
                    {$t('sidebar.modpacks')}
                  </Tab>
                </div>
                <div class="flex-1 text-center">
                  <Tab bind:group={tabSet} name="guides" value="guides">
                    {$t('sidebar.guides')}
                  </Tab>
                </div>
              </div>

              <svelte:fragment slot="panel">
                {#if tabSet === 'mods'}
                  <div class="grid h-fit grid-cols-1 gap-4 2xl:grid-cols-2 3xl:grid-cols-3">
                    {#each $user.data.getUser.mods as mod}
                      <ModCard mod={mod.mod} />
                    {/each}
                    {#if $user.data.getUser.mods.length === 0}
                      User has no mods
                    {/if}
                  </div>
                {:else if tabSet === 'modpacks'}
                  <div class="grid h-fit grid-cols-1 gap-4 2xl:grid-cols-2 3xl:grid-cols-3">
                    {#each $user.data.getUser.modpacks as link}
                      <ModpackCard modpack={link.modpack} />
                    {/each}
                    {#if $user.data.getUser.modpacks.length === 0}
                      User has no modpacks
                    {/if}
                  </div>
                {:else if tabSet === 'guides'}
                  <div class="grid h-fit grid-cols-1 gap-4 2xl:grid-cols-2 3xl:grid-cols-3">
                    {#each $user.data.getUser.guides as guide}
                      <GuideCard {guide} logo={$user.data.getUser.avatar} />
                    {/each}
                    {#if $user.data.getUser.guides.length === 0}
                      User has no guides
                    {/if}
                  </div>
                {/if}
              </svelte:fragment>
            </TabGroup>
          </div>

          <aside class="xl:col-span-1">
            <div class="grid auto-rows-min gap-8">
              <UserAvatar avatar={$user.data.getUser.avatar} username={$user.data.getUser.username} />
              <UserInfo user={$user.data.getUser} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  </div>
{:else}
  <Page404 />
{/if}
