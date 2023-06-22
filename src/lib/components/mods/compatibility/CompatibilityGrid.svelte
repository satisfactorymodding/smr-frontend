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
        <Cell style="width: 20%;"><strong>Compatibility:</strong></Cell>
        <Cell style="width: 40%;"><div class="text-center">Early Access</div></Cell>
        <Cell style="width: 40%;"><div class="text-center">Experimental</div></Cell>
      </Row>
      <Row>
        <Cell>General:</Cell>
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
        <Cell>Multiplayer:</Cell>
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
        <Cell>Notes:</Cell>
        <Cell
          >{#if compatibility.EA.note}
            <div class="word-wrap">
              {#await markdown(compatibility.EA.note) then rendered}
                {@html rendered}
              {/await}
            </div>
          {/if}</Cell>
        <Cell>
          {#if compatibility.EXP.note}
            <div>
              {#await markdown(compatibility.EXP.note) then rendered}
                <p>{@html rendered}</p>
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

<style type="text/css">
  p {
    word-wrap: break-word;
  }
</style>
