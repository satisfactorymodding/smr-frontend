<script lang="ts">
  import { AiUseDisclosureType, type Mod } from '$lib/generated';
  import { getTranslate, T } from '@tolgee/svelte';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { markdown } from '$lib/utils/markdown';

  export let mod!: Pick<Mod, 'ai_use_disclosure'>;

  const getIcon = (disclosure?: AiUseDisclosureType) => {
    if (disclosure === undefined || disclosure === AiUseDisclosureType.NoDisclosure) {
      return 'question_mark';
    } else {
      return {
        [AiUseDisclosureType.NoAiUsage]: 'person',
        [AiUseDisclosureType.AiUsage]: 'auto_awesome',
        [AiUseDisclosureType.RuntimeAiUsage]: 'assistant'
      }[disclosure];
    }
  };

  $: hasDescription =
    mod.ai_use_disclosure?.disclosure_type == AiUseDisclosureType.AiUsage ||
    mod.ai_use_disclosure?.disclosure_type == AiUseDisclosureType.RuntimeAiUsage;

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
          {getIcon(mod?.ai_use_disclosure?.disclosure_type)}
        </span>
      </h3>
      {#if mod?.ai_use_disclosure === null || mod?.ai_use_disclosure?.disclosure_type === AiUseDisclosureType.NoDisclosure}
        <span>{$t('mod.ai_disclosure.no_ai_use_disclosure.description.user')}</span>
      {:else if mod?.ai_use_disclosure?.disclosure_type === AiUseDisclosureType.NoAiUsage}
        <span class="italic">{$t('mod.ai_disclosure.no_ai_use.description.user')}</span>
      {:else if mod?.ai_use_disclosure?.disclosure_type === AiUseDisclosureType.AiUsage}
        <span class="italic">{$t('mod.ai_disclosure.ai_use.description.user')}</span>
      {:else if mod?.ai_use_disclosure?.disclosure_type === AiUseDisclosureType.RuntimeAiUsage}
        <span class="italic">{$t('mod.ai_disclosure.runtime_ai_use.description.user')} </span>
      {/if}
      {#if hasDescription}
        <div class="card p-2">
          {#await markdown(mod?.ai_use_disclosure?.disclosure_string ?? 'Invalid State!') then rendered}
            <!-- eslint-disable-next-line -->
            {@html rendered}
          {/await}
        </div>
      {/if}
      <br />
      <button
        class="variant-ringed-surface variant-glass-surface btn btn-md"
        on:click={() => goto(base + '/content-policy')}>
        <span class="material-icons">verified_user</span>
        <span>{$t('content-policy')}</span>
      </button>
    </div>
  </section>
</div>
