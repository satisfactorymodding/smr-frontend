<script lang="ts">
  import type { CompatibilityInput } from '$lib/generated';
  import { CompatibilityState } from '$lib/generated';

  interface Props {
    compatibility?: CompatibilityInput;
    EXP?: boolean;
  }

  let { compatibility = null, EXP = false }: Props = $props();
  let iconText = $state('rocket_launch');
  if (EXP) {
    iconText = 'science';
  }
</script>

<p
  class="material-icons text-sm"
  class:mod-state-works={compatibility?.state === CompatibilityState.Works}
  class:mod-state-damaged={compatibility?.state === CompatibilityState.Damaged}
  class:mod-state-broken={compatibility?.state === CompatibilityState.Broken}
  class:mod-state-unknown={!compatibility}>
  {iconText}
</p>
