<script lang="ts">
  import {operationStore, query} from '@urql/svelte';
  import {GetModsDocument} from '$lib/generated';
  import ModCard from "./ModCard.svelte";
  import PageControls from "$lib/components/utils/PageControls.svelte";
  import {writable} from "svelte/store";
  import FakeCard from "../general/FakeCard.svelte";

  export let colCount: 4 | 5 = 4;

  // TODO Selectable
  const perPage = 40;

  const mods = operationStore(
    GetModsDocument,
    {offset: 0, limit: perPage}
  );

  const page = writable(1);
  let totalMods: number;

  page.subscribe(p => {
    $mods.variables.offset = (p - 1) * perPage;
    $mods.reexecute();
  });

  $: totalMods = $mods?.data?.getMods?.count || 0;

  query(mods);

  $: gridClasses = colCount == 4 ?
    '2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1' :
    '2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 grid-cols-1';
</script>

<div class="mb-5 ml-auto flex justify-end">
  <PageControls totalPages={Math.ceil(totalMods / perPage)} currentPage={page}/>
</div>

{#if $mods.fetching}
  <div class="grid {gridClasses} gap-4">
    {#each Array(perPage) as _}
      <FakeCard/>
    {/each}
  </div>
{:else if $mods.error}
  <p>Oh no... {$mods.error.message}</p>
{:else}
  <div class="grid {gridClasses} gap-4">
    {#each $mods.data.getMods.mods as mod}
      <ModCard mod="{mod}"/>
    {/each}
  </div>
{/if}

<div class="mt-5 ml-auto flex justify-end">
  <PageControls totalPages={Math.ceil(totalMods / perPage)} currentPage={page}/>
</div>
