<script lang="ts">
  import { queryStore, getContextClient } from '@urql/svelte';
  import { GetUserDocument } from '$lib/generated';
  import { getTranslate } from '@tolgee/svelte';
  import UserDisplay from '$lib/components/users/UserDisplay.svelte';

  interface Props {
    id: string;
  }

  let { id }: Props = $props();

  export const { t } = getTranslate();

  const client = getContextClient();

  let user = $derived(
    queryStore({
      query: GetUserDocument,
      client,
      variables: { user: id }
    })
  );
</script>

{#if $user.fetching}
  <p class="mr-2">{$t('loading')}...</p>
{:else if $user.error}
  <p class="mr-2">{$t('error.oh-no')}... {$user.error.message}</p>
{:else if $user.data.getUser}
  <div class="mr-2">
    <UserDisplay
      user={{ id: $user.data.getUser.id, username: $user.data.getUser.username, avatar: $user.data.getUser.avatar }}
      size="small"
      showLink={false}
      gap="small" />
  </div>
{:else}
  <p class="mr-2 whitespace-nowrap">Unknown User ID</p>
{/if}
