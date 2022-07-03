<script lang="ts">
  import type { CompatibilityInput } from '$lib/generated';
  import { CompatibilityState } from '$lib/generated';

  export let compatibility!: CompatibilityInput;
  export let EXP = false;
  let iconText = 'public';
  let CSSClass = 'mod-state-works';
  if (EXP) {
    iconText = 'science';
  }
  if (compatibility) {
    if (compatibility.state == CompatibilityState.Damaged) {
      CSSClass = 'mod-state-damaged';
    } else if (compatibility.state == CompatibilityState.Broken) {
      CSSClass = 'mod-state-broken';
    }
  }
</script>

<p class="material-icons align-middle {CSSClass}">{iconText}</p>
