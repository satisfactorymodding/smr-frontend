<script lang="ts">
  import { GetTagsDocument } from '$lib/generated/graphql';
  import type { Tag } from '$lib/generated/graphql';
  import Chip, { Set, Text } from '@smui/chips';
  import MenuSurface from '@smui/menu-surface';
  import { operationStore, query } from '@urql/svelte';
  import type { MenuSurfaceComponentDev } from '@smui/menu-surface/src/MenuSurface.types';
  import Textfield, { Input } from '@smui/textfield';
  import FloatingLabel from '@smui/floating-label';
  import type { InputComponentDev } from '@smui/textfield';

  const getAllTags = operationStore(GetTagsDocument);

  export let tags: Tag[] = [];
  export let editable = false;

  let inputElement: InputComponentDev;

  const shake = false;

  let tagSearch = '';

  $: allTags = $getAllTags.data?.getTags ?? [];
  $: availableTags = allTags.filter((tag) => !tags.some((t) => t.id == tag.id));
  $: filteredTagsMatched = availableTags.filter((tag) => tag.name.toLowerCase().includes(tagSearch));
  $: filteredTagsUnmatched = availableTags.filter((tag) => !filteredTagsMatched.some((t) => t.id == tag.id));

  let surface: MenuSurfaceComponentDev;

  let tagBox: HTMLDivElement;

  let focused = false;

  if (editable) {
    query(getAllTags);
  }

  function addTag(newTag: Tag) {
    if (!tags.find((tag) => tag.id == newTag.id)) {
      tags = [...tags, newTag];
    }
  }

  function deleteTag(tag: Tag) {
    tags = tags.filter((v) => v != tag);
  }

  function onFocusLost() {
    setTimeout(() => {
      if (!tagBox.contains(document.activeElement)) {
        surface.setOpen(false);
      }
    }, 200);
  }
</script>

<div class="tagHolder" on:focusin={() => (focused = true)} on:focusout={() => (focused = false)}>
  {#if !editable}
    {#if tags.length > 0}
      <div class="flex flex-row flex-wrap text-sm gap-1">
        {#each tags as tag}
          <div class="text-neutral-300 lowercase">
            <span class="text-orange-500">#</span>{tag.name}
          </div>
        {/each}
      </div>
    {/if}
  {:else}
    <div bind:this={tagBox} on:focusin={() => surface.setOpen(true)} on:focusout={onFocusLost}>
      <Textfield class="tags" bind:input={inputElement} style="z-index: 9999">
        <FloatingLabel
          class="pb-2"
          for="input-manual-a"
          slot="label"
          floatAbove={!!tagSearch || focused || tags.length > 0}>
          Tags
        </FloatingLabel>
        <div class="flex flex-row flex-wrap text-sm gap-1 mr-2">
          {#each tags as tag}
            <div class="text-neutral-300 flex removable-tag">
              <span class="hashtag text-orange-500">#</span>
              <span class="cancel">
                <i class="material-icons mdc-chip__icon mdc-chip__icon--trailing" on:click={() => deleteTag(tag)}
                  >cancel</i>
              </span>
              <p>{tag.name}</p>
            </div>
          {/each}
        </div>
        <div id="newTagContainer" class="text-neutral-300 flex">
          <Input
            id="input-manual-a"
            spellcheck="false"
            autocomplete="off"
            class="addTag inline text-sm text-neutral-300 {shake ? 'shake' : ''}"
            style="height: initial"
            bind:this={inputElement}
            bind:value={tagSearch} />
        </div>
      </Textfield>
      <MenuSurface bind:this={surface} managed={true} anchorCorner="BOTTOM_LEFT" on:click={() => inputElement.focus()}>
        <div style="margin: 1rem">
          <h1>Available Tags</h1>
          {#if filteredTagsMatched.length > 0}
            <div class="flex flex-nowrap m-1">
              <Set chips={filteredTagsMatched} let:chip key={(tag) => tag.name}>
                <Chip {chip} on:SMUIChip:interaction={() => addTag(chip)}>
                  <Text>{chip.name}</Text>
                </Chip>
              </Set>
            </div>
          {/if}
          {#if filteredTagsUnmatched.length > 0}
            <div class="flex flex-nowrap m-1">
              <Set class="unmatched-tag" chips={filteredTagsUnmatched} let:chip key={(tag) => tag.name}>
                <Chip {chip} on:SMUIChip:interaction={() => addTag(chip)}>
                  <Text>{chip.name}</Text>
                </Chip>
              </Set>
            </div>
          {/if}
        </div>
      </MenuSurface>
    </div>
  {/if}
</div>

<style lang="scss">
  .removable-tag {
    .cancel {
      display: none;
      cursor: pointer;

      i {
        padding: 0;
        margin: 0;
      }
    }

    &:hover {
      .hashtag {
        display: none;
      }

      .cancel {
        display: initial;
      }
    }
  }

  :global(.tags) {
    overflow-y: visible;
  }

  .tagHolder {
    min-width: 100px;
    max-width: 400px;
    overflow-y: visible;

    /* width */
    ::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
</style>
