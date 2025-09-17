<script lang="ts">
  import type { VirustotalResult } from '$lib/generated';
  import { getTranslate } from '@tolgee/svelte';

  interface Props {
    results: Array<VirustotalResult>;
  }

  let { results }: Props = $props();
  export const { t } = getTranslate();
</script>

<div class="grid grid-flow-row">
  <h3 class="my-4 text-2xl font-bold">{$t('virustotal.table.title')}</h3>
  <table aria-label={$t('virustotal.table.title')} class="max-w-auto table !overflow-visible">
    <tbody>
      <tr class="!border-surface-500 rounded border">
        <td style="width: 25%;"
          ><div title={$t('virustotal.table.file_name')}>
            {$t('virustotal.table.file_name')}
          </div></td>
        <td style="width: 25%;"
          ><div class="text-center" title={$t('virustotal.table.results')}>{$t('virustotal.table.results')}</div></td>
        <td style="width: 25%;"
          ><div class="text-center" title={$t('virustotal.table.safe')}>{$t('virustotal.table.safe')}</div></td>
      </tr>
      {#each results as result}
        <tr class="!border-surface-500 rounded border">
          <td>
            <div>{result.file_name}</div>
          </td>
          <td>
            <div class="text-center">
              <a
                title={$t('version.virustotal.result')}
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
