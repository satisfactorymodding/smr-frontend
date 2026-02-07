<script lang="ts">
  import { AnnouncementImportance, type Modpack } from '$lib/generated';
  import { markdown } from '$lib/utils/markdown';
  import AnnouncementRow from '../announcements/AnnouncementRow.svelte';

  export let modpack!: Pick<Modpack, 'full_description' | 'short_description' | 'hidden'>;

  $: description = modpack.full_description ? markdown(modpack.full_description) : modpack.short_description;
</script>

<div>
  {#if modpack.hidden}
    <div class="p-4">
      <AnnouncementRow
        importance={AnnouncementImportance.Info}
        message="This modpack is hidden, which means it won't display in searches, and the Mod Manager will not display any view/download count or logo for it. A developer could choose to hide their modpack for any number of reasons. Check the modpack page for more information." />
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
