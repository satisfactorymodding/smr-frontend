<script lang="ts">
  import { queryStore, getContextClient } from '@urql/svelte';
  import { GetGuidesDocument } from '$lib/generated';
  import GuideCard from './GuideCard.svelte';
  import { base } from '$app/paths';
  import { user } from '$lib/stores/user';
  import FicsitCard from '$lib/components/general/FicsitCard.svelte';
  import { getTranslate } from '@tolgee/svelte';
  import Pager from '$lib/components/general/Pager.svelte';

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
</script>

<div
  class="mb-5 ml-auto flex"
  class:justify-between={newGuide && $user !== null}
  class:justify-end={!newGuide || $user == null}>
  {#if newGuide && $user !== null}
    <a class="btn border border-primary-500 preset-tonal-primary" href="{base}/new-guide">{$t('guides.new')}</a>
  {/if}

  <div>
    <Pager bind:page bind:perPage total={totalGuides} />
  </div>
</div>

{#if $guides.fetching}
  <div class="grid {gridClasses} gap-4">
    {#each Array(perPage) as _, i (i)}
      <FicsitCard fake />
    {/each}
  </div>
{:else if $guides.error}
  <p>{$t('error.oh-no')} {$guides.error.message}</p>
{:else}
  <div class="grid {gridClasses} gap-4">
    {#each $guides.data.getGuides.guides as guide (guide.id)}
      <GuideCard {guide} logo={guide.user.avatar} />
    {/each}
  </div>
{/if}

<div class="mt-5 ml-auto flex justify-end">
  <div>
    <Pager bind:page bind:perPage total={totalGuides} />
  </div>
</div>
