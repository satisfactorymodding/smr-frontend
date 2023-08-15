<script lang="ts">
  import type { MultiplayerState } from '$lib/generated';
  export let multi: MultiplayerState = null;

  const textForMulti = multi ?? 'Unknown';
  const classForMulti = (m: string): string => `mod-state-${m.toString().toLowerCase()}`;
</script>

<p class="{classForMulti(textForMulti)} mod-state">{textForMulti}</p>
