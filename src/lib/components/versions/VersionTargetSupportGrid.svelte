<script lang="ts">
  import type { VersionTarget } from '$lib/generated';

  export let targets!: Pick<VersionTarget, 'targetName'>[];

  function formatTooltip(found: boolean, selectedTarget: string) {
    if (found) {
      return `This version supports the ${selectedTarget} target`;
    }

    return `This version lacks files for the ${selectedTarget} target`;
  }

  const yesGlyph = 'checkmark';
  const noGlyph = 'cancel';

  $: HasWindows = targets.some((target) => target.targetName === 'Windows');
  $: HasWindowsServer = targets.some((target) => target.targetName === 'WindowsServer');
  $: HasLinuxServer = targets.some((target) => target.targetName === 'LinuxServer');
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
  <table aria-label="Available Releases" class="table table-hover max-w-auto !overflow-visible">
    <tbody>
      <tr class="border rounded !border-surface-500">
        <td style="width: 20%;" />
        <td style="width: 40%;"><div class="text-center" title="Game client">Client</div></td>
        <td style="width: 40%;"><div class="text-center" title="Dedicated server">Server</div></td>
      </tr>
      <tr class="border rounded !border-surface-500">
        <td>Windows</td>
        <td
          ><div class="text-center">
            <span class="material-icons text-center" style="width: 20px" title={WindowsSupport.tooltip}
              >{WindowsSupport.glyph}</span>
          </div></td>
        <td
          ><div class="text-center">
            <span class="material-icons text-center" style="width: 20px" title={WindowsServerSupport.tooltip}
              >{WindowsServerSupport.glyph}</span>
          </div></td>
      </tr>
      <tr class="border rounded !border-surface-500">
        <td>Linux</td>
        <td><div class="text-center" title="There is no Client distribution of Satisfactory for Linux">N/A</div></td>
        <td
          ><div class="text-center">
            <span class="material-icons text-center" style="width: 20px" title={LinuxServerSupport.tooltip}
              >{LinuxServerSupport.glyph}</span>
          </div></td>
      </tr>
    </tbody>
  </table>
</div>
