<script lang="ts">
  import { assets } from '$app/paths';
  import type { CompatibilityInfoInput } from '$lib/generated';
  import OutdatedBanner from '$lib/components/mods/compatibility/OutdatedBanner.svelte';

  export let modpackLogo!: string;
  export let modpackName!: string;

  $: logo = modpackLogo || assets + '/images/no_image.webp';
</script>

<div class="relative overflow-hidden">
  <div class="w-full max-w-full sm:max-w-lg">
    <img class="rounded-lg" src={logo} alt="Logo for {modpackName}" />
  </div>
</div>
