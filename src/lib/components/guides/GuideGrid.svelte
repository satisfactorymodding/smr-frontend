<script lang="ts">
  import { queryStore, getContextClient } from '@urql/svelte';
  import { GetGuidesDocument } from '$lib/generated';
  import GuideCard from './GuideCard.svelte';
  import { base } from '$app/paths';
  import { user } from '$lib/stores/user';
  import FicsitCard from '$lib/components/general/FicsitCard.svelte';
  import { getTranslate } from '@tolgee/svelte';
  import { type PaginationSettings, Pagination } from '@skeletonlabs/skeleton-svelte';

  interface Props {
    colCount?: 4 | 5;
    newGuide?: boolean;
  }

  let { colCount = 4, newGuide = false }: Props = $props();

  const client = getContextClient();

  let perPage = $state(32);
  let page = $state(0);

  export const { t } = getTranslate();

  let guides = $derived(
    queryStore({
      query: GetGuidesDocument,
      client,
      variables: { offset: page * perPage, limit: perPage }
    })
  );

  let totalGuides = $derived($guides?.data?.getGuides?.count || 0);

  let gridClasses = $derived(
    colCount == 4
      ? '3xl:grid-cols-4 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1'
      : '3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1'
  );

  let paginationSettings = $derived({
    page: page,
    limit: perPage,
    size: totalGuides,
    amounts: [8, 16, 32, 64, 100]
  } satisfies PaginationSettings);
</script>

<div
  class="mb-5 ml-auto flex"
  class:justify-between={newGuide && $user !== null}
  class:justify-end={!newGuide || $user == null}>
  {#if newGuide && $user !== null}
    <a class="preset-tonal-primary border-primary-500 btn border" href="{base}/new-guide">{$t('guides.new')}</a>
  {/if}

  <div>
    <Pagination
      bind:settings={paginationSettings}
      showFirstLastButtons={true}
      showPreviousNextButtons={true}
      on:page={(p) => (page = p.detail)}
      on:amount={(p) => (perPage = p.detail)}
      controlVariant="preset-filled-surface-500" />
  </div>
</div>

{#if $guides.fetching}
  <div class="grid {gridClasses} gap-4">
    {#each Array(perPage) as _}
      <FicsitCard fake />
    {/each}
  </div>
{:else if $guides.error}
  <p>{$t('error.oh-no')} {$guides.error.message}</p>
{:else}
  <div class="grid {gridClasses} gap-4">
    {#each $guides.data.getGuides.guides as guide}
      <GuideCard {guide} logo={guide.user.avatar} />
    {/each}
  </div>
{/if}

<div class="mt-5 ml-auto flex justify-end">
  <div>
    <Pagination
      bind:settings={paginationSettings}
      showFirstLastButtons={true}
      showPreviousNextButtons={true}
      on:page={(p) => (page = p.detail)}
      on:amount={(p) => (perPage = p.detail)}
      controlVariant="preset-filled-surface-500" />
  </div>
</div>
