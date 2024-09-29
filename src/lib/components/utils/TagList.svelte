<script lang="ts">
  import { GetTagsDocument } from '$lib/generated/graphql';
  import type { Tag } from '$lib/generated/graphql';
  import { queryStore, getContextClient } from '@urql/svelte';
  import { Autocomplete, type AutocompleteOption, InputChip, type PopupSettings, popup } from '@skeletonlabs/skeleton';
  import { onMount } from 'svelte';
  import TagDisplay from './TagDisplay.svelte';
  import { getTranslate } from '@tolgee/svelte';

  export const { t } = getTranslate();

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
    $getAllTags.data?.getTags?.map((tag) => ({
      label: `${tag.name} - ${tag.description}`,
      value: tag.id,
      name: tag.name
    })) || ([] satisfies AutocompleteOption[]);

  const popupSettings: PopupSettings = {
    event: 'focus-click',
    target: 'popupAutocomplete',
    placement: 'bottom-start'
  };
  let tagList = [];
  const loadTagList = () => (tagList = tags.map((tag: Tag) => tag.name));

  onMount(loadTagList);

  const addTag = (tagToAdd: AutocompleteOption) => {
    const realTag = $getAllTags.data?.getTags?.find((tag) => tag.id == tagToAdd.value);
    tags = [
      ...tags,
      {
        id: tagToAdd.value,
        name: realTag?.name,
        description: realTag?.description
      }
    ];

    loadTagList();
  };

  const removeTag = (label: string) => {
    const idx = tags.findIndex((tag) => tag.name === label);
    tags = [...tags.slice(0, idx), ...tags.slice(idx + 1)];
    loadTagList();
  };

  let inputTag = '';
</script>

<div class="tags">
  {#if !editable}
    {#if tags && tags.length > 0}
      <div class="text-md flex flex-row flex-wrap gap-1">
        {#each tags as tag}
          <TagDisplay {tag} {popupTriggerEvent} />
        {/each}
      </div>
    {/if}
  {:else}
    <div class="mb-2">{$t('mod.tags.title')}</div>

    <div use:popup={popupSettings}>
      <InputChip
        bind:input={inputTag}
        bind:value={tagList}
        on:remove={(tag) => removeTag(tag.detail.chipValue)}
        name="tags"
        chips="variant-filled-primary" />
    </div>

    <div class="card max-h-48 w-max max-w-full overflow-y-auto p-4" tabindex="-1" data-popup="popupAutocomplete">
      <Autocomplete
        bind:input={inputTag}
        options={allTags.filter((tag) => tagList.indexOf(tag.name) < 0)}
        on:selection={(tag) => addTag(tag.detail)} />
    </div>
  {/if}
</div>
