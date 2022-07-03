<script lang="ts">
  import type { Mod, Maybe, Version } from '$lib/generated';
  import { base } from '$app/paths';
  import IconButton, { Icon } from '@smui/icon-button';
  import FicsitCard from '$lib/components/general/FicsitCard.svelte';
  import { installMod } from '$lib/stores/launcher';
  import { prettyNumber } from '$lib/utils/formatting';
  import OutdatedBanner from '$lib/components/mods/compatibility/OutdatedBanner.svelte';
  import CompatibilityButton from '$lib/components/mods/compatibility/CompatibilityButton.svelte';

  export let mod: Pick<
    Mod,
    'id' | 'mod_reference' | 'name' | 'logo' | 'views' | 'downloads' | 'short_description' | 'compatibility'
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
  description={mod.short_description}
>
  <div slot="stats">
    <span><Icon class="material-icons align-middle text-sm mr-1">visibility</Icon>{prettyNumber(mod.views)}</span>
    <span><Icon class="material-icons align-middle text-sm mr-1">download</Icon>{prettyNumber(mod.downloads)}</span>
    <CompatibilityButton compatibility={mod.compatibility} />
  </div>
  <div slot="actions">
    {#if installable}
      <IconButton class="material-icons" title="Install" on:click={() => installMod(mod.mod_reference)}>
        download
      </IconButton>
    {/if}
  </div>
  <div slot="outer">
    <OutdatedBanner compatibility={mod.compatibility} />
  </div>
</FicsitCard>
