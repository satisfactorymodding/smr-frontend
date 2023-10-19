<script lang="ts">
  import type { CompatibilityState } from '$lib/generated';
  import { getTranslate } from '@tolgee/svelte';
  export let state: CompatibilityState = null;

  export const { t } = getTranslate();

  const textForState = state ?? ('Unknown' as CompatibilityState);
  const classForState = (s: CompatibilityState): string => `mod-state-${s.toString().toLowerCase()}`;
</script>

{#if state}
  <p class="{classForState(textForState)} mod-state">
    {$t(`compatibility-info.state.${textForState.toString().toLowerCase()}`)}
  </p>
{/if}
