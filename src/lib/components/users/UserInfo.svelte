<script lang="ts">
  import type { User } from '$lib/generated';
  import { prettyDate } from '$lib/utils/formatting';
  import { getTranslate } from '@tolgee/svelte';

  export let user!: Pick<User, 'created_at'>;

  export const { t } = getTranslate();
</script>

<div class="card p-4">
  <section>
    <div class="text-lg">
      <h3 class="my-4 text-2xl font-bold">Info</h3>
      <span><strong>{$t('entry.created-at')}:</strong> {prettyDate(user.created_at)}</span><br />
    </div>
  </section>
</div>
