<script lang="ts">
  import type { Mod } from '$lib/generated';
  import { prettyDate, prettyNumber } from '$lib/utils/formatting';

  import TagList from '$lib/components/utils/TagList.svelte';
  import { getTranslate } from '@tolgee/svelte';

  interface Props {
    mod: Pick<Mod, 'source_url' | 'created_at' | 'views' | 'downloads' | 'mod_reference' | 'compatibility' | 'tags'>;
  }

  let { mod }: Props = $props();

  export const { t } = getTranslate();
</script>

<div class="card p-4">
  <section>
    <div class="break-words text-lg">
      <h3 class="my-4 text-2xl font-bold">Info</h3>
      <span
        ><strong>{$t('entry.source')}:</strong>
        {#if mod.source_url.length > 0}
          <a class="text-yellow-500 underline" href={mod.source_url}>{mod.source_url}</a>
        {:else}
          {$t('entry.source.none-provided')}
        {/if}
      </span><br />
      <span><strong>{$t('entry.created-at')}:</strong> {prettyDate(mod.created_at)}</span><br />
      <span><strong>{$t('entry.views')}:</strong> {prettyNumber(mod.views)}</span><br />
      <span><strong>{$t('downloads')}:</strong> {prettyNumber(mod.downloads)}</span><br />
      <span><strong>{$t('mod.reference')}:</strong> {mod.mod_reference}</span><br />
      <TagList tags={mod.tags} />
    </div>
  </section>
</div>
