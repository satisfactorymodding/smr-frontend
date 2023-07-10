<script lang="ts">
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';
  import Select, { Option } from '@smui/select';
  import type { Compatibility } from '$lib/generated';
  import { CompatibilityState } from '$lib/generated';
  import { getTranslate } from "@tolgee/svelte";

  export let compatibility: Compatibility = {
    state: CompatibilityState.Works
  };

  export const { t } = getTranslate();
</script>

<Select style="margin-bottom: 10px" bind:value={compatibility.state} label="Compatibility State">
  {#each Object.values(CompatibilityState) as state}
    <Option value={state}>{state}</Option>
  {/each}
</Select>
<br />
<Textfield textarea bind:value={compatibility.note} label="Note">
  <HelperText slot="helper">{ $t('compatibility-info.notes') }</HelperText>
</Textfield>
