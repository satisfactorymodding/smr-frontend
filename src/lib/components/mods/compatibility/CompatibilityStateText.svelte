<script lang="ts">
  import type { CompatibilityState } from '$lib/generated';
  export let state: CompatibilityState = null;

  const textForState = state ?? 'Unknown';
  const classForState = (s: string): string => `mod-state-${s.toString().toLowerCase()}`;
</script>

<p class="{classForState(textForState)} mod-state">{textForState}</p>
