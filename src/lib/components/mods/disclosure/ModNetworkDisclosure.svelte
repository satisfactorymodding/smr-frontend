<script lang="ts">
  import type { Mod } from '$lib/generated';
  import { markdown } from '$lib/utils/markdown';
  import { valueForNoUsageDisclosure, valueForUnspecifiedDisclosure } from '$lib/utils/mod';
  import { getTranslate, T } from '@tolgee/svelte';

  export let mod!: Pick<Mod, 'network_use_disclosure'>;

  export const { t } = getTranslate();
</script>

<div class="card p-4">
  <section>
    <div class="break-words text-lg">
      <h3
        class="my-4 text-2xl font-bold underline decoration-dotted"
        title={$t('mod.network_disclosure.header.tooltip')}>
        <T keyName="mod.network_disclosure.header" />
      </h3>
      {#if mod?.network_use_disclosure === valueForUnspecifiedDisclosure}
        <p><T keyName="mod.network_disclosure.legacy_none_specified" /></p>
      {:else if mod.network_use_disclosure === valueForNoUsageDisclosure}
        <p class="italic"><T keyName="mod.network_disclosure.no_network_usage" /></p>
      {:else}
        <p class="italic"><T keyName="mod.network_disclosure.intro_message" /></p>
        <div>
          {#await markdown(mod.network_use_disclosure) then rendered}
            <!-- eslint-disable-next-line -->
            {@html rendered}
          {/await}
        </div>
      {/if}
    </div>
  </section>
</div>
