<script lang="ts">
  import type { Mod, Maybe, Version } from '$lib/generated';
  import { base } from '$app/paths';
  import IconButton, { Icon } from '@smui/icon-button';
  import FicsitCard from '$lib/components/general/FicsitCard.svelte';
  import { installMod } from '$lib/stores/launcher';

  export let mod: Pick<Mod, 'id' | 'name' | 'logo' | 'views' | 'downloads' | 'short_description'> & {
    latestVersions: {
      alpha?: Maybe<Pick<Version, 'id'>>;
      beta?: Maybe<Pick<Version, 'id'>>;
      release?: Maybe<Pick<Version, 'id'>>;
    };
  };

  $: installable =
    'latestVersions' in mod ? mod.latestVersions.alpha || mod.latestVersions.beta || mod.latestVersions.release : false;
</script>

<FicsitCard name={mod.name} link={base + '/mod/' + mod.id} logo={mod.logo} description={mod.short_description}>
  <div slot="stats">
    <span><Icon class="material-icons align-middle text-sm">visibility</Icon>{mod.views}</span>
    <span><Icon class="material-icons align-middle text-sm">download</Icon>{mod.downloads}</span>
  </div>
  <div slot="actions">
    {#if installable}
      <IconButton class="material-icons" title="Install" on:click={() => installMod(mod.id)}>download</IconButton>
    {/if}
  </div>
</FicsitCard>
