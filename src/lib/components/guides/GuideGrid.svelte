<script lang="ts">
  import { queryStore, getContextClient } from '@urql/svelte';
  import { GetGuidesDocument } from '$lib/generated';
  import GuideCard from './GuideCard.svelte';
  import PageControls from '$lib/components/utils/PageControls.svelte';
  import { base } from '$app/paths';
  import Button from '@smui/button';
  import { user } from '$lib/stores/user';
  import FicsitCard from '$lib/components/general/FicsitCard.svelte';

  export let colCount: 4 | 5 = 4;
  export let newGuide = false;

  const client = getContextClient();

  // TODO Selectable
  const perPage = 40;

  const page = 1;

  $: guides = queryStore({
    query: GetGuidesDocument,
    client,
    variables: { offset: (page - 1) * perPage, limit: perPage }
  });

  let totalGuides: number;
  $: totalGuides = $guides?.data?.getGuides?.count || 0;

  $: gridClasses =
    colCount == 4
      ? '3xl:grid-cols-4 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1'
      : '3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1';
</script>

<div class="mb-5 ml-auto flex justify-between">
  {#if newGuide && $user !== null}
    <Button variant="outlined" href="{base}/new-guide">New Guide</Button>
  {/if}

  <div>
    <PageControls totalPages={Math.ceil(totalGuides / perPage)} bind:currentPage={page} />
  </div>
</div>

{#if $guides.fetching}
  <div class="grid {gridClasses} gap-4">
    {#each Array(perPage) as _}
      <FicsitCard fake />
    {/each}
  </div>
{:else if $guides.error}
  <p>Oh no... {$guides.error.message}</p>
{:else}
  <div class="grid {gridClasses} gap-4">
    {#each $guides.data.getGuides.guides as guide}
      <GuideCard {guide} logo={guide.user.avatar} />
    {/each}
  </div>
{/if}

<div class="mt-5 ml-auto flex justify-end">
  <div>
    <PageControls totalPages={Math.ceil(totalGuides / perPage)} bind:currentPage={page} />
  </div>
</div>
