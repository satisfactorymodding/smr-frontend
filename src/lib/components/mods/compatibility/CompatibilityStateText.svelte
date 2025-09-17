<script lang="ts">
  import type { CompatibilityState } from '$lib/generated';
  import { getTranslate } from '@tolgee/svelte';
  interface Props {
    state?: CompatibilityState;
  }

  let { state = null }: Props = $props();

  export const { t } = getTranslate();

  const textForState = state ?? ('Unknown' as CompatibilityState);
  const classForState = (s: CompatibilityState): string => `mod-state-${s.toString().toLowerCase()}`;
</script>

<p class="{classForState(textForState)} mod-state">
  {$t(`compatibility-info.state.${textForState.toString().toLowerCase()}`)}
</p>
