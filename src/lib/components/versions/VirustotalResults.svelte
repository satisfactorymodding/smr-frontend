<script lang="ts">
  import type { VirustotalResult } from '$lib/generated';
  import { getTranslate } from '@tolgee/svelte';

  export let results!: Array<VirustotalResult>;
  export const { t } = getTranslate();
</script>

<div class="grid grid-flow-row">
  <h3 class="my-4 text-2xl font-bold">VirusTotal Results</h3>
  <table aria-label="Required Mod Dependencies" class="max-w-auto table table-hover !overflow-visible">
    <thead>
      <tr class="rounded border !border-surface-500">
        <td style="width: 20%;"><div class="text-center" title="File Name">File Name</div></td>
        <td style="width: 20%;"><div class="text-center" title="Results">Results</div></td>
        <td style="width: 20%;"><div class="text-center" title="Safe">Safe</div></td>
      </tr>
    </thead>
    <tbody>
      {#each results as result}
        <tr class="rounded border !border-surface-500">
          <td>
            <div class="text-center">{result.file_name}</div>
          </td>
          <td>
            <div class="text-center">
              <a
                title="View VirusTotal Result"
                href={`https://www.virustotal.com/gui/file/${result.hash}`}
                target="_blank"
                class="text-white">
                <span class="material-icons text-center" style="width: 20px" title={$t('version.virustotal.result')}>
                  policy
                </span>
              </a>
            </div>
          </td>
          <td
            ><div class="text-center">
              <span
                class="material-icons text-center"
                style="width: 20px"
                title={result.safe ? $t('version.virustotal.safe') : $t('version.virustotal.not_safe')}>
                {result.safe ? 'checkmark' : 'cancel'}
              </span>
            </div>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
