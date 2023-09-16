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

  export let onSubmit: (data: GuideData) => void;
  export let initialValues: GuideData | undefined = {
    name: '',
    guide: '',
    short_description: ''
  };
  export let submitText = $t('entry.create');

  const { form, data } = createForm<GuideData>({
    initialValues: initialValues,
    extend: [validator({ schema: guideSchema }), reporter],
    onSubmit: (submitted: GuideData) => onSubmit(trimNonSchema(submitted, guideSchema))
  });

  $: preview = ($data.guide as string) || '';
</script>

<form use:form>
  <div class="grid grid-flow-row gap-6">
    <div class="grid grid-flow-row gap-2">
      <label class="label">
        <span>{$t('entry.name')}</span>
        <input type="text" bind:value={$data.name} required class="input p-2" />
      </label>
      <ValidationMessage for="name" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    <div class="grid grid-flow-row gap-2">
      <label class="label">
        <span>{$t('entry.short-description')}</span>
        <input type="text" bind:value={$data.short_description} required class="input p-2" />
      </label>
      <ValidationMessage for="short_description" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    <div class="grid gap-6 split">
      <div class="grid grid-flow-row gap-2 auto-rows-max">
        <label class="label">
          <span>{$t('guide')}</span>
          <textarea class="vertical-textarea textarea p-2" bind:value={$data.guide} required rows={10} />
        </label>
        <ValidationMessage for="guide" let:messages={message}>
          <span class="validation-message">{message || ''}</span>
        </ValidationMessage>
      </div>
      <div class="grid grid-flow-row gap-2 auto-rows-max">
        <span>{$t('preview')}:</span>
        {#await markdown(preview) then previewRendered}
          <!-- eslint-disable -->
          <div class="markdown-content right">{@html previewRendered}</div>
        {/await}
      </div>
    </div>

    <div>
      <button class="btn variant-ghost-primary" type="submit">{submitText}</button>
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
