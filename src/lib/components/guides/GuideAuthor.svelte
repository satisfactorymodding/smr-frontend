<script lang="ts">
  import type { User } from '$lib/generated';
  import { getTranslate } from '@tolgee/svelte';
  import UserDisplay from '$lib/components/users/UserDisplay.svelte';

  interface Props {
    author: Pick<User, 'id' | 'username' | 'avatar'>;
  }

  let { author }: Props = $props();

  export const { t } = getTranslate();
</script>

<div class="card preset-filled-surface-100-900 p-4">
  <section>
    <div class="grid grid-flow-row gap-y-2">
      <h3 class="my-4 text-2xl font-bold">{$t('author')}</h3>

      <div class="grid auto-rows-min gap-y-4 text-lg">
        <UserDisplay
          user={{ id: author.id, username: author.username, avatar: author.avatar }}
          role={$t('role.writer')} />
      </div>
    </div>
  </section>
</div>
