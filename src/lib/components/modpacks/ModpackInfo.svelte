<script lang="ts">
  import type { Modpack } from '$lib/generated';
  import { prettyDate, prettyNumber } from '$lib/utils/formatting';

  import TagList from '$lib/components/utils/TagList.svelte';
  import { getTranslate } from '@tolgee/svelte';

  export let modpack!: Pick<
    Modpack,
    'created_at' | 'views' | 'installs' | 'tags'
  >;

  export const { t } = getTranslate();
</script>

<div class="card p-4">
  <section>
    <div class="break-words text-lg">
      <h3 class="my-4 text-2xl font-bold">Info</h3>
      <span
        ><strong>{$t('entry.source')}:</strong>
      </span><br />
      <span><strong>{$t('entry.created-at')}:</strong> {prettyDate(modpack.created_at)}</span><br />
      <span><strong>{$t('entry.views')}:</strong> {prettyNumber(modpack.views)}</span><br />
      <span><strong>{$t('downloads')}:</strong> {prettyNumber(modpack.installs)}</span><br />
      <TagList tags={modpack.tags} />
    </div>
  </section>
</div>
