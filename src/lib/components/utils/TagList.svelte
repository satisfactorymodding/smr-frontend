<script lang="ts">
  import { GetTagsDocument } from '$lib/generated/graphql';
  import type { Tag } from '$lib/generated/graphql';
  import Chip, { Set, Text } from '@smui/chips';
  import MenuSurface from '@smui/menu-surface';
  import { operationStore, query } from '@urql/svelte';
  import type { MenuSurfaceComponentDev } from '@smui/menu-surface/src/MenuSurface.types';
  import Textfield, { Input } from '@smui/textfield';
  import FloatingLabel from '@smui/floating-label';
  import LineRipple from '@smui/line-ripple';
  import type { InputComponentDev } from '@smui/textfield';
  import type { LineRippleComponentDev } from '@smui/line-ripple';

  const getAllTags = operationStore(GetTagsDocument);

  export let tags: Tag[] = [];
  export let editable = false;

  let inputA: InputComponentDev;
  let lineRippleA: LineRippleComponentDev;

  let shake = false;

  let allTags: Tag[] = [];
  let filteredTagsMatched: Tag[] = [];
  let filteredTagsUnmatched: Tag[] = [];

  let newTagText: string;

  let newTag: HTMLInputElement;
  let newTagContainer: HTMLElement = null;
  let surface: MenuSurfaceComponentDev;

  let focused = false;

  $: newTag = inputA?.getElement();

  function filterAvailableTags(tagList: Tag[], currentTags: Tag[], filterText: string): [Tag[], Tag[]] {
    if (!tagList || !currentTags) {
      return [tagList, tagList];
    }
    let unfiltered = tagList.filter((tag) => !currentTags.find((t) => t.id == tag.id));
    const filtered = unfiltered.filter((tag) => !newTag || tag.name.startsWith(filterText));
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

  function setTagText(text: string) {
    newTagText = text;
    newTag.value = newTagText;
  }

  export function setTextRange(el: HTMLInputElement, start: number, end: number): void {
    el.focus();
    if (typeof window.getSelection != 'undefined' && typeof document.createRange != 'undefined') {
      el.setSelectionRange(start, end);
    }
  }

  export function placeCaretAtEnd(el: HTMLInputElement): void {
    el.focus();
    if (typeof window.getSelection != 'undefined' && typeof document.createRange != 'undefined') {
      el.setSelectionRange(el.value.length, el.value.length);
    }
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

  function newTagKeydown(e: Event) {
    if (!(e instanceof KeyboardEvent)) {
      return;
    }
    if (e.code == 'Backspace') {
      if (newTag.value == '') {
        setTagText(tags.pop().name);
        placeCaretAtEnd(newTag);
        tags = tags;
        e.preventDefault();
        updateTags();
      }
    } else if (e.code == 'Enter') {
      e.preventDefault();
      if (addTag(newTag.value)) {
        setTagText('');
        updateTags();
      } else {
        shake = true;
        setTimeout(() => (shake = false), 500);
      }
    } else {
      const newText = newTagText + e.key;
      const [available] = filterAvailableTags(allTags, tags, newText);
      if (available && available.length > 0) {
        newTag.value = available[0].name;
        setTextRange(newTag, newTagText.length + 1, newTag.value.length);
        e.preventDefault();
        newTagText = newText;
        updateTags();
      }
    }
  }

  function onFocusLost() {
    setTimeout(() => {
      if (newTagContainer && !newTagContainer.contains(document.activeElement)) {
        surface.setOpen(false);
      }
    }, 200);
  }

  function onInput(e: Event) {
    newTagText = newTag.value;
    updateTags();
    e.preventDefault();
  }
</script>

<div class="tags" on:focusin={() => (focused = true)} on:focusout={() => (focused = false)}>
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
    <Textfield class="tags overflow-visible" bind:lineRipple={lineRippleA} bind:input={inputA} style="z-index: 9999">
      <FloatingLabel
        class="pb-2"
        for="input-manual-a"
        slot="label"
        floatAbove={(newTag && newTag.value.length > 0) || focused || tags.length > 0}>Tags</FloatingLabel>
      <div class="flex flex-row flex-wrap text-sm gap-1 mr-2">
        {#each tags as tag}
          <div class="text-neutral-300 whitespace-nowrap flex">
            <span class="text-orange-500">#</span>
            <p>{tag.name}</p>
          </div>
        {/each}
        <div
          id="newTagContainer"
          class="text-neutral-300 whitespace-nowrap flex"
          bind:this={newTagContainer}
          on:focusin={() => surface.setOpen(true)}
          on:focusout={onFocusLost}>
          <MenuSurface bind:this={surface} managed={true} anchorCorner="BOTTOM_LEFT" anchorElement={newTag}>
            <div style="margin: 1rem">
              <h1>Available Tags</h1>
              <div class="flex flex-wrap m-1">
                <Set chips={filteredTagsMatched} let:chip key={(tag) => tag.name}>
                  <Chip {chip} on:SMUIChip:interaction={() => addTag(chip.name)}>
                    <Text>{chip.name}</Text>
                  </Chip>
                </Set>
              </div>
              <div class="flex flex-wrap m-1">
                <Set chips={filteredTagsUnmatched} let:chip key={(tag) => tag.name}>
                  <Chip {chip} on:SMUIChip:interaction={() => addTag(chip.name)}>
                    <Text>{chip.name}</Text>
                  </Chip>
                </Set>
              </div>
            </div>
          </MenuSurface>
          {#if focused}
            <span class="text-orange-500">#</span>
          {/if}
          <Input
            id="input-manual-a"
            spellcheck="false"
            autocomplete="off"
            class="inline text-sm text-neutral-300 {shake ? 'shake' : ''}"
            style="height: initial"
            bind:this={inputA}
            on:keydown={newTagKeydown}
            on:input={onInput} />
        </div>
      </div>
      <LineRipple bind:this={lineRippleA} slot="ripple" />
    </Textfield>
  {/if}
</div>
