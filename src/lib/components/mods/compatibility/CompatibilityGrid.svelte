<script lang="ts">
  import type { CompatibilityInfoInput } from '$lib/generated';
  import CompatibilityStateText from '$lib/components/mods/compatibility/CompatibilityStateText.svelte';
  import { markdown } from '../../../utils/markdown';
  import CompatibilityIcon from '$lib/components/mods/compatibility/CompatibilityIcon.svelte';
  import CompatibilityModal from '$lib/modals/CompatibilityModal.svelte';
  import { getTranslate } from '@tolgee/svelte';

  interface Props {
    compatibility: CompatibilityInfoInput;
  }

  let { compatibility }: Props = $props();

  export const { t } = getTranslate();
  export const noNotesText = $t('compatibility-info.no-notes');

  let compatibilityOpen = $state(false);
</script>

<CompatibilityModal bind:open={compatibilityOpen} {compatibility}></CompatibilityModal>

<div class="card preset-filled-surface-100-900 p-4">
  <div class="grid grid-flow-row gap-y-2">
    <h3 class="my-4 text-2xl font-bold">{$t('compatibility-info.header')}</h3>
    <p>{$t('compatibility-info.subtitle')}</p>
    <div class="grid grid-flow-row">
      <table aria-label="Available Releases" class="max-w-auto table !overflow-visible">
        <tbody>
          <tr class="rounded border !border-surface-500">
            <td
              ><div class="flex items-center justify-center">
                <CompatibilityIcon />{$t('compatibility-info.branch.stable')}
              </div></td>
            <td
              ><div class="flex items-center justify-center">
                <CompatibilityIcon EXP={true} />{$t('compatibility-info.branch.unstable')}
              </div></td>
          </tr>
          <tr class="rounded border !border-surface-500">
            <td class="text-center">
              <button
                class="m-0 min-w-0"
                title={$t('tooltip.click-for-info')}
                onclick={() => (compatibilityOpen = true)}>
                <CompatibilityStateText state={compatibility?.EA?.state} />
              </button>
            </td>
            <td class="text-center">
              <button
                class="m-0 min-w-0"
                title={$t('tooltip.click-for-info')}
                onclick={() => (compatibilityOpen = true)}>
                <CompatibilityStateText state={compatibility?.EXP?.state} />
              </button>
            </td>
          </tr>
          <tr class="rounded border !border-surface-500">
            {#if compatibility}
              <td>
                <span style="padding: 2px; white-space:normal">
                  {#if compatibility?.EA?.note}
                    {#await markdown(compatibility.EA.note) then rendered}
                      <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                      {@html rendered}
                    {/await}
                  {:else}
                    {noNotesText}
                  {/if}
                </span>
              </td>
              <td>
                <span style="padding: 2px; white-space:normal">
                  {#if compatibility?.EXP?.note}
                    {#await markdown(compatibility.EXP.note) then rendered}
                      <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                      {@html rendered}
                    {/await}
                  {:else}
                    {noNotesText}
                  {/if}
                </span>
              </td>
            {:else}
              <td colspan="2">
                <span style="padding: 2px; white-space:normal">
                  {$t('compatibility-info.state.unknown.description')}
                </span>
              </td>
            {/if}
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
