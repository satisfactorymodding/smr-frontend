<script lang="ts" context="module">
  import { operationStore, query } from '@urql/svelte';
  import { GetModsDocument } from '$lib/generated';
  import { loadWaitForNoFetch } from '$lib/utils/gql';
  import { browser } from '$app/env';

  const modsQ = operationStore(GetModsDocument, { offset: 0, limit: 20 });

  export const load = loadWaitForNoFetch({
    mods: modsQ
  });
</script>

<script lang="ts">
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  export let mods!: typeof modsQ;

  if (browser) {
    query(mods);
  }
</script>

<svelte:head>
  <MetaDescriptors description="Satisfactory Mod Repository" title="Home" />
</svelte:head>

Hello World
