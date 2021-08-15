<script lang="ts">
  import alertIcon from '@iconify/icons-mdi/alert.js';
  import Icon from "@iconify/svelte";
  import ModCard from "$lib/components/mods/ModCard.svelte";
  import {GetModCountDocument, GetModsDocument} from "$lib/generated";
  import {operationStore, query} from "@urql/svelte";
  import {assets, base} from '$app/paths';
  import MenuBar from "$lib/components/general/MenuBar.svelte";
  import SearchBox from "$lib/components/general/SearchBox.svelte";
  import LinksBox from "$lib/components/general/LinksBox.svelte";
  import ModGrid from "$lib/components/mods/ModGrid.svelte";
  import Footer from "$lib/components/general/Footer.svelte";
  import {goto} from '$app/navigation';

  // TODO Fetch from backend
  let alertMessage = '';

  const featuredMods = operationStore(
    GetModsDocument,
    {offset: 0, limit: 5}
  );

  query(featuredMods);

  const mods = operationStore(
    GetModCountDocument
  );

  query(mods);
</script>

<div class="h-screen bg-center bg-cover fold grid"
     style={'background-image: url("' + assets + '/assets/header_bg_image.png")'}>
  <MenuBar/>
  <div class="text-center self-center">
    <div class="header text-6xl">
      <span class="text-lime-500">SMR</span>
      <span>Satisfactory Mod Repository</span>
    </div>
    <div class="under-header text-3xl">
      <span>The unofficially official source for Satisfactory mods</span>
    </div>
    {#if alertMessage !== ''}
      <div class="alert mt-10 bg-red-700 inline-block mx-auto p-4 shadow-md">
        <span><Icon icon={alertIcon} inline={true} class="inline-block"/></span>
        <span>{ alertMessage }</span>
      </div>
    {/if}
  </div>
  <div class="w-5/6 justify-self-center">
    <LinksBox/>
    <SearchBox/>
  </div>
  <div class="grid">
    <div class="py-8 bg-black bg-opacity-70">
      <div class="w-5/6 mx-auto grid grid-flow-col mb-3">
        <div>
          <span>Featured mods:</span>
          <span class="text-lime-500">Newest</span>
        </div>
        <div class="text-right">
          <span class="cursor-pointer" on:click={() => goto(base + '/mods')}>
            <span>Browse all</span>
            {#if $mods.fetching}
              <span class="text-lime-500">...</span>
            {:else if $mods.error}
              <span class="text-lime-500">Oh no... {$mods.error.message}</span>
            {:else}
              <span class="text-lime-500">{ $mods.data.getMods.count }</span>
            {/if}
            <span>mods</span>
          </span>
        </div>
      </div>
      <div class="featured-mods w-5/6 mx-auto grid grid-flow-col gap-4">
        {#if $featuredMods.fetching}
          <!-- TODO Placeholders -->
          <p>Loading...</p>
        {:else if $featuredMods.error}
          <p>Oh no... {$featuredMods.error.message}</p>
        {:else}
          {#each $featuredMods.data.getMods.mods as mod}
            <ModCard mod="{mod}" expanded={true}/>
          {/each}
        {/if}
      </div>
    </div>
  </div>
</div>

<div class="w-full text-center py-6 bg-lime-600 mb-8 cursor-pointer" on:click={() => goto(base + '/mods')}>
  {#if $mods.fetching}
    <span class="text-3xl">Browse all ... mods</span>
  {:else if $mods.error}
    <span class="text-3xl">Oh no... {$mods.error.message}</span>
  {:else}
    <span class="text-3xl">Browse all { $mods.data.getMods.count } mods</span>
  {/if}
</div>

<div class="grid">
  <div class="w-5/6 mx-auto">
    <ModGrid colCount={5}/>
  </div>
</div>

<style lang="postcss">
  .fold {
    grid-template-rows: 50px auto 150px min-content;
  }
</style>

<Footer/>
