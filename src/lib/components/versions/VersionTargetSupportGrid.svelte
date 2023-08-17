<script lang="ts">
  import type { IVersion } from '$lib/models/versions';
  import { Icon } from '@smui/common';
  import DataTable, { Body, Row, Cell } from '@smui/data-table';

  export let version!: IVersion;

  function formatTooltip(found: boolean, selectedTarget: string) {
    if (found) {
      return `This version supports the ${selectedTarget} target`;
    }

    return `This version lacks files for the ${selectedTarget} target`;
  }

  const yesGlyph = 'checkmark';
  const noGlyph = 'cancel';

  $: HasWindows = version.targets.some((target) => target.targetName === 'Windows');
  $: HasWindowsServer = version.targets.some((target) => target.targetName === 'WindowsServer');
  $: HasLinuxServer = version.targets.some((target) => target.targetName === 'LinuxServer');
  $: WindowsSupport = {
    glyph: HasWindows ? yesGlyph : noGlyph,
    tooltip: formatTooltip(HasWindows, 'Windows')
  };
  $: WindowsServerSupport = {
    glyph: HasWindowsServer ? yesGlyph : noGlyph,
    tooltip: formatTooltip(HasWindowsServer, 'Windows Server')
  };
  $: LinuxServerSupport = {
    glyph: HasLinuxServer ? yesGlyph : noGlyph,
    tooltip: formatTooltip(HasLinuxServer, 'Linux Server')
  };
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
            <Icon class="material-icons text-center" style="width: 20px" title={WindowsSupport.tooltip}
              >{WindowsSupport.glyph}</Icon>
          </div></Cell>
        <Cell
          ><div class="text-center">
            <Icon class="material-icons text-center" style="width: 20px" title={WindowsServerSupport.tooltip}
              >{WindowsServerSupport.glyph}</Icon>
          </div></Cell>
      </Row>
      <Row>
        <Cell>Linux</Cell>
        <Cell
          ><div class="text-center" title="There is no Client distribution of Satisfactory for Linux">N/A</div></Cell>
        <Cell
          ><div class="text-center">
            <Icon class="material-icons text-center" style="width: 20px" title={LinuxServerSupport.tooltip}
              >{LinuxServerSupport.glyph}</Icon>
          </div></Cell>
      </Row>
    </Body>
  </DataTable>
</div>
