<script lang="ts">
  import { AnnouncementImportance, type Modpack } from '$lib/generated';
  import { markdown } from '$lib/utils/markdown';
  import AnnouncementRow from '../announcements/AnnouncementRow.svelte';
  import { getTranslate, T } from '@tolgee/svelte';
  import ModList from './ModList.svelte';


  export let modpack!: Pick<Modpack, 'full_description' | 'short_description' | 'hidden'>;

  let modList = false;

  export const { t } = getTranslate();


  $: description = modpack.full_description ? markdown(modpack.full_description) : modpack.short_description;
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
        <button class="btn variant-ghost-primary" on:click={() => modList = false}><span>{$t('modpack.show-info')}</span></button>
        <button class="btn variant-ghost-primary" on:click={() => modList = true}><span>{$t('modpack.show-mod-list')}</span></button>
    </section>
    <hr class="my-2" />
    <section>
      <div class="markdown-content break-words">
        {#if !modList}
            {#await description then descriptionRendered}
            <!-- eslint-disable -->
            <p>{@html descriptionRendered}</p>
            {/await}
        {:else}
            <!-- <ModList modpack={modpack} /> -->
        {/if}
      </div>
    </section>
  </div>
</div>
