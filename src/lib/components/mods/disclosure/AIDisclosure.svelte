<script lang="ts">
  import type { Mod } from '$lib/generated';
  import { markdown } from '$lib/utils/markdown';
  import { getTranslate } from '@tolgee/svelte';

  export let mod!: Pick<Mod, 'ai_use_disclosure_type' | 'ai_use_disclosure'>;

  export const { t } = getTranslate();
</script>

<div class="card p-4">
  <section>
    <div class="break-words text-lg">
      {#if mod?.ai_use_disclosure_type === ''}
        <span
          ><strong>{$t('AI Use')}:</strong>
          {$t('The mod developer has not yet provided a disclosure for their AI usage')}</span
        ><br />
      {:else}
        <span><strong>{$t('AI Use')}:</strong> {mod.ai_use_disclosure_type}</span><br />
      {/if}
      {#if mod?.ai_use_disclosure === ''}
        <p>{$t('The mod developer did not describe their AI usage')}</p>
      {:else}
        <div>
          <strong>{$t('The mod developer described their AI usage as such:')}</strong>
          {#await markdown(mod.ai_use_disclosure) then rendered}
            <!-- eslint-disable-next-line -->
            {@html rendered}
          {/await}
        </div>
      {/if}
    </div>
  </section>
</div>
