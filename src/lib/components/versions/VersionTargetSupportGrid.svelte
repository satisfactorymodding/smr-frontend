<script lang="ts">
  import type { VersionTarget } from '$lib/generated';
  import { getTranslate } from '@tolgee/svelte';
  import { T } from '@tolgee/svelte';

  export const { t } = getTranslate();

  export let targets!: Pick<VersionTarget, 'targetName'>[];

  function formatTooltip(filesFoundForTarget: boolean, selectedTarget: string) {
    if (filesFoundForTarget) {
      return $t({
        key: 'version.target-support-tooltip.supported',
        defaultValue: `This version supports the {TargetPlatform} platform`,
        params: {
          TargetPlatform: selectedTarget
        }
      });
    }
    return $t({
      key: 'version.target-support-tooltip.unsupported',
      defaultValue: `This version does not support the {TargetPlatform} platform`,
      params: {
        TargetPlatform: selectedTarget
      }
    });
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
  <table aria-label="Available Releases" class="max-w-auto table table-hover !overflow-visible">
    <tbody>
      <tr class="rounded border !border-surface-500">
        <td style="width: 20%;" />
        <td style="width: 40%;"
          ><div class="text-center" title="Game client">
            <T keyName="target-platform.client" defaultValue="Client" />
          </div></td>
        <td style="width: 40%;"
          ><div class="text-center" title="Dedicated server">
            <T keyName="target-platform.server" defaultValue="Server" />
          </div></td>
      </tr>
      <tr class="rounded border !border-surface-500">
        <td><T keyName="target-platform.windows" defaultValue="Windows" /></td>
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
      <tr class="rounded border !border-surface-500">
        <td><T keyName="target-platform.linux" defaultValue="Linux" /></td>
        <td
          ><div
            class="text-center underline decoration-dotted"
            title={$t(
              'version.target-support-tooltip.no-linux-client',
              'There is no Client distribution of Satisfactory for Linux'
            )}>
            <T keyName="not-applicable.abbreviation" defaultValue="N/A" />
          </div></td>
        <td
          ><div class="text-center">
            <span class="material-icons text-center" style="width: 20px" title={LinuxServerSupport.tooltip}
              >{LinuxServerSupport.glyph}</span>
          </div></td>
      </tr>
    </tbody>
  </table>
</div>
