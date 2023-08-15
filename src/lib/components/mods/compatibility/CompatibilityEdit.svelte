<script lang="ts">
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';
  import Select, { Option } from '@smui/select';
  import type { Compatibility } from '$lib/generated';
  import { CompatibilityState, MultiplayerState } from '$lib/generated';

  export let compatibility: Compatibility = {
    state: CompatibilityState.Works,
    multi: MultiplayerState.Compatible
  };
</script>

<Select style="margin-bottom: 10px" bind:value={compatibility.state} label="Compatibility State">
  {#each Object.values(CompatibilityState) as state}
    <Option value={state}>{state}</Option>
  {/each}
</Select>
<br />
<Select style="margin-bottom: 10px" bind:value={compatibility.multi} label="Multiplayer State">
  {#each Object.values(MultiplayerState) as multi}
    <Option value={multi}>{multi}</Option>
  {/each}
</Select>
<br />
<Textfield textarea bind:value={compatibility.note} label="Note">
  <HelperText slot="helper">A small description regarding the compatibility.<br />Markdown supported.</HelperText>
</Textfield>
