<script lang="ts">
  import type { ControllerCompatibilityState } from '$lib/generated';
  import { getTranslate } from '@tolgee/svelte';
  export let state: ControllerCompatibilityState = null;

  export const { t } = getTranslate();

  const textForState = state ?? ('Untested' as ControllerCompatibilityState);
  const classForState = (s: ControllerCompatibilityState): string =>
    `mod-controller-state-${s.toString().toLowerCase()}`;
</script>

<p class="{classForState(textForState)} mod-state">
  {$t(`controller-compatibility-info.state.${textForState.toString().toLowerCase()}`)}
</p>
