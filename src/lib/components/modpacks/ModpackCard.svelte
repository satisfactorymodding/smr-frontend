<script lang="ts">
  import type { Modpack, Maybe, Version } from '$lib/generated';
  import { base } from '$app/paths';
  import FicsitCard from '$lib/components/general/FicsitCard.svelte';
//   import { installMod } from '$lib/stores/launcher';
  import { prettyNumber } from '$lib/utils/formatting';
//   import OutdatedBanner from '$lib/components/mods/compatibility/OutdatedBanner.svelte';
//   import CompatibilityButton from '$lib/components/mods/compatibility/CompatibilityButton.svelte';
  import TagList from '$lib/components/utils/TagList.svelte';

  export let modpack: Pick<
    Modpack,
    | 'id'
    | 'name'
    | 'logo'
    | 'views'
    | 'installs'
    | 'short_description'
    | 'tags'
    | 'logo_thumbhash'>
</script>

<FicsitCard
  name={modpack.name}
  link={base + '/modpack/' + modpack.id}
  logo={modpack.logo}
  thumbhash={modpack.logo_thumbhash}
  description={modpack.short_description}>
  <div slot="stats" class="flex flex-row items-center gap-2">
    <span><span class="material-icons mr-1 align-middle text-sm">visibility</span>{prettyNumber(modpack.views)}</span>
    <span><span class="material-icons mr-1 align-middle text-sm">download</span>{prettyNumber(modpack.installs)}</span>
    <!-- <CompatibilityButton compatibility={mod.compatibility} /> -->
  </div>
  <div slot="tags">
    <TagList tags={modpack.tags} />
  </div>
  <svelte:fragment slot="actions">
    <!-- {#if installable}
      <button class="variant-soft-surface btn btn-sm" title="Install" on:click={() => installMod(mod.mod_reference)}>
        <span class="material-icons">download</span>
      </button>
    {/if} -->
  </svelte:fragment>
  <!-- <div slot="outer">
    <OutdatedBanner compatibility={mod.compatibility} />
  </div> -->
</FicsitCard>
