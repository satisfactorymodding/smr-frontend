<script lang="ts">
  import { assets } from '$app/paths';
  import { modStatus } from '$lib/utils/mod';
  import type { Maybe, Version } from '$lib/generated';

  export let modLogo!: string;
  export let modName!: string;
  export let latestVersions:
    | {
        alpha?: Maybe<Pick<Version, 'sml_version'>>;
        beta?: Maybe<Pick<Version, 'sml_version'>>;
        release?: Maybe<Pick<Version, 'sml_version'>>;
      }
    | undefined;

  $: logo = modLogo || assets + '/images/no_image.png';
</script>

<div class="relative overflow-hidden">
  {#if modStatus(latestVersions) === 'own-risk'}
    <div class="mod-own-risk">
      <div class="mod-inset" />
      <div class="mod-stripe">USE AT YOUR OWN RISK</div>
    </div>
  {:else if modStatus(latestVersions) === 'outdated'}
    <div class="mod-outdated">
      <div class="mod-inset" />
      <div class="mod-stripe">OUTDATED</div>
    </div>
  {/if}
  <img class="rounded-lg sm:max-w-lg max-w-full w-full" src={logo} alt="Logo for {modName}" />
</div>
