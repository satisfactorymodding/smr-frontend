<script lang="ts">
  import { queryStore, getContextClient } from '@urql/svelte';
  import { GetModsDocument, ModFields, Order } from '$lib/generated';
  import ModCard from './ModCard.svelte';
  import { base } from '$app/paths';
  import { goto } from '$app/navigation';
  import { page as storePage } from '$app/stores';
  import { user } from '$lib/stores/user';
  import FicsitCard from '$lib/components/general/FicsitCard.svelte';
  import { browser } from '$app/environment';
  import { getTranslate } from '@tolgee/svelte';
  import { type PaginationSettings, Paginator } from '@skeletonlabs/skeleton';

  export let colCount: 4 | 5 = 4;
  export let newMod = false;
  export let showSearch = false;

  const client = getContextClient();

  let search = $storePage.url.searchParams.get('q');

  let order: Order = Order.Desc;
  let orderBy: ModFields = ModFields.LastVersionDate;

  let perPage = 32;
  let page = parseInt($storePage.url.searchParams.get('p'), 10) || 1;

  $: mods = queryStore({
    query: GetModsDocument,
    client,
    variables: { offset: (page - 1) * perPage, limit: perPage, search, order, orderBy }
  });

  let totalMods: number;

  let searchField = search;

  let timer: number;
  $: {
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (searchField && searchField.length > 2) {
        if ((search === '' || search === null) && searchField !== '' && searchField !== null) {
          orderBy = ModFields.Search;
          page = 1;
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
    searchField !== '' && searchField !== null && url.searchParams.append('q', searchField);
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
    size: $mods?.data?.getMods?.count || 0,
    amounts: [8, 16, 32, 64, 100]
  } satisfies PaginationSettings;
</script>

<div class="ml-auto flex flex-wrap justify-between items-center mb-5">
  {#if newMod && $user !== null}
    <a class="btn variant-ghost-primary" href="{base}/new-mod">{$t('mods.new')}</a>
  {/if}

  {#if showSearch}
    <div class="search-container flex flex-wrap flex-row sm:px-4">
      <div class="mr-3">
        <select bind:value={orderBy} class="select">
          {#each orderFields as orderField}
            <option value={orderField[1]}>{orderField[0]}</option>
          {/each}
        </select>
      </div>
      <div class="mr-3">
        <select bind:value={order} class="select">
          <option value="asc">{$t('ascending')}</option>
          <option value="desc">{$t('descending')}</option>
        </select>
      </div>

      <div class="input-group input-group-divider grid-cols-[1fr_auto] rounded-container-token w-fit">
        <input
          bind:value={searchField}
          class="bg-transparent border-0 ring-0 p-1.5"
          name="search"
          placeholder="Search" />
        <button class="variant-filled-primary material-icons">arrow_forward</button>
      </div>

      <!--      <Paper class="search-paper mr-3" elevation={6}>-->
      <!--        <Icon class="material-icons">search</Icon>-->
      <!--        <Input bind:value={searchField} placeholder="Search" />-->
      <!--      </Paper>-->
      <!--      <Fab on:click={() => goto(base + '/mods?q=' + search)} color="primary" mini class="solo-fab" aria-label="Search">-->
      <!--        <Icon class="material-icons">arrow_forward</Icon>-->
      <!--      </Fab>-->
    </div>
  {/if}

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

{#if $mods.fetching}
  <div class="grid {gridClasses} gap-4">
    {#each Array(perPage) as _}
      <FicsitCard fake />
    {/each}
  </div>
{:else if $mods.error}
  <p>Oh no... {$mods.error.message}</p>
{:else}
  <div class="grid {gridClasses} gap-4">
    {#each $mods.data.getMods.mods as mod}
      <ModCard {mod} />
    {/each}
  </div>
{/if}

<div class="mt-5 ml-auto flex justify-end">
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

<style>
  .search-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }

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
