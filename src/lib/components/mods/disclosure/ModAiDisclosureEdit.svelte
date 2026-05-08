<script lang="ts">
  import { getTolgee, getTranslate, T } from '@tolgee/svelte';
  import { AiUseDisclosureType, type AiUseDisclosureInfo } from '$lib/generated';
  import { base } from '$app/paths';

  const prefilled_ai_use_disclosure = {
    disclosure_type: AiUseDisclosureType.NoDisclosure,
    disclosure_string: ''
  };

  export let ai_disclosure: AiUseDisclosureInfo = null;
  $: if (ai_disclosure == null) {
    ai_disclosure = prefilled_ai_use_disclosure;
  }

  $: requiresDescription =
    ai_disclosure.disclosure_type == AiUseDisclosureType.AiUsage ||
    ai_disclosure.disclosure_type == AiUseDisclosureType.RuntimeAiUsage;

  export const { t } = getTranslate();
  export const tolgee = getTolgee().value;
</script>

<label class="label">
  <span class="underline decoration-dotted" title={$t('mod.ai_disclosure.header.tooltip')}
    ><T keyName="mod.ai_disclosure.header.developer" /></span>
  <select bind:value={ai_disclosure.disclosure_type} class="select" style="margin-bottom: 10px">
    <option value={AiUseDisclosureType.NoDisclosure}
      >{$t('mod.ai_disclosure.unspecified_disclosure.option.developer')}</option>
    <option value={AiUseDisclosureType.NoAiUsage}>{$t('mod.ai_disclosure.no_ai_usage.option.developer')}</option>
    <option value={AiUseDisclosureType.AiUsage}>{$t('mod.ai_disclosure.ai_usage.option.developer')}</option>
    <option value={AiUseDisclosureType.RuntimeAiUsage}
      >{$t('mod.ai_disclosure.runtime_ai_usage.option.developer')}</option>
  </select>
  <p
    class="compatibility-state-description pb-4 {ai_disclosure.disclosure_type == AiUseDisclosureType.NoDisclosure
      ? 'text-warning-500'
      : ''}">
    <T keyName="mod.ai_disclosure.{ai_disclosure.disclosure_type}.description.developer" />
  </p>
  <button class="variant-ringed-surface variant-glass-surface btn btn-md m-6">
    <a href={base + '/content-policy'} target="_blank" rel="noopener noreferrer">
      <span>{$t('content-policy')}</span>
    </a></button>
  {#if requiresDescription}
    <div class="grid grid-flow-row gap-2">
      <label class="label">
        <span>{$t('mod.ai_disclosure.developer.description_required.header')} *</span>
        <textarea
          class="textarea p-4"
          bind:value={ai_disclosure.disclosure_string}
          required
          placeholder={$t('mod.ai_disclosure.developer.description_required.placeholder')} />
      </label>
    </div>
  {/if}
</label>
