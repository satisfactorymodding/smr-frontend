<script lang="ts">
  import type { Mod } from '$lib/generated';
  import { markdown } from '$lib/utils/markdown';
  import { getTranslate, T } from '@tolgee/svelte';

  export let mod!: Pick<Mod, 'toggle_network_use' | 'network_use_disclosure'>;

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
      <!-- TODO should we keep the boolean? -->
      {#if mod?.toggle_network_use}
        <p class="italic"><T keyName="mod.network_disclosure.intro_message" /></p>
        {#if mod?.network_use_disclosure}
          <div>
            {#await markdown(mod.network_use_disclosure) then rendered}
              <!-- eslint-disable-next-line -->
              {@html rendered}
            {/await}
          </div>
        {:else}
          <p class="italic">ERROR CASE - bool is true but no message, ideally this should be impossible</p>
        {/if}
      {:else}
        <p class="italic"><T keyName="mod.network_disclosure.no_network_usage" /></p>
      {/if}
    </div>
  </section>
</div>
