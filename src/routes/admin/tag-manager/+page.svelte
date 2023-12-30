<script lang="ts">
  import { getContextClient, queryStore } from '@urql/svelte';
  import { CreateTagDocument, DeleteTagDocument, GetTagsDocument, UpdateTagDocument } from '$lib/generated';
  import type { Tag } from '$lib/generated';
  import { Accordion, AccordionItem, getToastStore } from '@skeletonlabs/skeleton';

  const client = getContextClient();

  let tags: Tag[] = [];
  const panels = {};
  const nameFields = {};
  let tagNegativeID = -1;

  const tagsQuery = queryStore({
    query: GetTagsDocument,
    client,
    variables: {
      limit: 100
    }
  });

  $: tags = $tagsQuery.data?.getTags || [];

  const toastStore = getToastStore();

  function newTag() {
    if (!tags.find((tag) => tag.name == 'New Tag')) {
      const tag = { id: tagNegativeID--, name: 'New Tag' } as Tag;
      tags.push(tag);
      tags = tags;
      setTimeout(() => {
        panels[tag.id].setOpen(true);
        const field = nameFields[tag.id];
        field.focus();
        const input = field.getElement().querySelectorAll('input')[0] as HTMLInputElement;
        input.select();
      }, 0);
    } else {
      panels[tags[tags.length - 1].id].setOpen(true);
      nameFields[tags[tags.length - 1].id].focus();
    }
  }

  async function tagChange(tag: Tag) {
    // ignore "New Tag"
    if (tag.name == 'New Tag') {
      return;
    }

    let success = false;
    if (tag.id < 0) {
      // Create new tag & update tag.id with new DB id or re-fetch all tags
      try {
        const result = await client.mutation(CreateTagDocument, { tagName: tag.name }).toPromise();
        if (result.data) {
          tag.id = result.data.createTag.id;
          success = true;
        }
      } catch (err) {
        console.log(err);
      }
      if (!success) {
        toastStore.trigger({
          message: `Failed to create Tag '${tag.name}'!`,
          background: 'variant-filled-error',
          timeout: 2000
        });
        return;
      }
    } else {
      // Update existing tag
      try {
        success =
          (await client.mutation(UpdateTagDocument, { tagID: tag.id, tagName: tag.name }).toPromise()).data.updateTag !=
          null;
      } catch {
        // nothing
      }
      if (!success) {
        toastStore.trigger({
          message: `Failed to update Tag '${tag.name}'!`,
          background: 'variant-filled-error',
          timeout: 2000
        });
        return;
      }
    }

    toastStore.trigger({
      message: `Tag '${tag.name}' saved!`,
      background: 'variant-filled-success',
      timeout: 2000
    });
  }

  async function deleteTag(tag: Tag) {
    if (tag.name != 'New Tag') {
      // Remove tag
      let success = false;
      try {
        const result = await client.mutation(DeleteTagDocument, { tagID: tag.id }).toPromise();
        success = result.data.deleteTag;
      } catch {
        success = false;
      }
      if (!success) {
        toastStore.trigger({
          message: `Failed to remove Tag '${tag.name}'!`,
          background: 'variant-filled-error',
          timeout: 2000
        });
        return;
      }
    }

    toastStore.trigger({
      message: `Tag '${tag.name}' removed!`,
      background: 'variant-filled-success',
      timeout: 2000
    });
  }

  function onDeleteClick(e: Event, tag: Tag) {
    e.stopPropagation();
    deleteTag(tag);
  }
</script>

<div class="card">
  {#if $tagsQuery.fetching}
    <h1>Loading tags...</h1>
  {:else if $tagsQuery.error}
    <h1>Failed to load tags: {$tagsQuery.error.message}</h1>
  {:else}
    <Accordion>
      {#each tags as tag}
        <AccordionItem>
          <svelte:fragment slot="summary">{tag.name}</svelte:fragment>
          <svelte:fragment slot="content">
            <input
              type="text"
              class="input p-2"
              bind:value={tag.name}
              placeholder="Tag-Name"
              bind:this={nameFields[tag.id]}
              on:change={() => tagChange(tag)} />
            <span slot="helper">Human-Readable name of the tag that is shown in UI</span>

            <button class="variant-ghost-error btn" on:click={(e) => onDeleteClick(e, tag)}>
              <span>Delete</span>
            </button>
          </svelte:fragment>
        </AccordionItem>
      {/each}
    </Accordion>

    <section class="p-4">
      <button class="variant-ghost-primary btn" on:click={newTag}>
        <span>Add new tag</span>
        <span class="material-icons">add</span>
      </button>
    </section>
  {/if}
</div>
