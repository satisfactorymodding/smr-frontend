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
      <h3 class="text-2xl my-4 font-bold">Info</h3>
      <span><strong>{$t('entry.created-at')}:</strong> {prettyDate(user.created_at)}</span><br />
    </div>
  </section>
</div>
