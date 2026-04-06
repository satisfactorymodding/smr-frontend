<script lang="ts">
  import { getTolgee, getTranslate, T } from '@tolgee/svelte';
  import { AiUseDisclosureType, type AiUseDisclosureInfo } from '$lib/generated';

  const prefilled_ai_use_disclosure = {
    disclosure_type: AiUseDisclosureType.NoDisclosure,
    disclosure_string: ''
  };

  let temp_disclosure_string = null;

  export let ai_disclosure: AiUseDisclosureInfo | null = null;
  $: if (ai_disclosure == null) {
    ai_disclosure = prefilled_ai_use_disclosure;
  }

  const enableAIDisclosureText = () => {
    document.getElementById('ai_disclosure').style.display = 'block';
    ai_disclosure.disclosure_string = temp_disclosure_string;
  };

  const disableAIDisclosureText = () => {
    document.getElementById('ai_disclosure').style.display = 'none';
    temp_disclosure_string = ai_disclosure.disclosure_string;
    ai_disclosure.disclosure_string = '';
  };

  export const { t } = getTranslate();
  export const tolgee = getTolgee().value;
</script>

<label class="label">
  <span class="underline decoration-dotted"><T keyName="mod.ai_disclosure.usage_question" /></span>
  <select
    bind:value={ai_disclosure.disclosure_type}
    on:change={() => {
      ai_disclosure.disclosure_type != 'no_ai_usage' && ai_disclosure.disclosure_type != 'no_disclosure'
        ? enableAIDisclosureText()
        : disableAIDisclosureText();
    }}
    class="input select grid grid-flow-row gap-2"
    style="margin-bottom: 10px">
    <option selected value="no_disclosure">{$t('mod.ai_disclosure.unspecified_disclosure')}</option>
    <option value="no_ai_usage">{$t('mod.ai_disclosure.no_ai_usage')}</option>
    <option value="ai_usage">{$t('mod.ai_disclosure.ai_usage')}</option>
    <option value="runtime_ai_usage">{$t('mod.ai_disclosure.runtime_ai_usage')}</option>
  </select>
  <p
    class="compatibility-state-description pb-4 {ai_disclosure.disclosure_type == 'no_disclosure'
      ? 'text-warning-500'
      : ''}">
    <T keyName="mod_ai_disclosure.{ai_disclosure.disclosure_type}.description" />
  </p>
  {#if ai_disclosure.disclosure_type === 'no_ai_usage' || ai_disclosure.disclosure_type === 'no_disclosure'}
    <div class="grid grid-flow-row gap-2" id="ai_disclosure" style="display:none">
      <label class="label">
        <span class="underline decoration-dotted">{$t('mod.ai_disclosure.usage_question_full')} *</span>
        <input
          type="text"
          id="ai_disclosure_text"
          bind:value={ai_disclosure.disclosure_string}
          placeholder={$t('mod.network_disclosure.developer.description.placeholder')}
          class="input p-2" />
      </label>
    </div>
  {:else}
    <div class="grid grid-flow-row gap-2" id="ai_disclosure">
      <label class="label">
        <span class="underline decoration-dotted">{$t('mod.ai_disclosure.usage_question_full')} *</span>
        <input
          type="text"
          id="ai_disclosure_text"
          bind:value={ai_disclosure.disclosure_string}
          placeholder={$t('mod.network_disclosure.developer.description.placeholder')}
          class="input p-2" />
      </label>
    </div>
  {/if}
</label>
