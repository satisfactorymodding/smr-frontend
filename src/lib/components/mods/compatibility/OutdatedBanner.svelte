<script lang="ts">
  import { run } from 'svelte/legacy';

  import type { CompatibilityInfoInput } from '$lib/generated';
  import { CompatibilityState } from '$lib/generated';

  interface Props {
    compatibility: CompatibilityInfoInput;
    logo?: boolean;
  }

  let { compatibility, logo = false }: Props = $props();

  function Worst(input: CompatibilityInfoInput): CompatibilityState {
    const EA = input.EA.state;
    if (EA == CompatibilityState.Broken) {
      // Broken is always the worst
      return EA;
    }
    if (EA == CompatibilityState.Works) {
      return input.EXP.state; // Anything other than Works is worse
    }
    if (input.EXP.state != CompatibilityState.Works) {
      // If it's not better then it is the worst
      return input.EXP.state;
    }
    return EA;
  }

  let worst = $state(CompatibilityState.Works);
  run(() => {
    if (compatibility) {
      worst = Worst(compatibility);
    } else {
      worst = CompatibilityState.Works;
    }
  });
  let works = $derived(worst === CompatibilityState.Works);
</script>

{#if !works}
  <div
    class="mod-outdated-stripe"
    style="max-width: inherit;"
    class:mod-damaged={worst === CompatibilityState.Damaged}
    class:mod-broken={worst === CompatibilityState.Broken}
    class:mod-logo-outdated={logo}>
  </div>
{/if}
