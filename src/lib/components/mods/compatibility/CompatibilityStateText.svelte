<script lang="ts">
  import type { CompatibilityState } from '$lib/generated';
  export let state: CompatibilityState;

  const classForState = (s: CompatibilityState): string => `mod-state-${s.toString().toLowerCase()}`;
</script>

<p class="{classForState(state)} mod-state">{state}</p>
