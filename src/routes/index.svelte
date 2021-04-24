<script lang="ts">
  import alertIcon from '@iconify/icons-mdi/alert.js';
  import Icon from "../lib/utils/iconify/Icon.svelte";
  import ModCard from "../lib/mods/ModCard.svelte";
  import {GetModsDocument} from "../generated";
  import {operationStore, query} from "@urql/svelte";
  import {assets} from '$app/paths';

  const featuredMods = operationStore(
    GetModsDocument,
    {offset: 0, limit: 5}
  );

  query(featuredMods);

  const mods = operationStore(
    GetModsDocument,
    {offset: 0, limit: 100}
  );

  query(mods);
</script>

<div class="h-screen bg-center bg-cover fold grid"
     style={'background-image: url("' + assets + '/assets/header_bg_image.png")'}>
  <div class="menu grid bg-black bg-opacity-70 py-2.5 px-4 items-center">
    <div class="grid grid-flow-col justify-self-center items-center">
      <span class="border-r-2 border-white px-4">Link 1</span>
      <span class="border-r-2 border-white px-4">Link 2</span>
      <span class="px-4">Link 3</span>
    </div>
    <div class="log-in justify-self-center">Log in / register</div>
  </div>
  <div class="text-center self-center">
    <div class="header text-6xl">
      <span class="text-lime-500">SMR</span>
      <span>Satisfactory Mod Repository</span>
    </div>
    <div class="under-header text-3xl">
      <span>The unofficially official source for Satisfactory mods</span>
    </div>
    <div class="alert mt-10 bg-red-700 inline-block mx-auto p-4 shadow-md">
      <span><Icon icon={alertIcon} inline={true} class="inline-block"/></span>
      <span>Mods do not currently work on Experimental (EXP) / Update 4 - More info</span>
    </div>
  </div>
  <div class="w-5/6 justify-self-center">
    <div class="grid grid-flow-col justify-around h-14 mb-3 bg-black bg-opacity-70">
      <div>Link 1</div>
      <div>Link 2</div>
      <div>Link 3</div>
    </div>
    <div class="h-14 bg-black bg-opacity-70">
      <span>Type here to search, you can use #tags or !awards</span>
    </div>
  </div>
  <div class="grid">
    <div class="py-8 bg-black bg-opacity-70">
      <div class="w-5/6 mx-auto grid grid-flow-col mb-3">
        <div>
          <span>Featured mods:</span>
          <span class="text-lime-500">Newest</span>
        </div>
        <div class="text-right">
          <span>Browse all</span>
          <span class="text-lime-500">330</span>
          <span>mods</span>
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

<div class="w-full text-center py-6 bg-lime-600 mb-8">
  <span class="text-3xl">Browse all 330 mods</span>
</div>

<div class="grid">
  <div class="w-5/6 mx-auto grid grid-cols-5 gap-4">
    {#if $mods.fetching}
      <!-- TODO Placeholders -->
      <p>Loading...</p>
    {:else if $mods.error}
      <p>Oh no... {$mods.error.message}</p>
    {:else}
      {#each $mods.data.getMods.mods as mod}
        <ModCard mod="{mod}" expanded={false}/>
      {/each}
    {/if}
  </div>
</div>

<style lang="postcss">
  .fold {
    grid-template-rows: 50px auto 150px min-content;
  }

  .menu {
    & > * {
      grid-column-start: 1;
      grid-row-start: 1;
    }

    & .log-in {
      justify-self: right;
    }
  }
</style>
