<script lang="ts">
  import { queryStore, getContextClient } from '@urql/svelte';
  import { GetModsDocument, GetTagsDocument, ModFields, Order, type Tag } from '$lib/generated';
  import ModCard from './ModCard.svelte';
  import { base } from '$app/paths';
  import { goto } from '$app/navigation';
  import { page as storePage } from '$app/stores';
  import { user } from '$lib/stores/user';
  import FicsitCard from '$lib/components/general/FicsitCard.svelte';
  import { browser } from '$app/environment';
  import { getTranslate } from '@tolgee/svelte';
  import { type PaginationSettings, Paginator } from '@skeletonlabs/skeleton';
  import TagDisplay from '../utils/TagDisplay.svelte';

  export let colCount: 4 | 5 = 4;
  export let newMod = false;
  export let showSearch = false;

  const client = getContextClient();

  let search = (browser && $storePage.url.searchParams.get('q')) || '';

  let order: Order = Order.Desc;
  let orderBy: ModFields = ModFields.LastVersionDate;

  let perPage = 32;
  let page = parseInt((browser && $storePage.url.searchParams.get('p')) || '0', 10) || 0;

  let selectedTags: string[] = [];

  $: mods = queryStore({
    query: GetModsDocument,
    client,
    variables: { offset: page * perPage, limit: perPage, search, order, orderBy, tagIDs: selectedTags.sort() }
  });

  $: allTags = queryStore({
    query: GetTagsDocument,
    client,
    variables: {
      limit: 100
    }
  });

  let totalMods: number;

  let searchField = search;
  let searchDisabled = true;
  let searchButtonClass = 'variant-filled-primary';
  const showPagination: boolean = $mods && !$mods.error && !$mods.fetching;

  let timer: number;
  $: {
    if (searchField.length > 2) {
      searchDisabled = false;
      searchButtonClass = 'variant-filled-primary';
    } else {
      searchDisabled = true;
      searchButtonClass = 'variant-filled-surface';
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (searchField && searchField.length > 2) {
        if ((search === '' || search === null) && searchField !== '' && searchField !== null) {
          orderBy = ModFields.Search;
          page = 0;
        }

        search = searchField;
      } else if (searchField === '' || searchField === null) {
        if (orderBy === ModFields.Search || !orderBy) {
          orderBy = ModFields.LastVersionDate;
        }

        search = null;
      }
    }, 250) as unknown as number;
  }

  $: if (browser) {
    const url = new URL(window.location.origin + window.location.pathname);
    url.searchParams.append('p', page.toString());
    searchField.length > 2 && searchField !== '' && searchField !== null && url.searchParams.append('q', searchField);
    goto(url.toString(), { keepFocus: true });
  }

  $: totalMods = $mods?.data?.getMods?.count || 0;

  $: gridClasses =
    colCount == 4
      ? '3xl:grid-cols-4 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1'
      : '3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1';

  export const { t } = getTranslate();

  $: orderFields = [
    [$t('sort-order.name'), 'name'],
    [$t('sort-order.views'), 'views'],
    [$t('sort-order.downloads'), 'downloads'],
    [$t('sort-order.hotness'), 'hotness'],
    [$t('sort-order.popularity'), 'popularity'],
    [$t('sort-order.created_at'), 'created_at'],
    [$t('sort-order.last_version_date'), 'last_version_date'],
    ...(search !== '' && search !== null ? [[$t('sort-order.search'), 'search']] : [])
  ];

  $: paginationSettings = {
    page: page,
    limit: perPage,
    size: totalMods,
    amounts: [8, 16, 32, 64, 100]
  } satisfies PaginationSettings;

  const toggleTag = (tagId: string) => {
    if (selectedTags.indexOf(tagId) >= 0) {
      const i = selectedTags.indexOf(tagId);
      selectedTags = [...selectedTags.slice(0, i), ...selectedTags.slice(i + 1)];
    } else {
      selectedTags = [...selectedTags, tagId];
    }
  };

  const sortedTags = (tags: Tag[]): Tag[] => tags.toSorted((a, b) => a.name.localeCompare(b.name));

  let tagsOpen = false;
