<script lang="ts">
  import { getContextClient, queryStore } from '@urql/svelte';
  import { AnnouncementImportance, GetAnnouncementsDocument } from '$lib/generated';
  import AnnouncementRow from './AnnouncementRow.svelte';

  const client = getContextClient();

  const announcements = queryStore({
    query: GetAnnouncementsDocument,
    client,
    variables: {}
  });
</script>

{#if $announcements.fetching}
  <!-- Display nothing, don't disrupt the page for no reason -->
{:else if $announcements.error}
  <AnnouncementRow
    message="Failed to load announcements: {$announcements.error.message}"
    importance={AnnouncementImportance.Warning} />
{:else if $announcements && $announcements.data && $announcements.data.getAnnouncements}
  <div class="mt-3 mr-3 mb-3 ml-3 flex max-h-96 flex-col gap-2 overflow-y-auto xl:mb-0 xl:ml-0">
    {#each $announcements?.data?.getAnnouncements as announcement}
      <AnnouncementRow message={announcement.message} importance={announcement.importance} />
    {/each}
  </div>
{/if}
