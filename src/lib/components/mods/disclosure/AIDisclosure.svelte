<script lang="ts">
  import type { Mod } from '$lib/generated';
  import { markdown } from '$lib/utils/markdown';
  import { getTranslate, T } from '@tolgee/svelte';

  export let mod!: Pick<Mod, 'ai_use_disclosure_type' | 'ai_use_disclosure'>;

  export const { t } = getTranslate();
</script>

<div class="card p-4">
  <section>
    <div class="break-words text-lg">
      <h3 class="my-4 text-2xl font-bold underline decoration-dotted" title={$t('mod.ai_disclosure.header.tooltip')}>
        <T keyName="mod.ai_disclosure.header" />
      </h3>
      {#if mod?.ai_use_disclosure_type === ''}
        <span
          ><strong>{$t('mod.ai_disclosure.ai_use')}: </strong>
          {$t('mod.ai_disclosure.no_type')}</span
        ><br />
      {:else}
        <span
          ><strong>{$t('mod.ai_disclosure.ai_use')}: </strong>
          <T keyName="mod.ai_disclosure.{mod.ai_use_disclosure_type}" /></span
        ><br />
      {/if}
      {#if mod?.ai_use_disclosure === ''}
        <strong>{$t('mod.ai_disclosure.no_description')}</strong>
      {:else}
        <div>
          <strong>{$t('mod.ai_disclosure.description')}</strong>
          {#await markdown(mod.ai_use_disclosure) then rendered}
            <!-- eslint-disable-next-line -->
            {@html rendered}
          {/await}
        </div>
      {/if}
    </div>
  </section>
</div>
