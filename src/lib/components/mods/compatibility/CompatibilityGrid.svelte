<script lang="ts">
  import type { CompatibilityInfoInput } from '$lib/generated';
  import Dialog, { Content, Title } from '@smui/dialog';
  import CompatibilityInfo from '$lib/components/mods/compatibility/CompatibilityInfo.svelte';
  import CompatibilityStateText from '$lib/components/mods/compatibility/CompatibilityStateText.svelte';
  import Button from '@smui/button';
  import DataTable, { Body, Row, Cell } from '@smui/data-table';
  import { markdown } from '../../../utils/markdown';
  let open = false;

  export let compatibility: CompatibilityInfoInput;
</script>

{#if compatibility}
  <DataTable
    table$aria-label="Available Releases"
    class="max-w-auto"
    container$class="!overflow-visible"
    table$class="!overflow-visible">
    <Body>
      <Row>
        <Cell style="width: 50%;"><div class="text-center">Early Access</div></Cell>
        <Cell style="width: 50%;"><div class="text-center">Experimental</div></Cell>
      </Row>
      <Row>
        <Cell
          ><div class="text-center">
            <Button
              --mdc-text-button-container-height="20px"
              class="min-w-0 m-0"
              title="Compatibility information"
              on:click={() => {
                open = true;
              }}>
              <CompatibilityStateText state={compatibility.EA.state} />
            </Button>
          </div></Cell>
        <Cell
          ><div class="text-center">
            <Button
              --mdc-text-button-container-height="20px"
              class="min-w-0 m-0"
              title="Compatibility information"
              on:click={() => {
                open = true;
              }}>
              <CompatibilityStateText state={compatibility.EXP.state} />
            </Button>
          </div></Cell>
      </Row>
      <Row>
        <Cell
          >{#if compatibility.EA.note}
              {#await markdown(compatibility.EA.note) then rendered}
              <span style="padding: 2px; white-space:normal">{@html rendered}</span>
              {/await}
          {/if}</Cell>
        <Cell>
          {#if compatibility.EXP.note}
            <div style="height: auto;">
              {#await markdown(compatibility.EXP.note) then rendered}
              <span style="padding: 2px; white-space:normal">{@html rendered}</span>
              {/await}
            </div>
          {/if}</Cell>
      </Row>
    </Body>
  </DataTable>
  <Dialog bind:open>
    <Title>Compatibility Information</Title>
    <Content>
      <CompatibilityInfo {compatibility} />
    </Content>
  </Dialog>
{/if}