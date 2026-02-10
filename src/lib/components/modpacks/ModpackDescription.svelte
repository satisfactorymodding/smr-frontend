<script lang="ts">
  import { AnnouncementImportance, type Modpack } from '$lib/generated';
  import { markdown } from '$lib/utils/markdown';
  import AnnouncementRow from '../announcements/AnnouncementRow.svelte';
  import { getTranslate, T } from '@tolgee/svelte';
  import ModList from './ModList.svelte';
  import { TabGroup, Tab } from '@skeletonlabs/skeleton';


  export let modpack!: Pick<Modpack, 'full_description' | 'short_description' | 'hidden'>;
  export const { t } = getTranslate();


  $: description = modpack.full_description ? markdown(modpack.full_description) : modpack.short_description;

  let tabSet = 'info';
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
      <TabGroup>
        <div class="flex w-full border-b border-surface-300">
          <div class="flex-1 text-center">
            <Tab bind:group={tabSet} name="info" value="info">
              Modpack Info
            </Tab>
          </div>
          <div class="flex-1 text-center">
            <Tab bind:group={tabSet} name="list" value="list">
              Mod List
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
            List the most important features here with short, pragmatic descriptions
            so readers can scan for what matters (accessibility, theming, integrations).
          {/if}
        </svelte:fragment>
      </TabGroup>
    </section>
    <section>
      
    </section>
  </div>
</div>
