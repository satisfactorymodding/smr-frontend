<script lang="ts">
  import { operationStore, query } from '@urql/svelte';
  import { GetModsDocument } from '$lib/generated';
  import ModCard from './ModCard.svelte';
  import PageControls from '$lib/components/utils/PageControls.svelte';
  import { writable } from 'svelte/store';
  import { base } from '$app/paths';
  import Button from '@smui/button';
  import { Input } from '@smui/textfield';
  import Paper from '@smui/paper';
  import Fab from '@smui/fab';
  import { Icon } from '@smui/common';
  import { goto } from '$app/navigation';
  import { page as storePage } from '$app/stores';

  export let colCount: 4 | 5 = 4;
  export let newMod = false;
  export let showSearch = false;

  let search = $storePage.query.get('q');

  // TODO Selectable
  const perPage = 40;

  const mods = operationStore(GetModsDocument, { offset: 0, limit: perPage, search });

  const page = writable(1);
  let totalMods: number;

  let searchField = search;
  $: {
    $mods.variables.search = search;
    $mods.reexecute();
  }

  let timer: number;
  $: {
    clearTimeout(timer);
    timer = setTimeout(() => {
      search = searchField;
    }, 250) as unknown as number;
  }

  page.subscribe((p) => {
    $mods.variables.offset = (p - 1) * perPage;
    $mods.reexecute();
  });

  $: totalMods = $mods?.data?.getMods?.count || 0;

  query(mods);

  $: gridClasses =
    colCount == 4
      ? '3xl:grid-cols-4 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1'
      : '3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1';

  function handleKeyDown(event: CustomEvent | KeyboardEvent) {
    if ((event as KeyboardEvent).key === 'Enter') {
      goto(base + '/mods?q=' + search);
    }
  }
</script>

<div class="mb-5 ml-auto flex justify-between">
  {#if newMod}
    <Button variant="outlined" href="{base}/new-mod">New Mod</Button>
  {/if}

  {#if showSearch}
    <div class="search-container">
      <Paper class="search-paper" elevation={6}>
        <Icon class="material-icons">search</Icon>
        <Input bind:value={searchField} on:keypress={handleKeyDown} placeholder="Search" class="solo-input" />
      </Paper>
      <Fab on:click={() => goto(base + '/mods?q=' + search)} color="primary" mini class="solo-fab">
        <Icon class="material-icons">arrow_forward</Icon>
      </Fab>
    </div>
  {/if}

  <div>
    <PageControls totalPages={Math.ceil(totalMods / perPage)} currentPage={page} />
  </div>
</div>

{#if $mods.fetching}
  <p>Loading...</p>
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
    <PageControls totalPages={Math.ceil(totalMods / perPage)} currentPage={page} />
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
    margin: 0 12px;
    padding: 0 12px;
    height: 48px;
  }

  * :global(.search-paper > *) {
    display: inline-block;
    margin: 0 12px;
  }
</style>
