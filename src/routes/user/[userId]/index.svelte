<script lang="ts" context="module">
  import {paramsToProps} from "$lib/utils/routing";

  export const load = paramsToProps();
</script>

<script lang="ts">
  import {operationStore, query} from "@urql/svelte";
  import {GetUserDocument} from "$lib/generated";
  import UserInfo from "$lib/components/users/UserInfo.svelte";
  import UserAvatar from "$lib/components/users/UserAvatar.svelte";
  import ModCard from "$lib/components/mods/ModCard.svelte";
  import GuideCard from "$lib/components/guides/GuideCard.svelte";
  import {user as me} from "$lib/stores/user";

  export let userId!: string;

  let guidesTab = false;

  const user = operationStore(
    GetUserDocument,
    {user: userId}
  );

  query(user);
</script>

{#if $user.fetching}
  <p>Loading...</p>
{:else if $user.error}
  <p>Oh no... {$user.error.message}</p>
{:else}
  {#if $user.data.getUser}
    <div class="grid gap-8 grid-auto-max">
      <div class="grid grid-cols-1 auto-rows-min gap-8">
        <div class="grid grid-flow-col grid-auto-max h-auto gap-4 items-center">
          <h1 class="text-4xl my-4 font-bold">{ $user.data.getUser.username }</h1>

          {#if $me && $user.data.getUser.id === $me.id}
            <a href="/settings" class="py-2 px-4 rounded text-base bg-yellow-600">Settings</a>
          {/if}

          <button class="py-2 px-4 rounded text-base bg-blue-500" on:click={() => guidesTab = !guidesTab}>
            {#if !guidesTab}
              Guides
            {:else}
              Mods
            {/if}
          </button>
        </div>
        {#if !guidesTab}
          <div class="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4">
            {#each $user.data.getUser.mods as mod}
              <ModCard mod="{mod.mod}"/>
            {/each}

            {#if $user.data.getUser.mods.length === 0}
              <!-- TODO Prettier -->
              User has no mods
            {/if}
          </div>
        {:else}
          <div class="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4">
            {#each $user.data.getUser.guides as guide}
              <GuideCard guide="{guide}" logo={$user.data.getUser.avatar}/>
            {/each}

            {#if $user.data.getUser.guides.length === 0}
              <!-- TODO Prettier -->
              User has no guides
            {/if}
          </div>
        {/if}
      </div>
      <div class="grid grid-cols-1 auto-rows-min gap-8">
        <UserAvatar avatar={$user.data.getUser.avatar} username={$user.data.getUser.username}/>
        <UserInfo user={$user.data.getUser}/>
      </div>
    </div>
  {:else }
    <!-- TODO Better 404 -->
    404
  {/if}
{/if}

<style lang="postcss">
  .grid-auto-max {
    grid-template-columns: auto max-content max-content;
  }
</style>
