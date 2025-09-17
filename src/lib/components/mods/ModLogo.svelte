<script lang="ts">
  import { assets } from '$app/paths';
  import type { CompatibilityInfoInput } from '$lib/generated';
  import OutdatedBanner from '$lib/components/mods/compatibility/OutdatedBanner.svelte';

  interface Props {
    modLogo: string;
    modName: string;
    compatibility: CompatibilityInfoInput;
  }

  let { modLogo, modName, compatibility }: Props = $props();

  let logo = $derived(modLogo || assets + '/images/no_image.webp');
</script>

<div class="relative overflow-hidden">
  <div class="w-full max-w-full sm:max-w-lg">
    <OutdatedBanner {compatibility} logo={true} />
    <img class="rounded-lg" src={logo} alt="Logo for {modName}" />
  </div>
</div>
