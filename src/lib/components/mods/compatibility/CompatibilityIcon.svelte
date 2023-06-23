<script lang="ts">
  import type { CompatibilityInput } from '$lib/generated';
  import { CompatibilityState } from '$lib/generated';

  export let compatibility: CompatibilityInput = null;
  export let EXP = false;
  let iconText = 'rocket_launch';
  if (EXP) {
    iconText = 'science';
  }
</script>

<p
  class="material-icons text-base"
  class:mod-state-works={compatibility?.state === CompatibilityState.Works}
  class:mod-state-damaged={compatibility?.state === CompatibilityState.Damaged}
  class:mod-state-broken={compatibility?.state === CompatibilityState.Broken}>
  {iconText}
</p>
