<script lang="ts">
  import type { ControllerCompatibility } from '$lib/generated';
  import { ControllerCompatibilityState } from '$lib/generated';
  import { getControllerCompatibilityStateDescriptionFor } from '$lib/utils/compatibility-descriptions';
  import { getTolgee, getTranslate } from '@tolgee/svelte';

  export let compatibility: ControllerCompatibility = {
    state: ControllerCompatibilityState.Untested
  };

  export const { t } = getTranslate();
  export const tolgee = getTolgee().value;
</script>

<label class="label">
  <span>Controller Compatibility State</span>
  <select class="select" style="margin-bottom: 10px" bind:value={compatibility.state}>
    {#each Object.values(ControllerCompatibilityState) as state}
      <option value={state}>{state}</option>
    {/each}
  </select>
  <p class="compatibility-state-description">
    {getControllerCompatibilityStateDescriptionFor(
      compatibility.state || ControllerCompatibilityState.Untested,
      tolgee
    )}
  </p>
</label>

<br />

<label class="label">
  <span>Note</span>
  <textarea class="textarea p-4" bind:value={compatibility.note} placeholder={$t('compatibility-info.notes')} />
</label>
