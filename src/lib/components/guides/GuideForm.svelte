<script lang="ts">
  import { createForm } from 'felte';
  import { validator } from '@felte/validator-zod';
  import { svelteReporter, ValidationMessage } from '@felte/reporter-svelte';
  import type { GuideData } from '$lib/models/guides';
  import { guideSchema } from '$lib/models/guides';
  import { trimNonSchema } from '$lib/utils/forms';
  import { markdown } from '$lib/utils/markdown';
  import Textfield from '@smui/textfield';
  import Button from '@smui/button';

  export let onSubmit: (data: GuideData) => void;
  export let initialValues: GuideData | undefined = {
    name: '',
    guide: '',
    short_description: ''
  };
  export let submitText = 'Create';

  const { form, data } = createForm<GuideData>({
    initialValues: initialValues,
    extend: [validator, svelteReporter],
    validateSchema: guideSchema,
    onSubmit: (data) => onSubmit(trimNonSchema(data, guideSchema))
  });

  $: preview = ($data.guide as string) || '';
</script>

<form use:form>
  <div class="grid grid-flow-row gap-6">
    <div class="grid grid-flow-row gap-2">
      <Textfield bind:value={$data.name} label="Name" required />
      <ValidationMessage for="name" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    <div class="grid grid-flow-row gap-2">
      <Textfield bind:value={$data.short_description} label="Short Description" required />
      <ValidationMessage for="short_description" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    <div class="grid gap-6 split">
      <div class="grid grid-flow-row gap-2 auto-rows-max">
        <Textfield textarea class="vertical-textarea" bind:value={$data.guide} label="Guide" required input$rows={10} />
        <ValidationMessage for="guide" let:messages={message}>
          <span class="validation-message">{message || ''}</span>
        </ValidationMessage>
      </div>
      <div class="grid grid-flow-row gap-2 auto-rows-max">
        <span>Preview:</span>
        {#await markdown(preview) then previewRendered}
          <div class="markdown-content right">{@html previewRendered}</div>
        {/await}
      </div>
    </div>

    <div>
      <Button variant="outlined" type="submit">{submitText}</Button>
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
