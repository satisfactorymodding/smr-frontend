<script lang="ts">
  import { getTranslate, T } from '@tolgee/svelte';
  import { base } from '$app/paths';
  import { AiChoiceRequiresDescription, AiDisclosureChoice, type FormAiDisclosure } from '$lib/models/mods';

  const optionTranslationKeys: Record<AiDisclosureChoice, string> = {
    [AiDisclosureChoice.Unspecified]: 'mod.ai_disclosure.unspecified_disclosure.option.developer',
    [AiDisclosureChoice.NoAiUsage]: 'mod.ai_disclosure.no_ai_usage.option.developer',
    [AiDisclosureChoice.AiUsage]: 'mod.ai_disclosure.ai_usage.option.developer',
    [AiDisclosureChoice.RuntimeAiUsage]: 'mod.ai_disclosure.runtime_ai_usage.option.developer'
  };
  // Controls presentation order (generated code alphabetizes them)
  const dropdown_options = Object.keys(optionTranslationKeys) as Array<AiDisclosureChoice>;

  const descriptionTranslationKeys: Record<AiDisclosureChoice, string> = {
    [AiDisclosureChoice.Unspecified]: 'mod.ai_disclosure.no_disclosure.description.developer',
    [AiDisclosureChoice.NoAiUsage]: 'mod.ai_disclosure.no_ai_usage.description.developer',
    [AiDisclosureChoice.AiUsage]: 'mod.ai_disclosure.ai_usage.description.developer',
    [AiDisclosureChoice.RuntimeAiUsage]: 'mod.ai_disclosure.runtime_ai_usage.description.developer'
  };

  const prefilled_ai_use_disclosure: FormAiDisclosure = {
    choice: AiDisclosureChoice.Unspecified
  };

  export let ai_disclosure: FormAiDisclosure = null;
  $: if (ai_disclosure == null) {
    ai_disclosure = prefilled_ai_use_disclosure;
  }

  export const { t } = getTranslate();
</script>

<label class="label">
  <span class="underline decoration-dotted" title={$t('mod.ai_disclosure.header.tooltip')}
    ><T keyName="mod.ai_disclosure.header.developer" /></span>
  <select bind:value={ai_disclosure.choice} class="select" style="margin-bottom: 10px">
    {#each dropdown_options as state}
      <option value={state}><T keyName={optionTranslationKeys[state]} /></option>
    {/each}
  </select>
  <p
    class="compatibility-state-description pb-4"
    class:text-warning-500={ai_disclosure.choice == AiDisclosureChoice.Unspecified}>
    <T keyName={descriptionTranslationKeys[ai_disclosure.choice]} />
  </p>
  <a
    href={base + '/content-policy'}
    target="_blank"
    rel="noopener noreferrer"
    class="variant-ringed-surface variant-glass-surface btn btn-md mt-2">
    <span class="material-icons">verified_user</span>
    <span>{$t('content-policy')}</span>
  </a>
  <div class="p-2"></div>
  {#if AiChoiceRequiresDescription(ai_disclosure.choice)}
    <div class="grid grid-flow-row gap-2">
      <label class="label">
        <span>{$t('mod.ai_disclosure.developer.description_required.header')} *</span>
        <textarea
          class="textarea p-4"
          bind:value={ai_disclosure.message}
          required
          placeholder={$t('mod.ai_disclosure.developer.description_required.placeholder')} />
      </label>
    </div>
  {/if}
</label>
