<script lang="ts">
  import { run } from 'svelte/legacy';

  import { getContextClient, queryStore } from '@urql/svelte';
  import {
    GetAnnouncementsDocument,
    CreateAnnouncementDocument,
    type Announcement,
    AnnouncementImportance,
    UpdateAnnouncementDocument,
    DeleteAnnouncementDocument
  } from '$lib/generated';
  import { Accordion } from '@skeletonlabs/skeleton-svelte';
  const client = getContextClient();

  let announcements: Announcement[] = $state([]);
  const nameFields = $state({});
  let announcementNegativeID = -1;
  const defaultNewAnnouncementMessage = 'New Announcement';

  const annQuery = queryStore({
    query: GetAnnouncementsDocument,
    client
  });

  run(() => {
    announcements = $annQuery.data?.getAnnouncements || [];
  });

  function newAnnouncement() {
    if (!announcements.find((announcement) => announcement.message == defaultNewAnnouncementMessage)) {
      const announcement = {
        id: announcementNegativeID--,
        message: defaultNewAnnouncementMessage,
        importance: AnnouncementImportance.Info
      } as Announcement;
      announcements.push(announcement);
      announcements = announcements;
      setTimeout(() => {
        const field = nameFields[announcement.id];
        field.focus();
        const input = field.getElement().querySelectorAll('input')[0] as HTMLInputElement;
        input.select();
      }, 0);
    } else {
      nameFields[announcements[announcements.length - 1].id].focus();
    }
  }

  async function announcementChange(announcement: Announcement) {
    if (announcement.message == defaultNewAnnouncementMessage) {
      return;
    }

    let success = false;
    if (announcement.id < 0) {
      // Create new tag & update tag.id with new DB id or re-fetch all tags
      try {
        const result = await client
          .mutation(CreateAnnouncementDocument, {
            announcement: { importance: announcement.importance, message: announcement.message }
          })
          .toPromise();
        if (result.data) {
          announcement.id = result.data.createAnnouncement.id;
          success = true;
        }
      } catch (err) {
        console.log(err);
      }
      if (!success) {
        toastStore.trigger({
          message: `Failed to create Announcement '${announcement.message}'!`,
          background: 'preset-filled-error-500',
          timeout: 2000
        });
        return;
      }
    } else {
      // Update existing tag
      try {
        if (announcement.message.length > 0) {
          success =
            (
              await client
                .mutation(UpdateAnnouncementDocument, {
                  id: announcement.id,
                  announcement: { importance: announcement.importance, message: announcement.message }
                })
                .toPromise()
            ).data.updateAnnouncement != null;
        }
      } catch {
        // nothing
      }
      if (!success) {
        toastStore.trigger({
          message: `Failed to update Announcement '${announcement.message}'!`,
          background: 'preset-filled-error-500',
          timeout: 2000
        });
        return;
      }
    }

    toastStore.trigger({
      message: `Announcement '${announcement.message}' saved!`,
      background: 'preset-filled-success-500',
      timeout: 2000
    });
  }

  async function deleteAnnouncement(announcement: Announcement) {
    if (announcement.message != defaultNewAnnouncementMessage) {
      let success = false;
      try {
        const result = await client.mutation(DeleteAnnouncementDocument, { id: announcement.id }).toPromise();
        success = result.data.deleteAnnouncement;
      } catch {
        success = false;
      }
      if (!success) {
        toastStore.trigger({
          message: `Failed to remove Announcement '${announcement.message}'!`,
          background: 'preset-filled-error-500',
          timeout: 2000
        });
        return;
      }
    } else {
      announcements.splice(announcements.indexOf(announcement), 1);
    }

    toastStore.trigger({
      message: `Tag '${announcement.message}' removed!`,
      background: 'preset-filled-success-500',
      timeout: 2000
    });
  }

  function onDeleteClick(e: Event, announcement: Announcement) {
    e.stopPropagation();
    deleteAnnouncement(announcement);
  }
</script>

<h1>Announcements</h1>

<div class="card">
  {#if $annQuery.fetching}
    <h1>Loading announcements...</h1>
  {:else if $annQuery.error}
    <h1>Failed to load announcements: {$annQuery.error.message}</h1>
  {:else}
    <Accordion>
      {#each announcements as announcement}
        <Accordion.Item>
          {#snippet summary()}
            ({announcement.importance}) {(() => {
              const trimTo = 144;
              const trimmed = announcement.message.substring(0, trimTo);
              return announcement.message.length > trimTo ? trimmed + '...' : trimmed;
            })()}
          {/snippet}
          {#snippet content()}
            <div>
              <div>Message</div>
              <input
                type="text"
                class="input p-2"
                bind:value={announcement.message}
                placeholder="This is the text of the announcement"
                bind:this={nameFields[announcement.id]}
                onchange={() => announcementChange(announcement)} />
              <div>Importance (Fix, Info, Warning, Alert)</div>
              <input
                type="text"
                class="input p-2"
                bind:value={announcement.importance}
                placeholder="Importance level"
                onchange={() => announcementChange(announcement)} />
            </div>

            <button
              class="preset-tonal-error border-error-500 btn border"
              onclick={(e) => onDeleteClick(e, announcement)}>
              <span>Delete</span>
            </button>
          {/snippet}
        </Accordion.Item>
      {/each}
    </Accordion>

    <section class="p-4">
      <button class="preset-tonal-primary border-primary-500 btn border" onclick={newAnnouncement}>
        <span>Add new announcement</span>
        <span class="material-icons">add</span>
      </button>
    </section>
  {/if}
</div>

<style lang="postcss">
  @reference "../../../app.css";

  h1 {
    @apply my-4 text-4xl font-bold;
  }
</style>
