<script lang="ts">
  import {operationStore, query} from '@urql/svelte';
  import {GetGuidesDocument} from '$lib/generated';
  import GuideCard from "./GuideCard.svelte";
  import PageControls from "$lib/components/utils/PageControls.svelte";
  import {writable} from "svelte/store";
  import FakeCard from "../general/FakeCard.svelte";

  export let colCount: 4 | 5 = 4;

  // TODO Selectable
  const perPage = 40;

  const guides = operationStore(
    GetGuidesDocument,
    {offset: 0, limit: perPage}
  );

  const page = writable(1);
  let totalGuides: number;

  page.subscribe(p => {
    $guides.variables.offset = (p - 1) * perPage;
    $guides.reexecute();
  });

  $: totalGuides = $guides?.data?.getGuides?.count || 0;

  query(guides);

  $: gridClasses = colCount == 4 ?
    '2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1' :
    '2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 grid-cols-1';
</script>

<div class="mb-5 ml-auto flex justify-end">
  <PageControls totalPages={Math.ceil(totalGuides / perPage)} currentPage={page}/>
</div>

{#if $guides.fetching}
  <div class="grid {gridClasses} gap-4">
    {#each Array(perPage) as _}
      <FakeCard/>
    {/each}
  </div>
{:else if $guides.error}
  <p>Oh no... {$guides.error.message}</p>
{:else}
  <div class="grid {gridClasses} gap-4">
    {#each $guides.data.getGuides.guides as guide}
      <GuideCard guide={guide} logo={guide.user.avatar}/>
    {/each}
  </div>
{/if}

<div class="mt-5 ml-auto flex justify-end">
  <PageControls totalPages={Math.ceil(totalGuides / perPage)} currentPage={page}/>
</div>
