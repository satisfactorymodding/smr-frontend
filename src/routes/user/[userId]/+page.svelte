<script lang="ts">
  import Button from '@smui/button';
  import UserInfo from '$lib/components/users/UserInfo.svelte';
  import UserAvatar from '$lib/components/users/UserAvatar.svelte';
  import ModCard from '$lib/components/mods/ModCard.svelte';
  import GuideCard from '$lib/components/guides/GuideCard.svelte';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import { user as me } from '$lib/stores/user';
  import { base } from '$app/paths';
  import type { PageData } from './$types';

  export let data: PageData;

  $: ({ user } = data);

  let guidesTab = false;
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
    <div class="flex flex-wrap h-auto justify-between items-center">
      <h1 class="text-4xl font-bold">{$user.data.getUser.username}</h1>

      <div>
        {#if $me && $user.data.getUser.id === $me.id}
          <Button variant="outlined" href="{base}/settings">Settings</Button>
        {/if}

        <Button variant="outlined" on:click={() => (guidesTab = !guidesTab)}>
          {#if !guidesTab}
            Guides
          {:else}
            Mods
          {/if}
        </Button>
      </div>
    </div>
    <div class="grid grid-auto-max auto-cols-fr gap-4">
      {#if !guidesTab}
        <div class="grid 3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1 gap-4 h-fit">
          {#each $user.data.getUser.mods as mod}
            <ModCard mod={mod.mod} />
          {/each}

          {#if $user.data.getUser.mods.length === 0}
            <!-- TODO Prettier -->
            User has no mods
          {/if}
        </div>
      {:else}
        <div class="grid 3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1 gap-4 h-fit">
          {#each $user.data.getUser.guides as guide}
            <GuideCard {guide} logo={$user.data.getUser.avatar} />
          {/each}

          {#if $user.data.getUser.guides.length === 0}
            <!-- TODO Prettier -->
            User has no guides
          {/if}
        </div>
      {/if}
      <div class="grid grid-cols-1 auto-rows-min gap-8">
        <UserAvatar avatar={$user.data.getUser.avatar} username={$user.data.getUser.username} />
        <UserInfo user={$user.data.getUser} />
      </div>
    </div>
  </div>
{:else}
  <!-- TODO Better 404 -->
  404
{/if}
