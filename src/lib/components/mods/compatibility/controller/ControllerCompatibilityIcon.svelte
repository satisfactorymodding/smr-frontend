<script lang="ts">
  import type { ControllerCompatibilityInput } from '$lib/generated';
  import { ControllerCompatibilityState } from '$lib/generated';

  export let compatibility: ControllerCompatibilityInput = null;
  let iconText = 'videogame_asset';
  if (compatibility?.state === ControllerCompatibilityState.Unsupported) {
    iconText = 'videogame_asset_off';
  }
</script>

<p
  class="material-icons text-sm"
  class:mod-state-works={compatibility?.state === ControllerCompatibilityState.Implicit ||
    compatibility?.state === ControllerCompatibilityState.Supported}
  class:mod-state-damaged={compatibility?.state === ControllerCompatibilityState.Partial}
  class:mod-state-broken={compatibility?.state === ControllerCompatibilityState.Unsupported}
  class:mod-state-unknown={!compatibility || compatibility?.state === ControllerCompatibilityState.Untested}>
  {iconText}
</p>