</script>

<div class="mb-5 ml-auto flex flex-col gap-4">
  {#if showSearch}
    <div class="flex grow flex-col items-center justify-center gap-4 sm:px-4">
      <div class="flex grow flex-row flex-wrap items-center justify-center gap-3 sm:px-4">
        <div>
          <button
            type="button"
            class="text-md variant-filled-surface btn btn-sm p-2 pl-4 pr-4"
            class:variant-ghost-primary={tagsOpen}
            title={$t('filter.expand-button-tooltip')}
            on:click={() => (tagsOpen = !tagsOpen)}>
            <span>{$t('filter.expand-button-text')}</span>
          </button>
        </div>
        <div>
          <select bind:value={orderBy} class="select">
            {#each orderFields as orderField}
              <option value={orderField[1]}>{orderField[0]}</option>
            {/each}
          </select>
        </div>
        <div>
          <select bind:value={order} class="select">
            <option value="asc">{$t('ascending')}</option>
            <option value="desc">{$t('descending')}</option>
          </select>
        </div>

        <div class="input-group input-group-divider w-fit grid-cols-[1fr_auto] rounded-container-token">
          <input
            bind:value={searchField}
            class="border-0 bg-transparent p-1.5 ring-0"
            name="search"
            placeholder={$t('search.placeholder-text')} />
          <button class="material-icons {searchButtonClass}" disabled={searchDisabled}>arrow_forward</button>
        </div>
      </div>
      {#if tagsOpen}
        <div class="flex flex-grow flex-row flex-wrap items-center justify-center gap-1 pb-10">
          {#if $allTags.error}
            <p>Oh no... {$allTags.error.message}</p>
          {:else if !$allTags.fetching}
            {#each sortedTags($allTags.data.getTags) as tag}
              <TagDisplay
                {tag}
                popupTriggerEvent="hover"
                asButton={true}
                selected={selectedTags.indexOf(tag.id) >= 0}
                on:click={() => toggleTag(tag.id)} />
            {/each}
          {/if}
        </div>
      {/if}
    </div>
  {/if}

  <div
    class="flex grow flex-row flex-wrap"
    class:justify-between={newMod && $user !== null}
    class:justify-end={!newMod || $user == null}>
    {#if newMod && $user !== null}
      <a class="variant-ghost-primary btn self-end" href="{base}/new-mod">{$t('mods.new')}</a>
    {/if}
    {#if showPagination}
      <div class="self-end">
        <Paginator
          bind:settings={paginationSettings}
          showFirstLastButtons={true}
          showPreviousNextButtons={true}
          on:page={(p) => (page = p.detail)}
          on:amount={(p) => (perPage = p.detail)}
          controlVariant="variant-filled-surface" />
      </div>
    {/if}
  </div>
</div>

{#if $mods.fetching}
  <div class="grid {gridClasses} gap-4">
    {#each Array(perPage) as _}
      <FicsitCard fake />
    {/each}
  </div>
{:else if $mods.error && $mods.error.message.includes("'Search' failed on the 'min' tag")}
  <p>Your search query does not seem valid, please provide more than two characters!</p>
{:else if $mods.error}
  <p>Oh no... {$mods.error.message}</p>
{:else}
  <div class="grid {gridClasses} gap-4">
    {#each $mods.data.getMods.mods as mod}
      <ModCard {mod} />
    {/each}
  </div>
{/if}

{#if showPagination}
  <div class="ml-auto mt-5 flex justify-end">
    <div>
      <Paginator
        bind:settings={paginationSettings}
        showFirstLastButtons={true}
        showPreviousNextButtons={true}
        on:page={(p) => (page = p.detail)}
        on:amount={(p) => (perPage = p.detail)}
        controlVariant="variant-filled-surface" />
    </div>
  </div>
{/if}

<style lang="postcss">
  * :global(.search-paper) {
    display: flex;
    align-items: center;
    flex-grow: 1;
    max-width: 600px;
    height: 48px;
  }

  * :global(.search-paper > *) {
    display: inline-block;
    margin: 0 12px;
  }
</style>
