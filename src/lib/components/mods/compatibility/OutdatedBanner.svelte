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

  let CSSClass = '';
  if (compatibility) {
    const worst = Worst(compatibility);
    CSSClass += 'mod-outdated-stripe';
    switch (worst) {
      case CompatibilityState.Broken:
        CSSClass += ' mod-broken';
        break;
      case CompatibilityState.Damaged:
        CSSClass += ' mod-damaged';
        break;
    }
  }
  if (logo) {
    CSSClass += ' mod-logo-outdated';
  }
</script>

<div class={CSSClass} />
