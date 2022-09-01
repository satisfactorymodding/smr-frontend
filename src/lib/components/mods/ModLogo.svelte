<script lang="ts">
  import { assets } from '$app/paths';
  import type { CompatibilityInfoInput } from '$lib/generated';
  import OutdatedBanner from '$lib/components/mods/compatibility/OutdatedBanner.svelte';

  export let modLogo!: string;
  export let modName!: string;
  export let compatibility: CompatibilityInfoInput;

  $: logo = modLogo || assets + '/images/no_image.webp';
</script>

<div class="relative overflow-hidden">
  <OutdatedBanner {compatibility} logo={true} />
  <img class="rounded-lg sm:max-w-lg max-w-full w-full" src={logo} alt="Logo for {modName}" />
</div>
