<script lang="ts">
  import type { Guide } from '$lib/generated';
  import { prettyDate } from '$lib/utils/formatting';
  import { getTranslate } from '@tolgee/svelte';

  export let guide!: Pick<Guide, 'created_at'>;

  export const { t } = getTranslate();
</script>

<div class="card p-4">
  <section>
    <div class="text-lg">
      <h3 class="my-4 text-2xl font-bold">{$t('entry.info')}</h3>
      <span><strong>{$t('entry.created-at')}:</strong> {prettyDate(guide.created_at)}</span><br />
    </div>
  </section>
</div>
