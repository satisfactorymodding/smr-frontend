<script lang="ts">
  import { AnnouncementImportance, GetModDocument, type Modpack } from '$lib/generated';
  import { markdown } from '$lib/utils/markdown';
  import AnnouncementRow from '../announcements/AnnouncementRow.svelte';
  import { getTranslate } from '@tolgee/svelte';
  import { TabGroup, Tab, Paginator, type PaginationSettings } from '@skeletonlabs/skeleton';
  import { getContextClient, queryStore } from '@urql/svelte';
  import { page as storePage } from '$app/stores';
  import { derived } from 'svelte/store';
  import ModCard from '../mods/ModCard.svelte';
  import { browser } from '$app/environment';
    import { goto } from '$app/navigation';

  export let modpack!: Pick<Modpack, 'full_description' | 'short_description' | 'hidden'>;
  export let modReferences: string[] = [];
  let page = parseInt((browser && $storePage.url.searchParams.get('p')) || '0', 10) || 0;
  let perPage = 32;
  let totalMods: number;
  export const { t } = getTranslate();

  const client = getContextClient();

  $: description = modpack.full_description ? markdown(modpack.full_description) : modpack.short_description;

  $: modsInfo = modReferences.map((modID) =>
    queryStore({
      query: GetModDocument,
      client,
      variables: { mod: modID },
      requestPolicy: 'network-only'
    }))

    $: modResultsStore = derived(modsInfo, ($results) => $results, []);

    $: modsList =
      $modResultsStore
      .map((r) => r?.data?.mod ?? null)
      .filter((m): m is NonNullable<typeof m> => Boolean(m));

    $: mods = modsList;

    $: paginationSettings = {
    page: page,
    limit: perPage,
    size: totalMods,
    amounts: [8, 16, 32, 64, 100]
  } satisfies PaginationSettings;

  $: totalMods = mods.length || 0;

  $: modCreatorMap = (() => {
      const map: Record<string, string> = {};

      for (const result of $modResultsStore) {
        const mod = result?.data?.mod;
        if (!mod) {
          continue
        };

        const creator = mod.authors?.find(a => a.role === "creator");

        if (creator) {
          map[mod.id] = creator.user?.username ?? creator.user_id;
        }
      }

      return map;
    })();


  let tabSet = 'info';

  let cardView = true;
</script>

<div>
  {#if modpack.hidden}
    <div class="p-4">
      <AnnouncementRow
        importance={AnnouncementImportance.Info}
        message="This modpack is hidden, which means it won't display in searches, and the Mod Manager will not display any view/download count or logo for it. A developer could choose to hide their modpack for any number of reasons. Check the modpack page for more information." />
    </div>
  {/if}
  <div class="card h-fit p-4">
    <section class="flex justify-between items-center p-4">
      <TabGroup class="w-full">
        <div class="flex w-full border-b border-surface-300">
          <div class="flex-1 text-center">
            <Tab bind:group={tabSet} name="info" value="info">
              {$t('modpack.show-info')}
            </Tab>
          </div>
          <div class="flex-1 text-center">
            <Tab bind:group={tabSet} name="list" value="list">
              {$t("modpack.show-mod-list")}
            </Tab>
          </div>
        </div>

        <svelte:fragment slot="panel">
          {#if tabSet === 'info'}
            <div class="markdown-content break-words">
              {#await description then descriptionRendered}
                <p>{@html descriptionRendered}</p>
              {/await}
            </div>
          {:else if tabSet === 'list'}
            <div class="flex justify-end items-center gap-4">
              <button class="material-symbols-outlined text-4xl hover:text-orange-400 transition" on:click={() => cardView = true}>grid_view</button>
              <button class="material-symbols-outlined text-4xl hover:text-orange-400 transition" on:click={() => cardView = false}>view_list</button>
            </div>
            {#if cardView}
              <div class="ml-auto mt-5 mb-5 flex justify-end">
                <div>
                  <Paginator
                    bind:settings={paginationSettings}
                    showFirstLastButtons={true}
                    showPreviousNextButtons={true}
                    on:page={(p) => (page = p.detail)}
                    on:amount={(p) => (perPage = p.detail)}
                    controlVariant="variant-filled-surface" />
                </div>
              </div>
              <div class="grid grid gap-6 grid-cols-1 lg:grid-cols-2 gap-4">
                {#each mods as mod}
                  <ModCard {mod} />
                {/each}
              </div>
              <div class="ml-auto mt-5 flex justify-end">
                <div>
                  <Paginator
                    bind:settings={paginationSettings}
                    showFirstLastButtons={true}
                    showPreviousNextButtons={true}
                    on:page={(p) => (page = p.detail)}
                    on:amount={(p) => (perPage = p.detail)}
                    controlVariant="variant-filled-surface" />
                </div>
              </div>
            {:else}
              <div class="max-h-[70vh] overflow-y-auto w-full">
                <table class="w-full text-sm mt-4">
                  <thead class="sticky top-0 z-10 bg-zinc-900 backdrop-blur border-b border-white/10">
                    <tr class="text-left text-white/80">
                      <th class="px-4 py-3 font-semibold">{$t('modpack.list-view.name')}</th>
                      <th class="px-4 py-3 font-semibold">{$t('modpack.list-view.author')}</th>
                      <th class="px-4 py-3 font-semibold">{$t('modpack.list-view.version-constraint')}</th>
                      <th class="px-4 py-3 font-semibold text-right"> </th>
                    </tr>
                  </thead>

                  <tbody class="divide-y divide-white/5">
                    {#each mods as mod}
                      <tr class="hover:bg-white/5">
                        <td class="px-4 py-3 text-white/90">{mod.name}</td>
                        <td class="px-4 py-3 text-white/70">{modCreatorMap[mod.id]}</td>
                        <td class="px-4 py-3 text-white/70">{mod.latestVersions.release.game_version}</td>

                        <td class="px-4 py-3">
                          <div class="flex justify-end gap-3">
                            <button class="min-w-[140px] btn variant-ghost-primary" on:click={() => goto(`/mod/${mod.id}`)}>{$t('modpack.list-view.view-mod')}</button>
                            <button class="min-w-[160px] btn variant-ghost-primary" on:click={() => goto(`/mod/${mod.id}/version/${mod.latestVersions.release.id}`)}>{$t('modpack.list-view.patch-notes')}</button>
                          </div>
                        </td>
                      </tr>
                    {/each}
                  </tbody>
                </table>
              </div>
            {/if}
          {/if}
        </svelte:fragment>
      </TabGroup>
    </section>
  </div>
</div>
