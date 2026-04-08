<script lang="ts">
  import type { Mod } from '$lib/generated';
  import { getTranslate, T } from '@tolgee/svelte';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';

  export let mod!: Pick<Mod, 'ai_use_disclosure'>;

  export const { t } = getTranslate();
</script>

<div class="card p-4">
  <section>
    <div class="break-words text-lg">
      <h3 class="my-4 text-2xl font-bold underline decoration-dotted" title={$t('mod.ai_disclosure.header.tooltip')}>
        <T keyName="mod.ai_disclosure.header" />
      </h3>
      {#if mod?.ai_use_disclosure === null || mod?.ai_use_disclosure.disclosure_type === 'no_disclosure'}
        <span>{$t('mod.ai_disclosure.no_ai_use_disclosure.description.user')}</span>
        <br />
      {:else if mod?.ai_use_disclosure.disclosure_type === 'no_ai_usage'}
        <span class="italic">{$t('mod.ai_disclosure.no_ai_use.description.user')}</span>
        <br />
      {:else if mod?.ai_use_disclosure.disclosure_type === 'ai_usage'}
        <span class="italic"
          >{$t('mod.ai_disclosure.ai_use.description.user')}
          <T keyName={mod.ai_use_disclosure.disclosure_string} /></span
        ><br />
      {:else if mod?.ai_use_disclosure.disclosure_type === 'runtime_ai_usage'}
        <span class="italic"
          >{$t('mod.ai_disclosure.runtime_ai_use.description.user')}
          <T keyName={mod.ai_use_disclosure.disclosure_string} /></span
        ><br />
      {/if}
      <button
        class="variant-ringed-surface variant-glass-surface btn btn-md m-6"
        on:click={() => goto(base + '/content-policy')}>
        <span>{$t('content-policy')}</span>
      </button>
    </div>
  </section>
</div>
