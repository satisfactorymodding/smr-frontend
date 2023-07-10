<script lang="ts">
  import type { CompatibilityState } from '$lib/generated';
  import { getTranslate } from "@tolgee/svelte";
  export let state: CompatibilityState;

  export const { t } = getTranslate();

  const classForState = (s: CompatibilityState): string => `mod-state-${s.toString().toLowerCase()}`;
</script>

<p class="{classForState(state)} mod-state">{ $t(`compatibility-info.state.${state.toString().toLowerCase()}`) }</p>
