<script lang="ts">
  import type { CompatibilityInfoInput } from '$lib/generated';
  import CompatibilityStateText from '$lib/components/mods/compatibility/CompatibilityStateText.svelte';
  import { markdown } from '../../../utils/markdown';
  import CompatibilityIcon from '$lib/components/mods/compatibility/CompatibilityIcon.svelte';
  import { getModalStore } from '@skeletonlabs/skeleton';
  import CompatibilityModal from '$lib/modals/CompatibilityModal.svelte';
  import { getTranslate } from '@tolgee/svelte';

  export let compatibility: CompatibilityInfoInput;

  export const { t } = getTranslate();
  export const noNotesText = '(No extra notes)';

  const modalStore = getModalStore();
  const openCompatibility = () => {
    modalStore.trigger({
      type: 'component',
      component: {
        ref: CompatibilityModal,
        props: {
          compatibility
        }
      }
    });
  };
</script>

<div class="card p-4">
  <div class="grid grid-flow-row gap-y-2">
    <h3 class="my-4 text-2xl font-bold">Compatibility Information</h3>
    <p>Click the colored text for more details.</p>
    <div class="grid grid-flow-row">
      <table aria-label="Available Releases" class="max-w-auto table table-hover !overflow-visible">
        <tbody>
          <tr class="rounded border !border-surface-500">
            <td><div class="flex items-center justify-center"><CompatibilityIcon /> Early Access</div></td>
            <td
              ><div class="flex items-center justify-center">
                <CompatibilityIcon EXP={true} /> Experimental
              </div></td>
          </tr>
          <tr class="rounded border !border-surface-500">
            <td class="text-center">
              <button class="m-0 min-w-0" title="Click for more information" on:click={openCompatibility}>
                <CompatibilityStateText state={compatibility?.EA?.state} />
              </button>
            </td>
            <td class="text-center">
              <button class="m-0 min-w-0" title="Click for more information" on:click={openCompatibility}>
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
