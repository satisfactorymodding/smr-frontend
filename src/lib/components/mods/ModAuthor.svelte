<script lang="ts">
  import { queryStore, getContextClient } from '@urql/svelte';
  import { GetUserDocument } from '$lib/generated';
  import { assets } from '$app/paths';
  import { getTranslate } from '@tolgee/svelte';

  export let id: string;

  export const { t } = getTranslate();

  const client = getContextClient();

  $: user = queryStore({
    query: GetUserDocument,
    client,
    variables: { user: id }
  });
</script>

{#if $user.fetching}
  <p class="mr-2">{$t('loading')}...</p>
{:else if $user.error}
  <p class="mr-2">{$t('error.oh-no')}... {$user.error.message}</p>
{:else if $user.data.getUser}
  <div class="mr-2 grid auto-cols-max grid-flow-col gap-x-2">
    <div
      class="h-7 w-7 rounded-full bg-cover"
      style={`background-image: url("${$user.data.getUser.avatar || assets + '/images/no_image.webp'}")`} />
    <div class="grid grid-flow-row">
      <span class="text-yellow-500">{$user.data.getUser.username}</span>
    </div>
  </div>
{:else}
  <p class="mr-2 whitespace-nowrap">Unknown User ID</p>
{/if}
