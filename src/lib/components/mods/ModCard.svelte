<script lang="ts">
  import type { Mod, Maybe, Version } from '$lib/generated';
  import { base } from '$app/paths';
  import FicsitCard from '$lib/components/general/FicsitCard.svelte';
  import { installMod } from '$lib/stores/launcher';
  import { prettyNumber } from '$lib/utils/formatting';
  import OutdatedBanner from '$lib/components/mods/compatibility/OutdatedBanner.svelte';
  import CompatibilityButton from '$lib/components/mods/compatibility/CompatibilityButton.svelte';
  import TagList from '$lib/components/utils/TagList.svelte';

  export let mod: Pick<
    Mod,
    'id' | 'mod_reference' | 'name' | 'logo' | 'views' | 'downloads' | 'short_description' | 'compatibility' | 'tags'
  > & {
    latestVersions: {
      alpha?: Maybe<Pick<Version, 'id' | 'sml_version'>>;
      beta?: Maybe<Pick<Version, 'id' | 'sml_version'>>;
      release?: Maybe<Pick<Version, 'id' | 'sml_version'>>;
    };
  };

  $: installable =
    'latestVersions' in mod ? mod.latestVersions.alpha || mod.latestVersions.beta || mod.latestVersions.release : false;
</script>

<FicsitCard
  name={mod.name}
  link={base + '/mod/' + mod.mod_reference}
  logo={mod.logo}
  description={mod.short_description}>
  <div slot="stats" class="flex flex-row items-center gap-2">
    <span><span class="material-icons mr-1 align-middle text-sm">visibility</span>{prettyNumber(mod.views)}</span>
    <span><span class="material-icons mr-1 align-middle text-sm">download</span>{prettyNumber(mod.downloads)}</span>
    <CompatibilityButton compatibility={mod.compatibility} />
  </div>
  <div slot="tags">
    <TagList tags={mod.tags} />
  </div>
  <svelte:fragment slot="actions">
    {#if installable}
      <button class="variant-soft-surface btn btn-sm" title="Install" on:click={() => installMod(mod.mod_reference)}>
        <span class="material-icons">download</span>
      </button>
    {/if}
  </svelte:fragment>
  <div slot="outer">
    <OutdatedBanner compatibility={mod.compatibility} />
  </div>
</FicsitCard>
