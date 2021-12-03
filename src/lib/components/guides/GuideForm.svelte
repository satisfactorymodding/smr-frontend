<script lang="ts">
  import { createForm } from 'felte';
  import { validator } from '@felte/validator-zod';
  import { svelteReporter, ValidationMessage } from '@felte/reporter-svelte';
  import type { GuideData } from '$lib/models/guides';
  import { guideSchema } from '$lib/models/guides';
  import { trimNonSchema } from '$lib/utils/forms';
  import { markdown } from '$lib/utils/markdown';

  export let onSubmit: (data: GuideData) => void;
  export let initialValues: GuideData | undefined = undefined;
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
      <label for="name">Name:</label>
      <input id="name" class="base-input" name="name" type="text" placeholder="Name" />
      <ValidationMessage for="name" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    <div class="grid grid-flow-row gap-2">
      <label for="short_description">Short Description:</label>
      <input
        id="short_description"
        class="base-input"
        name="short_description"
        type="text"
        placeholder="Short Description"
      />
      <ValidationMessage for="short_description" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    <div class="grid gap-6 split">
      <div class="grid grid-flow-row gap-2 auto-rows-max">
        <label for="guide">Guide:</label>
        <textarea class="base-input" id="guide" name="guide" placeholder="Guide" rows="10" />
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
      <input type="submit" value={submitText} class="px-4 py-2 rounded text-base bg-blue-500 cursor-pointer" />
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
