<script lang="ts" context="module">
  import { operationStore, query } from '@urql/svelte';
  import { GetModsDocument, ModFields, Order } from '$lib/generated';
  import { loadWaitForNoFetch } from '$lib/utils/gql';
  import { browser } from '$app/env';

  const modsQ = operationStore(GetModsDocument, {
    offset: 0,
    limit: 4,
    order: Order.Desc,
    orderBy: ModFields.LastVersionDate
  });

  export const load = loadWaitForNoFetch({
    mods: modsQ
  });
</script>

<script lang="ts">
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import FicsitCard from '$lib/components/general/FicsitCard.svelte';
  import ModCard from '$lib/components/mods/ModCard.svelte';
  import Card from '@smui/card';
  import { assets } from '$app/paths';

  export let mods!: typeof modsQ;

  if (browser) {
    query(mods);
  }

  const gridClasses = '3xl:grid-cols-4 lg:grid-cols-2 grid-cols-1';
</script>

<svelte:head>
  <MetaDescriptors description="Satisfactory Mod Repository" title="Home" />
</svelte:head>

<div class="flex flex-col min-h-full">
  <div class="grid xl:grid-cols-2 grid-cols-1 gap-4 flex-1 mb-4 min-h-[40vh]">
    <a href="https://discord.gg/xkVJ73E" rel="noopener" target="_blank">
      <Card class="h-full">
        <div class="relative h-full w-full">
          <div class="modding-banner" />
          <img
            class="absolute centered-logo"
            src={assets + '/images/sf_modding_logo.png'}
            alt="Satisfactory Modding Logo"
          />
        </div>
      </Card>
    </a>
    <a href="https://www.satisfactorygame.com/" rel="noopener" target="_blank">
      <Card class="h-full">
        <div class="relative h-full w-full">
          <div class="css-banner" />
          <img
            class="absolute centered-logo"
            src={assets + '/images/satisfactory_logo_full_color_small.png'}
            alt="Satisfactory Logo"
          />
        </div>
      </Card>
    </a>
  </div>

  {#if $mods.fetching}
    <div class="grid {gridClasses} gap-4">
      {#each Array(4) as _}
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
</div>

<style lang="postcss">
  .modding-banner {
    background-image: url('/images/bg_nologo.jpg');
    filter: blur(8px);
    -webkit-filter: blur(8px);
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .css-banner {
    background-image: url('/images/Satisfactory_KeyArt_1_1024x1024_NoLogo.jpg');
    filter: blur(8px) brightness(0.5);
    -webkit-filter: blur(8px) brightness(0.5);
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .centered-logo {
    top: calc(50% - 5vh);
    left: calc(50% - 25vw);
    width: 50%;
  }

  @media (min-width: 1280px) {
    .centered-logo {
      top: calc(50% - 10vh);
      left: calc(50% - 10vw);
    }
  }
</style>
