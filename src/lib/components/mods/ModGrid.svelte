<script lang="ts">
  import { run } from 'svelte/legacy';

  import { queryStore, getContextClient } from '@urql/svelte';
  import { GetModsDocument, GetTagsDocument, ModFields, Order, type Tag } from '$lib/generated';
  import ModCard from './ModCard.svelte';
  import { base } from '$app/paths';
  import { goto } from '$app/navigation';
  import { page as storePage } from '$app/state';
  import { user } from '$lib/stores/user';
  import FicsitCard from '$lib/components/general/FicsitCard.svelte';
  import { browser } from '$app/environment';
  import { getTranslate } from '@tolgee/svelte';
  import TagDisplay from '../utils/TagDisplay.svelte';
  import Pager from '$lib/components/general/Pager.svelte';

  interface Props {
    colCount?: 4 | 5;
    newMod?: boolean;
    showSearch?: boolean;
  }

  let { colCount = 4, newMod = false, showSearch = false }: Props = $props();

  const client = getContextClient();

  let search = $state((browser && storePage.url.searchParams.get('q')) || '');

  let order: Order = $state(Order.Desc);
  let orderBy: ModFields = $state(ModFields.LastVersionDate);

  let perPage = $state(32);
  let page = $state(parseInt((browser && storePage.url.searchParams.get('p')) || '0', 10) || 0);

  let selectedTags: string[] = $state([]);

  let mods = $derived(
    queryStore({
      query: GetModsDocument,
      client,
      variables: { offset: page * perPage, limit: perPage, search, order, orderBy, tagIDs: selectedTags.sort() }
    })
  );

  let allTags = $derived(
    queryStore({
      query: GetTagsDocument,
      client,
      variables: {
        limit: 100
      }
    })
  );

  let totalMods: number = $derived($mods?.data?.getMods?.count || 0);

  // svelte-ignore state_referenced_locally
  let searchField = $state(search);
  let searchDisabled = $derived(searchField.length < 3);
  let searchButtonClass = $derived(searchDisabled ? 'preset-filled-surface-500' : 'preset-filled-primary-500');

  let timer: number = $state();
  run(() => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (searchField && !searchDisabled) {
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
  });

  run(() => {
    if (browser) {
      const url = new URL(window.location.origin + window.location.pathname);
      url.searchParams.append('p', page.toString());
      if (!searchDisabled && searchField !== '' && searchField !== null) {
        url.searchParams.append('q', searchField);
      }
      goto(url.toString(), { keepFocus: true });
    }
  });

  let showPagination = $derived(
    ($mods && $mods.fetching) || ($mods && !$mods.fetching && totalMods > 0 && !$mods.error)
  );

  let gridClasses = $derived(
    colCount == 4
      ? '3xl:grid-cols-4 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1'
      : '3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1'
  );

  export const { t } = getTranslate();

  let orderFields = $derived([
    [$t('sort-order.name'), 'name'],
    [$t('sort-order.views'), 'views'],
    [$t('sort-order.downloads'), 'downloads'],
    [$t('sort-order.hotness'), 'hotness'],
    [$t('sort-order.popularity'), 'popularity'],
    [$t('sort-order.created_at'), 'created_at'],
    [$t('sort-order.last_version_date'), 'last_version_date'],
    ...(search !== '' && search !== null ? [[$t('sort-order.search'), 'search']] : [])
  ]);

  const toggleTag = (tagId: string) => {
    if (selectedTags.indexOf(tagId) >= 0) {
      const i = selectedTags.indexOf(tagId);
      selectedTags = [...selectedTags.slice(0, i), ...selectedTags.slice(i + 1)];
    } else {
      selectedTags = [...selectedTags, tagId];
    }
  };

  const sortedTags = (tags: Tag[]): Tag[] => tags.toSorted((a, b) => a.name.localeCompare(b.name));

  let tagsOpen = $state(false);
</script>

<div class="mb-5 ml-auto flex flex-col gap-4">
  {#if showSearch}
    <div class="flex grow flex-col items-center justify-center gap-4 sm:px-4">
      <div class="flex grow flex-row flex-wrap items-center justify-center gap-3 sm:px-4">
        <div>
          <button
            type="button"
            class="text-md btn preset-filled-surface-500 p-2 btn-sm pr-4 pl-4"
            class:preset-tonal-primary={tagsOpen}
            title={$t('filter.expand-button-tooltip')}
            onclick={() => (tagsOpen = !tagsOpen)}>
            <span>{$t('filter.expand-button-text')}</span>
          </button>
        </div>
        <div>
          <select bind:value={orderBy} class="select">
            {#each orderFields as orderField (orderField[1])}
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

        <div class="input-group-divider input-group w-fit grid-cols-[1fr_auto] rounded-container">
          <input
            bind:value={searchField}
            class="border-0 bg-transparent p-1.5 ring-0"
            name="search"
            placeholder={$t('search.placeholder-text')} />
          <button
            class="material-icons {searchButtonClass}"
            disabled={searchDisabled}
            title={searchDisabled ? $t('search.disabled') : ''}>arrow_forward</button>
        </div>
      </div>
      {#if tagsOpen}
        <div class="flex flex-grow flex-row flex-wrap items-center justify-center gap-1 pb-10">
          {#if $allTags.error}
            <p>Oh no... {$allTags.error.message}</p>
          {:else if !$allTags.fetching}
            {#each sortedTags($allTags.data.getTags) as tag (tag.id)}
              <TagDisplay {tag} selected={selectedTags.indexOf(tag.id) >= 0} onclick={() => toggleTag(tag.id)} />
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
      <a class="btn self-end border border-primary-500 preset-tonal-primary" href="{base}/new-mod">{$t('mods.new')}</a>
    {/if}
    {#if showPagination}
      <div class="self-end">
        <Pager bind:page bind:perPage total={totalMods} />
      </div>
    {/if}
  </div>
</div>

{#if $mods.fetching}
  <div class="grid {gridClasses} gap-4">
    {#each Array(perPage) as _, i (i)}
      <FicsitCard fake />
    {/each}
  </div>
{:else if $mods.error && $mods.error.message.includes("'Search' failed on the 'min' tag")}
  {$t('search.failed.query-too-short')}
{:else if $mods.error}
  <p>Oh no... {$mods.error.message}</p>
{:else if totalMods == 0}
  {$t('search.results.empty')}
{:else}
  <div class="grid {gridClasses} gap-4">
    {#each $mods.data.getMods.mods as mod (mod.id)}
      <ModCard {mod} />
    {/each}
  </div>
{/if}

{#if showPagination}
  <div class="mt-5 ml-auto flex justify-end">
    <div>
      <Pager bind:page bind:perPage total={totalMods} />
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
