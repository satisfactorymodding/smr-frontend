<script lang="ts">
  import type { Mod } from '$lib/generated';
  import Card, { Content } from '@smui/card';
  import { prettyDate, prettyNumber } from '$lib/utils/formatting';

  import TagList from '$lib/components/utils/TagList.svelte';

  export let mod!: Pick<
    Mod,
    'source_url' | 'created_at' | 'views' | 'downloads' | 'mod_reference' | 'compatibility' | 'tags'
  >;
</script>

<Card>
  <Content>
    <div class="text-lg break-words">
      <h3 class="text-2xl my-4 font-bold">Info</h3>
      <span
        ><strong>Tags:</strong>
        {#if mod.tags.length == 0}
          <div class="tags">(No tags assigned)</div>
        {:else}
          <TagList tags={mod.tags} />
        {/if}
      </span>
      <span style="white-space: pre-line"
        ><strong>Source:</strong>
        {#if mod.source_url}
          <a class="underline text-yellow-500 break-all" href={mod.source_url}>{mod.source_url}</a>
        {:else}
          (No source URL provided by mod author)
        {/if}
      </span><br />
      <span><strong>Created:</strong> {prettyDate(mod.created_at)}</span><br />
      <span><strong>Views:</strong> {prettyNumber(mod.views)}</span><br />
      <span><strong>Downloads:</strong> {prettyNumber(mod.downloads)}</span><br />
      <span><strong>Reference:</strong> {mod.mod_reference}</span><br />
    </div>
  </Content>
</Card>
