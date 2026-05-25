<script lang="ts">
  import type { Mod } from '$lib/generated';
  import { markdown } from '$lib/utils/markdown';
  import { valueForNoUsageDisclosure, valueForUnspecifiedDisclosure } from '$lib/utils/mod';
  import { getTranslate, T } from '@tolgee/svelte';

  export let mod!: Pick<Mod, 'network_use_disclosure'>;

  const getIcon = (disclosure?: string | null) => {
    if (disclosure === valueForNoUsageDisclosure) {
      return 'sensors_off';
    } else if (disclosure === valueForUnspecifiedDisclosure) {
      return 'question_mark';
    }
    return 'sensors';
  };

  export const { t } = getTranslate();
</script>

<div class="card p-4">
  <section>
    <div class="break-words text-lg">
      <h3 class="my-4 flex items-center justify-between text-2xl">
        <span
          class="truncate font-bold underline decoration-dotted"
          title={$t('mod.network_disclosure.header.tooltip')}>
          <T keyName="mod.network_disclosure.header" />
        </span>
        <span
          title={$t('symbol_for_status.tooltip')}
          class="material-icons variant-filled-surface badge-icon p-4 text-2xl">
          {getIcon(mod?.network_use_disclosure)}
        </span>
      </h3>
      {#if mod?.network_use_disclosure === valueForUnspecifiedDisclosure || mod?.network_use_disclosure == undefined}
        <p><T keyName="mod.network_disclosure.legacy_none_specified" /></p>
      {:else if mod.network_use_disclosure === valueForNoUsageDisclosure}
        <p class="italic"><T keyName="mod.network_disclosure.no_network_usage" /></p>
      {:else}
        <p class="italic"><T keyName="mod.network_disclosure.intro_message" /></p>
        <div class="card p-2">
          {#await markdown(mod.network_use_disclosure) then rendered}
            <!-- eslint-disable-next-line -->
            {@html rendered}
          {/await}
        </div>
      {/if}
    </div>
  </section>
</div>
