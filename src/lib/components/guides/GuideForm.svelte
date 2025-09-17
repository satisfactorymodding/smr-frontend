<script lang="ts">
  import { createForm } from 'felte';
  import { validator } from '@felte/validator-zod';
  import { reporter, ValidationMessage } from '@felte/reporter-svelte';
  import type { GuideData } from '$lib/models/guides';
  import { guideSchema } from '$lib/models/guides';
  import { trimNonSchema } from '$lib/utils/forms';
  import { markdown } from '$lib/utils/markdown';
  import { getTranslate } from '@tolgee/svelte';

  export const { t } = getTranslate();

  interface Props {
    onSubmit: (data: GuideData) => void;
    initialValues?: GuideData | undefined;
    submitIcon: string;
    submitText?: string;
  }

  let {
    onSubmit,
    initialValues = {
      name: '',
      guide: '',
      short_description: ''
    },
    submitIcon,
    submitText = $t('entry.create')
  }: Props = $props();

  const { form, data } = createForm<GuideData>({
    initialValues: initialValues,
    extend: [validator({ schema: guideSchema }), reporter],
    onSubmit: (submitted: GuideData) => onSubmit(trimNonSchema(submitted, guideSchema))
  });

  let preview = $derived(($data.guide as string) || '');
</script>

<form use:form>
  <div class="grid grid-flow-row gap-6">
    <div class="grid grid-flow-row gap-2">
      <label class="label">
        <span>{$t('entry.name')} *</span>
        <input type="text" bind:value={$data.name} required class="input p-2" />
      </label>
      <ValidationMessage for="name">
        {#snippet children({ messages: message })}
          <span class="validation-message">{message || ''}</span>
        {/snippet}
      </ValidationMessage>
    </div>

    <div class="grid grid-flow-row gap-2">
      <label class="label">
        <span>{$t('entry.short-description')} *</span>
        <input type="text" bind:value={$data.short_description} required class="input p-2" />
      </label>
      <ValidationMessage for="short_description">
        {#snippet children({ messages: message })}
          <span class="validation-message">{message || ''}</span>
        {/snippet}
      </ValidationMessage>
    </div>

    <div class="split grid gap-6">
      <div class="grid grid-flow-row auto-rows-max gap-2">
        <label class="label">
          <span>{$t('guide')} *</span>
          <textarea class="vertical-textarea textarea p-2" bind:value={$data.guide} required rows={10}></textarea>
        </label>
        <ValidationMessage for="guide">
          {#snippet children({ messages: message })}
            <span class="validation-message">{message || ''}</span>
          {/snippet}
        </ValidationMessage>
      </div>
      <div class="grid grid-flow-row auto-rows-max gap-2">
        <span>{$t('preview')}:</span>
        {#await markdown(preview) then previewRendered}
          <!-- eslint-disable -->
          <div class="markdown-content right">{@html previewRendered}</div>
        {/await}
      </div>
    </div>

    <div>
      <button class="preset-tonal-primary border-primary-500 btn border" type="submit">
        <span class="material-icons pr-2">{submitIcon}</span>
        {submitText}</button>
    </div>
  </div>
</form>

<style lang="postcss">
  .split {
    grid-template-columns: 50% 50%;

    & .right {
      max-height: 75vh;
      overflow: auto;
    }
  }
</style>
