<script lang="ts">
  import type { CompatibilityState } from '$lib/generated';
  export let state: CompatibilityState;

  function classForState(state: CompatibilityState): string {
    return `mod-state-${state.toString().toLowerCase()}`;
  }
</script>

<p class="{classForState(state)} mod-state">{state}</p>
