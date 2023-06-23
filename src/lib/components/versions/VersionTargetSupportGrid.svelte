<script lang="ts">
  import type { VersionTarget } from '$lib/generated';
  import type { IVersion } from '$lib/models/versions';
  import { Icon } from '@smui/common';
  import DataTable, { Body, Row, Cell } from '@smui/data-table';

  export let version!: IVersion;
  const targets = version.targets as VersionTarget[];

  async function getTargetData(selectedTarget: string) {
    let found = false;

    const fromBeforeDedicatedServerSupport = targets.length == 0;
    if (fromBeforeDedicatedServerSupport) {
      found = ['WindowsNoEditor', 'Windows'].includes(selectedTarget);
    } else {
      found = targets.some((target) => target.targetName === selectedTarget);
    }

    return {
      glyph: found ? 'checkmark' : 'cancel',
      tooltip: found
        ? `This version supports the ${selectedTarget} target`
        : `This version lacks files for the ${selectedTarget} target`
    };
  }
</script>

<div class="grid grid-flow-row">
  <DataTable
    table$aria-label="Available Releases"
    class="max-w-auto"
    container$class="!overflow-visible"
    table$class="!overflow-visible">
    <Body>
      <Row>
        <Cell style="width: 20%;" />
        <Cell style="width: 40%;"><div class="text-center" title="Game client">Client</div></Cell>
        <Cell style="width: 40%;"><div class="text-center" title="Dedicated server">Server</div></Cell>
      </Row>
      <Row>
        <Cell>Windows</Cell>
        <Cell
          ><div class="text-center">
            {#await getTargetData('WindowsNoEditor') then support}
              <Icon class="material-icons text-center" style="width: 20px" title={support.tooltip}
                >{support.glyph}</Icon>
            {/await}
          </div></Cell>
        <Cell
          ><div class="text-center">
            {#await getTargetData('WindowsServer') then support}
              <Icon class="material-icons text-center" style="width: 20px" title={support.tooltip}
                >{support.glyph}</Icon>
            {/await}
          </div></Cell>
      </Row>
      <Row>
        <Cell>Linux</Cell>
        <Cell
          ><div class="text-center" title="There is no Client distribution of Satisfactory for Linux">N/A</div></Cell>
        <Cell
          ><div class="text-center">
            {#await getTargetData('LinuxServer') then support}
              <Icon class="material-icons text-center" style="width: 20px" title={support.tooltip}
                >{support.glyph}</Icon>
            {/await}
          </div></Cell>
      </Row>
    </Body>
  </DataTable>
</div>
