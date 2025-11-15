<script lang="ts">
  import type { User, UserMod } from '$lib/generated';
  import { getTranslate } from '@tolgee/svelte';
  import UserDisplay from '$lib/components/users/UserDisplay.svelte';

  interface Props {
    authors: Array<
      Pick<UserMod, 'role'> & {
        user?: Pick<User, 'id' | 'username' | 'avatar'>;
      }
    >;
  }

  let { authors }: Props = $props();

  export const { t } = getTranslate();
</script>

<div class="card preset-filled-surface-100-900 p-4">
  <section>
    <div class="grid grid-flow-row gap-y-2">
      <h3 class="my-4 text-2xl font-bold">{$t('authors')}</h3>

      <div class="grid auto-rows-min gap-y-4 text-lg">
        {#each authors as author (author.user.id)}
          <UserDisplay
            user={{ id: author.user.id, username: author.user.username, avatar: author.user.avatar }}
            role={$t(`role.${author.role.toLowerCase()}`)} />
        {/each}
      </div>
    </div>
  </section>
</div>
