<script lang="ts">
  import type { CompatibilityInfoInput } from '$lib/generated';
  import { CompatibilityState } from '$lib/generated';

  export let compatibility: CompatibilityInfoInput;
  export let logo = false;

  function Worst(compatibility: CompatibilityInfoInput): CompatibilityState {
    const EA = compatibility.EA.state;
    if (EA == CompatibilityState.Broken) {
      // Broken is always the worst
      return EA;
    }
    if (EA == CompatibilityState.Works) {
      return compatibility.EXP.state; // Anything other than Works is worse
    }
    if (compatibility.EXP.state != CompatibilityState.Works) {
      // If it's not better then it is the worst
      return compatibility.EXP.state;
    }
    return EA;
  }

  let worst = CompatibilityState.Works;
  if (compatibility) {
    worst = Worst(compatibility);
  }
  const works = worst === CompatibilityState.Works;
</script>

{#if !works}
  <div
    class="mod-outdated-stripe"
    class:mod-damaged={worst === CompatibilityState.Damaged}
    class:mod-broken={worst === CompatibilityState.Broken}
    class:mod-logo-outdated={logo}
  />
{/if}
