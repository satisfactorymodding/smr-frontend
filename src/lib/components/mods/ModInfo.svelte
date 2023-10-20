<script lang="ts">
  import type { Mod } from '$lib/generated';
  import { prettyDate, prettyNumber } from '$lib/utils/formatting';

  import TagList from '$lib/components/utils/TagList.svelte';
  import { getTranslate } from '@tolgee/svelte';

  export let mod!: Pick<
    Mod,
    'source_url' | 'created_at' | 'views' | 'downloads' | 'mod_reference' | 'compatibility' | 'tags'
  >;

  export const { t } = getTranslate();
</script>

<div class="card p-4">
  <section>
    <div class="text-lg break-words">
      <h3 class="text-2xl my-4 font-bold">Info</h3>
      <span
        ><strong>{$t('entry.source')}:</strong>
        <a class="underline text-yellow-500" href={mod.source_url}>{mod.source_url}</a></span
      ><br />
      <span><strong>{$t('entry.created-at')}:</strong> {prettyDate(mod.created_at)}</span><br />
      <span><strong>{$t('entry.views')}:</strong> {prettyNumber(mod.views)}</span><br />
      <span><strong>{$t('downloads')}:</strong> {prettyNumber(mod.downloads)}</span><br />
      <span><strong>{$t('mod.reference')}:</strong> {mod.mod_reference}</span><br />
      <TagList tags={mod.tags} />
    </div>
  </section>
</div>
