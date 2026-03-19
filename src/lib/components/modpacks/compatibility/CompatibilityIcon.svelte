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
  class="material-icons text-sm"
  class:modpack-state-works={compatibility?.state === CompatibilityState.Works}
  class:modpack-state-damaged={compatibility?.state === CompatibilityState.Damaged}
  class:modpack-state-broken={compatibility?.state === CompatibilityState.Broken}
  class:modpack-state-unknown={!compatibility}>
  {iconText}
</p>
