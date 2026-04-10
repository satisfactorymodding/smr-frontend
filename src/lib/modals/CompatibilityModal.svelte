<script lang="ts">
  import ModCompatibilityInfo from '$lib/components/mods/compatibility/ModCompatibilityInfo.svelte';
  import ModpackCompatibilityInfo from '$lib/components/modpacks/compatibility/ModpackCompatibilityInfo.svelte';
  import type { CompatibilityInfoInput } from '$lib/generated';
  import { getTranslate } from '@tolgee/svelte';

  export let compatibility: CompatibilityInfoInput;

  export let isModpack = false;

  export const { t } = getTranslate();
</script>

<div class="card flex flex-col gap-2 p-4">
  <h2 class="text-2xl">{$t('compatibility-info')}</h2>
  <div>
    {#if isModpack}
      <ModpackCompatibilityInfo {compatibility} />
    {:else}
      <ModCompatibilityInfo {compatibility} />
    {/if}
  </div>
</div>
