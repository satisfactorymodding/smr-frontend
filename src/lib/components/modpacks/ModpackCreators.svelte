<script lang="ts">
  // import type { User, UserMod } from '$lib/generated';
  // import { assets, base } from '$app/paths';
  import { getTranslate } from '@tolgee/svelte';
  import ModpackAuthor from './ModpackAuthor.svelte';
  import { getContextClient, queryStore } from '@urql/svelte';
  import { GetModDocument } from '$lib/generated';
  import { derived } from 'svelte/store';

  export let creator: string;
  export let remix: string;
  export let modReferences: string[] = [];

  const client = getContextClient();

  $: mods = modReferences.map((modID) =>
    queryStore({
      query: GetModDocument,
      client,
      variables: { mod: modID },
      requestPolicy: 'network-only'
    })
  );

  $: modResultsStore = derived(mods, ($results) => $results, []);

  $: authors = $modResultsStore.map((r) => r?.data?.mod?.authors ?? []).flat();

  $: creatorCounts = (() => {
    const counts: Record<string, number> = {};

    for (const author of authors) {
      if (author?.role === 'creator') {
        const id = author.user_id;
        counts[id] = (counts[id] ?? 0) + 1;
      }
    }

    return counts;
  })();

  $: creatorCountsList = Object.entries(creatorCounts)
    .map(([userId, count]) => ({ userId, count }))
    .sort((a, b) => b.count - a.count);

  $: console.log(creatorCounts);

  export const { t } = getTranslate();
</script>

<div class="card p-4">
  <section>
    <div class="grid grid-flow-row gap-y-2">
      {#if remix}
        <h3 class="my-4 text-2xl font-bold">{$t('modpack.remixed.creators')}</h3>
      {:else}
        <h3 class="my-4 text-2xl font-bold">{$t('modpack.original.creators')}</h3>
      {/if}

      <div class="grid auto-rows-min gap-y-4 text-lg">
        {#if remix}
          <ModpackAuthor {creator} role={$t('modpack.remixed.remix-creator')}></ModpackAuthor>
          <ModpackAuthor creator={remix} role={$t('modpack.remixed.original-creator')}></ModpackAuthor>
        {:else}
          <ModpackAuthor {creator} role={$t('modpack.original.original-creator')}></ModpackAuthor>
        {/if}

        <hr />

        <h3 class="mb-2 mt-1 text-2xl font-bold">{$t('modpack.mod.authors')}</h3>
        <div class="max-h-[300px] overflow-y-auto">
          <div class="grid gap-y-4">
            {#each creatorCountsList as author}
                <ModpackAuthor
                  creator={author.userId.toString()}
                  role={$t('modpack.mod-creator', { count: author.count })}></ModpackAuthor>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
