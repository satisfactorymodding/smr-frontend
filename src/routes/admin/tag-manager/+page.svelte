<script lang="ts">
  import { getContextClient, queryStore } from '@urql/svelte';
  import { CreateTagDocument, DeleteTagDocument, GetTagsDocument, UpdateTagDocument } from '$lib/generated';
  import type { Tag } from '$lib/generated';
  import { Accordion } from '@skeletonlabs/skeleton-svelte';
  import { toaster } from '$lib/utils/toaster-svelte';

  const client = getContextClient();

  let tags: Tag[] = $state([]);
  let tagNegativeID = -1;
  const defaultNewTagName = 'New Tag';

  const tagsQuery = queryStore({
    query: GetTagsDocument,
    client,
    variables: {
      limit: 100
    }
  });

  tagsQuery.subscribe((val) => {
    if (val.data?.getTags) {
      tags = val.data?.getTags || [];
    }
  });

  let value = $state(['0']);

  function newTag() {
    if (!tags.find((tag) => tag.name == defaultNewTagName)) {
      const tag = { id: tagNegativeID--, name: defaultNewTagName, description: 'Description' } as Tag;
      tags.push(tag);
      tags = tags;
      setTimeout(() => {
        value = [tag.id];
      }, 0);
    } else {
      value = [tags[tags.length - 1].id];
    }
  }

  async function tagChange(tag: Tag) {
    if (tag.name == defaultNewTagName) {
      return;
    }

    let success = false;
    if (tag.id < 0) {
      // Create new tag & update tag.id with new DB id or re-fetch all tags
      try {
        const result = await client
          .mutation(CreateTagDocument, { tagName: tag.name, description: tag.description })
          .toPromise();
        if (result.data) {
          tag.id = result.data.createTag.id;
          success = true;
        }
      } catch (err) {
        console.log(err);
      }
      if (!success) {
        toaster.error({
          description: `Failed to create Tag '${tag.name}'!`,
          duration: 2000
        });
        return;
      }
    } else {
      // Update existing tag
      try {
        success =
          (
            await client
              .mutation(UpdateTagDocument, { tagID: tag.id, tagName: tag.name, description: tag.description })
              .toPromise()
          ).data.updateTag != null;
      } catch {
        // nothing
      }
      if (!success) {
        toaster.error({
          description: `Failed to update Tag '${tag.name}'!`,
          duration: 2000
        });
        return;
      }
    }

    toaster.success({
      description: `Tag '${tag.name}' saved!`,
      duration: 2000
    });
  }

  async function deleteTag(tag: Tag) {
    if (tag.name != defaultNewTagName) {
      // Remove tag
      let success = false;
      try {
        const result = await client.mutation(DeleteTagDocument, { tagID: tag.id }).toPromise();
        success = result.data.deleteTag;
      } catch {
        success = false;
      }
      if (!success) {
        toaster.error({
          description: `Failed to remove Tag '${tag.name}'!`,
          duration: 2000
        });
        return;
      }
    } else {
      tags.splice(tags.indexOf(tag), 1);
    }

    toaster.success({
      description: `Tag '${tag.name}' removed!`,
      duration: 2000
    });
  }

  function onDeleteClick(e: Event, tag: Tag) {
    e.stopPropagation();
    deleteTag(tag);
  }
</script>

<h1>Mod Tag Manager</h1>

<div class="card preset-filled-surface-100-900">
  {#if $tagsQuery.fetching}
    <h1>Loading tags...</h1>
  {:else if $tagsQuery.error}
    <h1>Failed to load tags: {$tagsQuery.error.message}</h1>
  {:else}
    <Accordion {value} onValueChange={(details) => (value = details.value)}>
      {#each tags as tag (tag.id)}
        <Accordion.Item value={tag.id}>
          <Accordion.ItemTrigger>{tag.name}</Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <div>
              <div>Tag name</div>
              <input
                type="text"
                class="input p-2"
                bind:value={tag.name}
                placeholder="Name"
                onchange={() => tagChange(tag)} />
              <div>Tag description</div>
              <input
                type="text"
                class="input p-2"
                bind:value={tag.description}
                placeholder="Description"
                onchange={() => tagChange(tag)} />
            </div>
            <span>Human-Readable name and description of the tag that is shown in UI</span>

            <button class="btn border border-error-500 preset-tonal-error" onclick={(e) => onDeleteClick(e, tag)}>
              <span>Delete</span>
            </button>
          </Accordion.ItemContent>
        </Accordion.Item>
      {/each}
    </Accordion>

    <section class="p-4">
      <button class="btn border border-primary-500 preset-tonal-primary" onclick={newTag}>
        <span>Add new tag</span>
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
