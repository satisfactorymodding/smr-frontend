<script lang="ts">
  import type { Compatibility } from '$lib/generated';
  import { CompatibilityState } from '$lib/generated';
  import { getCompatibilityStateDescriptionFor } from '$lib/utils/compatibility-descriptions';
  import { getTolgee, getTranslate } from '@tolgee/svelte';

  export let compatibility: Compatibility = {
    state: CompatibilityState.Works
  };

  export const { t } = getTranslate();
  export const tolgee = getTolgee().value;
</script>

<label class="label">
  <span>Compatibility State</span>
  <select class="select" style="margin-bottom: 10px" bind:value={compatibility.state}>
    {#each Object.values(CompatibilityState) as state}
      <option value={state}>{state}</option>
    {/each}
  </select>
  <p class="compatibility-state-description">
    {getCompatibilityStateDescriptionFor(compatibility.state || 'Unknown', tolgee)}
  </p>
</label>
<label class="label">
  <span>Note</span>
  <textarea class="textarea p-4" bind:value={compatibility.note} placeholder={$t('compatibility-info.notes')} />
</label>
