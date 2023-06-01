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

  let inputA: InputComponentDev;

  const shake = false;

  let allTags: Tag[] = [];
  let filteredTagsMatched: Tag[] = [];
  let filteredTagsUnmatched: Tag[] = [];

  let newTagText = '';

  let newTag: HTMLInputElement;
  let newTagContainer: HTMLElement = null;
  let surface: MenuSurfaceComponentDev;

  let tagBox: HTMLDivElement;

  let focused = false;

  $: newTag = inputA?.getElement();

  function filterAvailableTags(tagList: Tag[], currentTags: Tag[], filterText: string): [Tag[], Tag[]] {
    if (!tagList || !currentTags || !filterText) {
      return [tagList, []];
    }
    console.log(filterText);
    filterText = filterText.toLowerCase();
    let unfiltered = tagList.filter((tag) => !currentTags.find((t) => t.id == tag.id));
    const filtered = unfiltered.filter((tag) => !newTag || tag.name.toLowerCase().includes(filterText));
    unfiltered = unfiltered.filter((tag) => filtered.findIndex((t) => t.id === tag.id) === -1);
    return [filtered, unfiltered];
  }

  function updateTags() {
    tags = tags;
    [filteredTagsMatched, filteredTagsUnmatched] = filterAvailableTags(allTags, tags, newTagText);
  }

  if (editable) {
    query(getAllTags);
    getAllTags.subscribe(() => {
      if (!getAllTags.fetching && !getAllTags.error) {
        allTags = getAllTags.data.getTags;
        updateTags();
      }
    });
  }

  function addTag(newTagObj: string | Tag) {
    if (!allTags) {
      return false;
    }
    const tagToAdd = allTags.find((tag) => {
      if (typeof newTagObj == 'string') {
        return newTagObj == tag.name || newTagObj == tag.id;
      } else {
        return newTagObj.id == tag.id;
      }
    }) as Tag;
    if (tagToAdd && !tags.find((tag) => tag.id == tagToAdd.id)) {
      tags.push(tagToAdd);
      updateTags();
      return true;
    }
    updateTags();
    return false;
  }

  function deleteTag(tag: Tag) {
    tags = tags.filter((v) => v != tag);
    updateTags();
  }

  function onFocusLost() {
    setTimeout(() => {
      if (!tagBox.contains(document.activeElement)) {
        surface.setOpen(false);
      }
    }, 200);
  }

  function onInput(e) {
    //on:input is thrown before the inner text of the input is updated.
    // The following if-else ensure the text we search with is up-to-date
    if (e.data) {
      newTagText += e.data;
    } else {
      newTagText = newTagText.substring(0, newTagText.length - 1);
    }
    updateTags();
    e.preventDefault();
  }
  updateTags();
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
      <Textfield class="tags" bind:input={inputA} style="z-index: 9999">
        <FloatingLabel
          class="pb-2"
          for="input-manual-a"
          slot="label"
          floatAbove={(newTag && newTag.value.length > 0) || focused || tags.length > 0}>
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
        <div id="newTagContainer" class="text-neutral-300 flex" bind:this={newTagContainer}>
          <Input
            id="input-manual-a"
            spellcheck="false"
            autocomplete="off"
            class="addTag inline text-sm text-neutral-300 {shake ? 'shake' : ''}"
            style="height: initial"
            bind:this={inputA}
            bind:value={newTagText}
            on:input={onInput} />
        </div>
      </Textfield>
      <MenuSurface bind:this={surface} managed={true} anchorCorner="BOTTOM_LEFT" anchorElement={newTag}>
        <div style="margin: 1rem">
          <h1>Available Tags</h1>
          {#if filteredTagsMatched.length > 0}
            <div class="flex flex-nowrap m-1">
              <Set chips={filteredTagsMatched} let:chip key={(tag) => tag.name}>
                <Chip {chip} on:SMUIChip:interaction={() => addTag(chip.name)}>
                  <Text>{chip.name}</Text>
                </Chip>
              </Set>
            </div>
          {/if}
          {#if filteredTagsUnmatched.length > 0}
            <div class="flex flex-nowrap m-1">
              <Set class="unmatched-tag" chips={filteredTagsUnmatched} let:chip key={(tag) => tag.name}>
                <Chip {chip} on:SMUIChip:interaction={() => addTag(chip.name)}>
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
