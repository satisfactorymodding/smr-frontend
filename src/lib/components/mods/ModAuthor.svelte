<script lang="ts">
  import { queryStore, getContextClient } from '@urql/svelte';
  import { GetUserDocument } from '$lib/generated';
  import { assets } from '$app/paths';

  export let id: string;

  const client = getContextClient();

  $: user = queryStore({
    query: GetUserDocument,
    client,
    variables: { user: id }
  });
</script>

{#if $user.fetching}
  <p class="mr-2">Loading...</p>
{:else if $user.error}
  <p class="mr-2">Oh no... {$user.error.message}</p>
{:else if $user.data.getUser}
  <div class="grid grid-flow-col auto-cols-max gap-x-2 mr-2">
    <div
      class="rounded-full bg-cover w-7 h-7"
      style={`background-image: url("${$user.data.getUser.avatar || assets + '/images/no_image.webp'}")`} />
    <div class="grid grid-flow-row">
      <span class="text-yellow-500">{$user.data.getUser.username}</span>
    </div>
  </div>
{:else}
  <p class="mr-2 whitespace-nowrap">Unknown User ID</p>
{/if}
