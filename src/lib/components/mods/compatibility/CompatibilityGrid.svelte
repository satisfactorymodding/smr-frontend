<script lang="ts">
  import type { CompatibilityInfoInput } from '$lib/generated';
  import Dialog, { Content, Title } from '@smui/dialog';
  import CompatibilityInfo from '$lib/components/mods/compatibility/CompatibilityInfo.svelte';
  import CompatibilityStateText from '$lib/components/mods/compatibility/CompatibilityStateText.svelte';
  import Button from '@smui/button';
  import DataTable, { Body, Row, Cell } from '@smui/data-table';
  import { markdown } from '../../../utils/markdown';
  import CompatibilityIcon from './CompatibilityIcon.svelte';
  let open = false;

  export let compatibility: CompatibilityInfoInput;
  export const noNotesText = '(No extra notes)';
</script>

<DataTable
  table$aria-label="Available Releases"
  class="max-w-auto"
  container$class="!overflow-visible"
  table$class="!overflow-visible">
  <Body>
    <Row>
      <Cell style="width: 50%;"><div class="text-center"><CompatibilityIcon /> Early Access</div></Cell>
      <Cell style="width: 50%;"><div class="text-center"><CompatibilityIcon EXP={true} /> Experimental</div></Cell>
    </Row>
    <Row>
      <Cell
        ><div class="text-center">
          <Button
            --mdc-text-button-container-height="20px"
            class="min-w-0 m-0"
            title="Click for more information"
            on:click={() => {
              open = true;
            }}>
            <CompatibilityStateText state={compatibility?.EA?.state} />
          </Button>
        </div></Cell>
      <Cell
        ><div class="text-center">
          <Button
            --mdc-text-button-container-height="20px"
            class="min-w-0 m-0"
            title="Click for more information"
            on:click={() => {
              open = true;
            }}>
            <CompatibilityStateText state={compatibility?.EXP?.state} />
          </Button>
        </div></Cell>
    </Row>
    <Row>
      <Cell>
        <span style="padding: 2px; white-space:normal">
          {#if compatibility?.EA?.note}
            {#await markdown(compatibility.EA.note) then rendered}
              {@html rendered}
            {/await}
          {:else}
            {noNotesText}
          {/if}
        </span>
      </Cell>
      <Cell>
        <span style="padding: 2px; white-space:normal">
          {#if compatibility?.EXP?.note}
            {#await markdown(compatibility.EXP.note) then rendered}
              {@html rendered}
            {/await}
          {:else}
            {noNotesText}
          {/if}
        </span>
      </Cell>
    </Row>
  </Body>
</DataTable>
<Dialog bind:open>
  <Title>Compatibility Information</Title>
  <Content>
    <CompatibilityInfo {compatibility} />
  </Content>
</Dialog>
