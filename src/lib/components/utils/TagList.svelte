<script lang="ts">
  import { GetTagsDocument } from '$lib/generated/graphql';
  import type { Tag } from '$lib/generated/graphql';
  import { queryStore, getContextClient } from '@urql/svelte';
  import TagDisplay from './TagDisplay.svelte';
  import { getTranslate } from '@tolgee/svelte';
  import { Combobox, Portal, type ComboboxRootProps, useListCollection } from '@skeletonlabs/skeleton-svelte';

  export const { t } = getTranslate();

  const client = getContextClient();

  const getAllTags = queryStore({
    query: GetTagsDocument,
    client,
    variables: {
      limit: 100
    }
  });

  interface Props {
    tags?: Tag[];
    editable?: boolean;
  }

  let { tags = $bindable([]), editable = false }: Props = $props();

  let allTags = $derived(
    $getAllTags.data?.getTags?.map((tag) => ({
      label: `${tag.name} - ${tag.description}`,
      value: tag.id,
      name: tag.name
    })) || []
  );

  const addTag = (id: string) => {
    const realTag = $getAllTags.data?.getTags?.find((tag) => tag.id == id);
    tags = [
      ...tags,
      {
        id,
        name: realTag?.name,
        description: realTag?.description
      }
    ];
  };

  const removeTag = (id: string) => {
    const idx = tags.findIndex((tag) => tag.id === id);
    tags = [...tags.slice(0, idx), ...tags.slice(idx + 1)];
  };

  const collection = $derived(
    useListCollection({
      items: allTags,
      itemToString: (item) => item.label,
      itemToValue: (item) => item.value
    })
  );

  const onSelect: ComboboxRootProps['onSelect'] = (event) => {
    console.log(event);
    const id = event.itemValue;
    console.log(
      tags,
      id,
      tags.findIndex((tag) => tag.id == id)
    );
    if (tags.findIndex((tag) => tag.id == id) < 0) {
      addTag(id);
    } else {
      removeTag(id);
    }
  };

  let inputValue = $state('');
  const onInputValueChange: ComboboxRootProps['onInputValueChange'] = (event) => {
    inputValue = event.inputValue;
  };

  let filteredTags = $derived(allTags.filter((item) => item.label.toLowerCase().includes(inputValue)));
</script>

<div class="tags">
  {#if !editable}
    {#if tags && tags.length > 0}
      <div class="text-md flex flex-row flex-wrap gap-1">
        {#each tags as tag (tag.id)}
          <TagDisplay {tag} />
        {/each}
      </div>
    {/if}
  {:else}
    <div class="mb-2">{$t('mod.tags.title')}</div>

    <div
      class="max-h-48 w-full max-w-full overflow-y-auto card preset-filled-surface-100-900"
      tabindex="-1"
      data-popup="popupAutocomplete">
      <Combobox
        class="w-full"
        placeholder="Search..."
        {collection}
        {onSelect}
        {onInputValueChange}
        value={tags.map((tag) => tag.id)}
        openOnClick={true}
        multiple={true}
        allowCustomValue={false}
        positioning={{ placement: 'top-end' }}>
        <Combobox.Control>
          <Combobox.Input />
          <Combobox.Trigger />
        </Combobox.Control>
        <Portal>
          <Combobox.Positioner class="z-[1]!">
            <Combobox.Content class="max-h-[30vh] overflow-auto">
              {#each filteredTags as item (item.value)}
                <Combobox.Item {item}>
                  <Combobox.ItemText>
                    <span class="text-orange-500">#</span>{item.label}
                  </Combobox.ItemText>
                  <Combobox.ItemIndicator />
                </Combobox.Item>
              {/each}
            </Combobox.Content>
          </Combobox.Positioner>
        </Portal>
      </Combobox>

      <div class="text-md flex flex-row flex-wrap gap-1">
        {#each tags as tag (tag.id)}
          <TagDisplay {tag} />
        {/each}
      </div>
    </div>
  {/if}
</div>
