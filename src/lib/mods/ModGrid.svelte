<script lang="ts">
  import {operationStore, query} from '@urql/svelte';
  import {GetModsDocument} from '../../generated';
  import ModCard from "./ModCard.svelte";
  import PageControls from "../utils/PageControls.svelte";
  import {writable} from "svelte/store";

  // TODO Selectable
  const perPage = 20;

  const mods = operationStore(
    GetModsDocument,
    {offset: 0, limit: perPage}
  );

  const page = writable(1);
  let totalMods: number;

  page.subscribe(p => $mods.variables.offset = (p - 1) * perPage);

  $: totalMods = $mods?.data?.getMods?.count;

  query(mods);
</script>

{#if totalMods}
  <div class="mb-5 ml-auto flex justify-end">
    <PageControls totalPages={Math.ceil(totalMods / perPage)} currentPage={page}/>
  </div>
{/if}

{#if $mods.fetching}
  <p>Loading...</p>
{:else if $mods.error}
  <p>Oh no... {$mods.error.message}</p>
{:else}
  <div class="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4">
    {#each $mods.data.getMods.mods as mod}
      <ModCard mod="{mod}"/>
    {/each}
  </div>
{/if}

{#if totalMods}
  <div class="mt-5 ml-auto flex justify-end">
    <PageControls totalPages={Math.ceil(totalMods / perPage)} currentPage={page}/>
  </div>
{/if}
