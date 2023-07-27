<script lang="ts">
  import { queryStore, getContextClient } from '@urql/svelte';
  import { GetModsDocument, ModFields, Order } from '$lib/generated';
  import ModCard from './ModCard.svelte';
  import PageControls from '$lib/components/utils/PageControls.svelte';
  import { base } from '$app/paths';
  import Button from '@smui/button';
  import { Input } from '@smui/textfield';
  import Paper from '@smui/paper';
  import Fab from '@smui/fab';
  import { Icon } from '@smui/common';
  import { goto } from '$app/navigation';
  import { page as storePage, navigating } from '$app/stores';
  import { user } from '$lib/stores/user';
  import FicsitCard from '$lib/components/general/FicsitCard.svelte';
  import Select, { Option } from '@smui/select';
  import { browser } from '$app/environment';

  export let colCount: 4 | 5 = 4;
  export let newMod = false;
  export let showSearch = false;

  const client = getContextClient();

  let search = $storePage.url.searchParams.get('q');

  // TODO Selectable
  const perPage = 40;
  let order: Order = Order.Desc;
  let orderBy: ModFields = ModFields.LastVersionDate;

  if (search) {
    orderBy = ModFields.Search;
  }

  let page = parseInt($storePage.url.searchParams.get('p'), 10) || 1;

  $: mods = queryStore({
    query: GetModsDocument,
    client,
    variables: { offset: (page - 1) * perPage, limit: perPage, search, order, orderBy }
  });

  let totalMods = 0;

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

  let urlSearch = searchField;

  $: if ($navigating && $navigating.type !== 'goto') {
    searchField = $storePage.url.searchParams.get('q');
    page = parseInt($storePage.url.searchParams.get('p'), 10) || 1;
    urlSearch = searchField;
  }

  const updateUrl = () => {
    if (browser && !$navigating) {
      const url = new URL(window.location.origin + window.location.pathname);
      url.searchParams.append('p', page.toString());
      urlSearch !== '' && urlSearch !== null && url.searchParams.append('q', urlSearch);
      goto(url.toString(), { keepFocus: true });
    }
  };

  $: {
    page;
    urlSearch;
    updateUrl();
  }

  const handleKeyDown = (event: CustomEvent | KeyboardEvent) => {
    if ((event as KeyboardEvent).key === 'Enter') {
      urlSearch = searchField;
    }
  };

  $: if ($mods?.data?.getMods?.count) {
    totalMods = $mods.data.getMods.count;
  }

  $: gridClasses =
    colCount == 4
      ? '3xl:grid-cols-4 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1'
      : '3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1';

  $: orderFields = [
    ['Name', 'name'],
    ['Views', 'views'],
    ['Downloads', 'downloads'],
    ['Hotness (Views)', 'hotness'],
    ['Popularity (Downloads)', 'popularity'],
    ['Creation Date', 'created_at'],
    ['Last Version', 'last_version_date'],
    // Hide the search option if a search string is not set.
    // The component must still exist, otherwise Select will set orderBy to null/undefined, because the selectedIndex would be -1.
    ['Search', 'search', search === '' || search === null]
  ];
</script>

<div class="ml-auto flex flex-wrap justify-between items-center mb-5">
  {#if newMod && $user !== null}
    <Button variant="outlined" href="{base}/new-mod">New Mod</Button>
  {/if}

  {#if showSearch}
    <div class="search-container flex flex-wrap sm:px-4">
      <div class="mr-3">
        <Select bind:value={orderBy} label="Order By">
          {#each orderFields as orderField}
            <!-- Using style instead of tailwind because Option unnecessarily consumes the class prop without exposing another one for the inner item -->
            <Option value={orderField[1]} style={orderField[2] ? 'display: none;' : ''}>{orderField[0]}</Option>
          {/each}
        </Select>
      </div>
      <div class="mr-3">
        <Select bind:value={order} label="Order">
          <Option value="asc">Ascending</Option>
          <Option value="desc">Descending</Option>
        </Select>
      </div>
      <Paper class="search-paper mr-3" elevation={6}>
        <Icon class="material-icons">search</Icon>
        <Input bind:value={searchField} on:keypress={handleKeyDown} placeholder="Search" />
      </Paper>
      <Fab on:click={() => (urlSearch = searchField)} color="primary" mini class="solo-fab" aria-label="Search">
        <Icon class="material-icons">arrow_forward</Icon>
      </Fab>
    </div>
  {/if}

  <div>
    <PageControls totalPages={Math.ceil(totalMods / perPage)} bind:currentPage={page} />
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
    <PageControls totalPages={Math.ceil(totalMods / perPage)} bind:currentPage={page} />
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
