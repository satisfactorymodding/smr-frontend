<script lang="ts">
  import type { CompatibilityInfoInput } from '$lib/generated';
  import Dialog, { Content as DialogContent, Title } from '@smui/dialog';
  import Card, { Content as CardContent } from '@smui/card';
  import CompatibilityInfo from '$lib/components/mods/compatibility/CompatibilityInfo.svelte';
  import CompatibilityStateText from '$lib/components/mods/compatibility/CompatibilityStateText.svelte';
  import MultiplayerStateText from '$lib/components/mods/compatibility/MultiplayerStateText.svelte';
  import Button from '@smui/button';
  import DataTable, { Body, Row, Cell } from '@smui/data-table';
  import { markdown } from '../../../utils/markdown';
  import CompatibilityIcon from '$lib/components/mods/compatibility/CompatibilityIcon.svelte';

  let open = false;

  export let compatibility: CompatibilityInfoInput;
  export const noNotesText = '(No extra notes)';
</script>

<!-- TODO: Add vertical line between configurable fields -->
<Card>
  <CardContent>
    <div class="grid grid-flow-row gap-y-2">
      <h3 class="text-2xl my-4 font-bold">Compatibility Information</h3>
      <p>Click the colored text for more details.</p>
      <div class="grid grid-flow-row">
        <DataTable
          table$aria-label="Available Releases"
          class="max-w-auto"
          container$class="!overflow-visible"
          table$class="!overflow-visible">
          <Body>
            <Row>
              <Cell style="width: 50%;"><div class="text-center"><CompatibilityIcon /> Early Access</div></Cell>
              <Cell style="width: 50%;"
                ><div class="text-center"><CompatibilityIcon EXP={true} /> Experimental</div></Cell>
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
              <Cell colspan={2}><div style="bold" class="text-center">Multiplayer:</div></Cell>
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
                    <MultiplayerStateText multi={compatibility?.EA?.multi} />
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
                    <MultiplayerStateText multi={compatibility?.EXP?.multi} />
                  </Button>
                </div></Cell>
            </Row>
            <Row>
              <Cell colspan={2} style="width: 100%;"><div style="Bold" class="text-center">Notes:</div></Cell>
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
          <DialogContent>
            <CompatibilityInfo {compatibility} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  </CardContent>
</Card>
