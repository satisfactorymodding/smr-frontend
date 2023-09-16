<script lang="ts">
  import { GetTagsDocument } from '$lib/generated/graphql';
  import type { Tag } from '$lib/generated/graphql';
  import { queryStore, getContextClient } from '@urql/svelte';
  import { Autocomplete, type AutocompleteOption, InputChip, type PopupSettings, popup } from '@skeletonlabs/skeleton';
  import { onMount } from 'svelte';

  const client = getContextClient();

  const getAllTags = queryStore({
    query: GetTagsDocument,
    client,
    variables: {}
  });

  export let tags: Tag[] = [];
  export let editable = false;

  $: allTags =
    $getAllTags.data?.getTags?.map((t) => ({
      label: t.name,
      value: t.id
    })) || ([] satisfies AutocompleteOption[]);

  const popupSettings: PopupSettings = {
    event: 'focus-click',
    target: 'popupAutocomplete',
    placement: 'bottom-start'
  };

  let tagList = [];
  const loadTagList = () => (tagList = tags.map((t) => t.name));

  onMount(loadTagList);

  const addTag = (tag: AutocompleteOption) => {
    tags = [
      ...tags,
      {
        id: tag.value,
        name: tag.label
      }
    ];

    loadTagList();
  };

  const removeTag = (label: string) => {
    const idx = tags.findIndex((t) => t.name === label);
    tags = [...tags.slice(0, idx), ...tags.slice(idx + 1)];

    loadTagList();
  };

  let inputTag = '';
</script>

<div class="tags">
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
    <div class="mb-2">Tags</div>

    <div use:popup={popupSettings}>
      <InputChip
        bind:input={inputTag}
        bind:value={tagList}
        on:remove={(t) => removeTag(t.detail.chipValue)}
        name="tags"
        chips="variant-filled-primary" />
    </div>

    <div class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto" tabindex="-1" data-popup="popupAutocomplete">
      <Autocomplete
        bind:input={inputTag}
        options={allTags.filter((t) => tagList.indexOf(t.label) < 0)}
        on:selection={(t) => addTag(t.detail)} />
    </div>
  {/if}
</div>
