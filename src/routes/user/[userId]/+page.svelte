<script lang="ts">
  import UserInfo from '$lib/components/users/UserInfo.svelte';
  import UserAvatar from '$lib/components/users/UserAvatar.svelte';
  import ModCard from '$lib/components/mods/ModCard.svelte';
  import GuideCard from '$lib/components/guides/GuideCard.svelte';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import { user as me } from '$lib/stores/user';
  import { base } from '$app/paths';
  import type { PageData } from './$types';
  import Page404 from '$lib/components/general/Page404.svelte';
  import QueryStateHandler from '$lib/components/general/QueryStateHandler.svelte';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

  let { user } = $derived(data);

  let guidesTab = $state(false);
</script>

<svelte:head>
  {#if !$user.fetching && !$user.error && $user.data.getUser}
    <MetaDescriptors
      description="{$user.data.getUser.username} profile"
      title="{$user.data.getUser.username} profile" />
  {/if}
</svelte:head>

<QueryStateHandler query={user}>
  {#snippet empty()}
    <Page404 />
  {/snippet}

  {#if $user.data.getUser}
    <div class="xlx:grid-flow-row grid gap-6">
      <div class="flex h-auto flex-wrap items-center justify-between">
        <h1 class="text-4xl font-bold">{$user.data.getUser.username}</h1>

        <div>
          {#if $me && $user.data.getUser.id === $me.id}
            <a class="btn border border-primary-500 preset-tonal-primary" href="{base}/settings">Settings</a>
          {/if}

          <button class="btn border border-primary-500 preset-tonal-primary" onclick={() => (guidesTab = !guidesTab)}>
            {#if !guidesTab}
              Guides
            {:else}
              Mods
            {/if}
          </button>
        </div>
      </div>
      <div class="grid-auto-max grid auto-cols-fr gap-4">
        {#if !guidesTab}
          <div class="grid h-fit grid-cols-1 gap-4 3xl:grid-cols-3 2xl:grid-cols-2">
            {#each $user.data.getUser.mods as mod (mod.mod.id)}
              <ModCard mod={mod.mod} />
            {/each}

            {#if $user.data.getUser.mods.length === 0}
              <!-- TODO Prettier -->
              User has no mods
            {/if}
          </div>
        {:else}
          <div class="grid h-fit grid-cols-1 gap-4 3xl:grid-cols-3 2xl:grid-cols-2">
            {#each $user.data.getUser.guides as guide (guide.id)}
              <GuideCard {guide} logo={$user.data.getUser.avatar} />
            {/each}

            {#if $user.data.getUser.guides.length === 0}
              <!-- TODO Prettier -->
              User has no guides
            {/if}
          </div>
        {/if}
        <div class="grid auto-rows-min grid-cols-1 gap-8">
          <UserAvatar avatar={$user.data.getUser.avatar} username={$user.data.getUser.username} />
          <UserInfo user={$user.data.getUser} />
        </div>
      </div>
    </div>
  {/if}
</QueryStateHandler>
