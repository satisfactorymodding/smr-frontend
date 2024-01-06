<script lang="ts">
  import { GetTagsDocument } from '$lib/generated/graphql';
  import type { Tag } from '$lib/generated/graphql';
  import { queryStore, getContextClient } from '@urql/svelte';
  import { Autocomplete, type AutocompleteOption, InputChip, type PopupSettings, popup } from '@skeletonlabs/skeleton';
  import { onMount } from 'svelte';
  import TagDisplay from './TagDisplay.svelte';

  const client = getContextClient();

  const getAllTags = queryStore({
    query: GetTagsDocument,
    client,
    variables: {
      limit: 100
    }
  });

  export let tags: Tag[] = [];
  export let editable = false;
  export let popupTriggerEvent: PopupSettings['event'] = 'click';

  $: allTags =
    $getAllTags.data?.getTags?.map((t) => ({
      label: `${t.name} - ${'TODO: Tag description this will become a very long string sometimes yes long string'}`,
      value: t.id
    })) || ([] satisfies AutocompleteOption[]);

  const popupSettings: PopupSettings = {
    event: 'focus-click',
    target: 'popupAutocomplete',
    placement: 'bottom-start'
  };

  let tagList = [];
  const loadTagList = () => (tagList = tags.map((t: Tag) => t.name));

  onMount(loadTagList);

  const addTag = (tag: AutocompleteOption) => {
    tags = [
      ...tags,
      {
        id: tag.value,
        name: tag.label,
        description: $getAllTags.data?.getTags?.find((t) => t.id == tag.value).description
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
      <div class="text-md flex flex-row flex-wrap gap-1">
        {#each tags as tag}
          <TagDisplay {tag} {popupTriggerEvent} />
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

    <div class="card max-h-48 w-max max-w-full overflow-y-auto p-4" tabindex="-1" data-popup="popupAutocomplete">
      <Autocomplete
        bind:input={inputTag}
        options={allTags.filter((t) => tagList.indexOf(t.label) < 0)}
        on:selection={(t) => addTag(t.detail)} />
    </div>
  {/if}
</div>
