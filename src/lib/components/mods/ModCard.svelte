<script lang="ts">
  import type { Mod, Maybe, Version } from '$lib/generated';
  import { base } from '$app/paths';
  import IconButton, { Icon } from '@smui/icon-button';
  import FicsitCard from '$lib/components/general/FicsitCard.svelte';
  import { installMod } from '$lib/stores/launcher';
  import { modStatus } from '$lib/utils/mod';

  export let mod: Pick<Mod, 'id' | 'mod_reference' | 'name' | 'logo' | 'views' | 'downloads' | 'short_description'> & {
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
    <span><Icon class="material-icons align-middle text-sm">visibility</Icon>{mod.views}</span>
    <span><Icon class="material-icons align-middle text-sm">download</Icon>{mod.downloads}</span>
  </div>
  <div slot="actions">
    {#if installable}
      <IconButton class="material-icons" title="Install" on:click={() => installMod(mod.mod_reference)}>
        download
      </IconButton>
    {/if}
  </div>
  <div slot="outer">
    {#if modStatus(mod.latestVersions) === 'own-risk'}
      <div class="mod-own-risk">
        <div class="mod-inset" />
        <div class="mod-stripe">USE AT YOUR OWN RISK</div>
      </div>
    {:else if modStatus(mod.latestVersions) === 'outdated'}
      <div class="mod-outdated">
        <div class="mod-inset" />
        <div class="mod-stripe">OUTDATED</div>
      </div>
    {/if}
  </div>
</FicsitCard>
