<script lang="ts">
  import { AiUseDisclosureType, type Mod } from '$lib/generated';
  import { getTranslate, T } from '@tolgee/svelte';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { markdown } from '$lib/utils/markdown';
  import { AiChoiceRequiresDescription } from '$lib/models/mods';

  export let mod!: Pick<Mod, 'ai_use_disclosure'>;

  const getIcon = (disclosure?: AiUseDisclosureType) => {
    if (disclosure === undefined) {
      return 'question_mark';
    } else {
      return {
        [AiUseDisclosureType.NoAiUsage]: 'person',
        [AiUseDisclosureType.AiUsage]: 'auto_awesome',
        [AiUseDisclosureType.RuntimeAiUsage]: 'assistant'
      }[disclosure];
    }
  };

  $: disclosure = mod.ai_use_disclosure;

  export const { t } = getTranslate();
</script>

<div class="card p-4">
  <section>
    <div class="break-words text-lg">
      <h3 class="my-4 flex items-center justify-between text-2xl">
        <span class="truncate font-bold underline decoration-dotted" title={$t('mod.ai_disclosure.header.tooltip')}>
          <T keyName="mod.ai_disclosure.header" />
        </span>
        <span
          title={$t('symbol_for_status.tooltip')}
          class="material-icons variant-filled-surface badge-icon p-4 text-2xl">
          {getIcon(disclosure?.disclosure_type)}
        </span>
      </h3>
      <div>
        {#if disclosure === null}
          <span>{$t('mod.ai_disclosure.no_ai_use_disclosure.description.user')}</span>
        {:else if disclosure?.disclosure_type === AiUseDisclosureType.NoAiUsage}
          <span class="italic">{$t('mod.ai_disclosure.no_ai_use.description.user')}</span>
        {:else if disclosure?.disclosure_type === AiUseDisclosureType.AiUsage}
          <span class="italic">{$t('mod.ai_disclosure.ai_use.description.user')}</span>
        {:else if disclosure?.disclosure_type === AiUseDisclosureType.RuntimeAiUsage}
          <span class="italic">{$t('mod.ai_disclosure.runtime_ai_use.description.user')} </span>
        {/if}
        {#if AiChoiceRequiresDescription(disclosure?.disclosure_type)}
          <div class="card p-2">
            {#await markdown(disclosure?.message ?? 'Invalid State!') then rendered}
              <!-- eslint-disable-next-line -->
              {@html rendered}
            {/await}
          </div>
        {/if}
      </div>
      <button
        class="variant-ringed-surface variant-glass-surface btn btn-md mt-2"
        on:click={() => goto(base + '/content-policy')}>
        <span class="material-icons">verified_user</span>
        <span>{$t('content-policy')}</span>
      </button>
    </div>
  </section>
</div>
