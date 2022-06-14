<script lang="ts">
  import type { CompatibilityInfoInput } from '$lib/generated';
  import { CompatibilityState } from '$lib/generated';

  export let compatibility: CompatibilityInfoInput;
  export let logo = false;

  let CSSClass = '';
  if (compatibility) {
    switch (compatibility.EXP.state) {
      case CompatibilityState.Broken:
        CSSClass += 'mod-outdated-stripe';
        CSSClass += ' mod-broken';
        break;
      case CompatibilityState.Damaged:
        CSSClass += 'mod-outdated-stripe';
        CSSClass += ' mod-damaged';
        break;
    }
  }
  if (logo) {
    CSSClass += ' mod-logo-outdated';
  }
</script>

<div class={CSSClass}>
  <!--    <div class="mod-inset"/>-->
</div>
