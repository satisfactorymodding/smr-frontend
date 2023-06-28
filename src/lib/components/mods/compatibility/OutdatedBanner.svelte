<script lang="ts">
  import type { CompatibilityInfoInput } from '$lib/generated';
  import { CompatibilityState } from '$lib/generated';

  export let compatibility: CompatibilityInfoInput;
  export let logo = false;

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

  let worst = CompatibilityState.Works;
  $: if (compatibility) {
    worst = Worst(compatibility);
  } else {
    worst = CompatibilityState.Works;
  }
  $: works = worst === CompatibilityState.Works;
</script>

{#if !works}
  <div
    class="mod-outdated-stripe"
    class:mod-damaged={worst === CompatibilityState.Damaged}
    class:mod-broken={worst === CompatibilityState.Broken}
    class:mod-logo-outdated={logo} />
{/if}
