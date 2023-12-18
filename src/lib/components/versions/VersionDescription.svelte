<script lang="ts">
  import { AnnouncementImportance } from '$lib/generated';
  import { markdown } from '$lib/utils/markdown';
  import AnnouncementRow from '../announcements/AnnouncementRow.svelte';

  export let changelog!: string;
  export let approved: boolean;
</script>

<div>
  {#if !approved}
    <div class="p-4">
      <AnnouncementRow
        importance={AnnouncementImportance.Warning}
        message="This version has not yet been approved by the virus scanner and is hidden until this process is complete. If this message isn't gone in the next few minutes, ask for manual approval on the Discord." />
    </div>
  {/if}
  <div class="h-fit card p-4">
    <section>
      <div class="markdown-content break-words">
        {#await markdown(changelog) then changelogRendered}
          <!-- eslint-disable -->
          <p>{@html changelogRendered}</p>
        {/await}
      </div>
    </section>
  </div>
</div>
