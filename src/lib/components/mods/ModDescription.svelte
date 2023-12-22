<script lang="ts">
  import { AnnouncementImportance, type Mod } from '$lib/generated';
  import { markdown } from '$lib/utils/markdown';
  import AnnouncementRow from '../announcements/AnnouncementRow.svelte';

  export let mod!: Pick<Mod, 'full_description' | 'short_description' | 'hidden'>;

  $: description = mod.full_description ? markdown(mod.full_description) : mod.short_description;
</script>

<div>
  {#if mod.hidden}
    <div class="p-4">
      <AnnouncementRow
        importance={AnnouncementImportance.Info}
        message="This mod is hidden, which means it won't display in searches, and the Mod Manager will not display any view/download count or logo for it. A developer could chose to hide their mod for any number of reasons. Perhaps the mod is a library mod and not intended to be viewed directly, or maybe the developer doesn't want to develop the mod any more. Check the mod page for more information." />
    </div>
  {/if}
  <div class="card h-fit p-4">
    <section>
      <div class="markdown-content break-words">
        {#await description then descriptionRendered}
          <!-- eslint-disable -->
          <p>{@html descriptionRendered}</p>
        {/await}
      </div>
    </section>
  </div>
</div>
