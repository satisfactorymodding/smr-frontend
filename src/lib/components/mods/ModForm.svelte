<script lang="ts">
  import {createForm} from 'felte';
  import {validator} from '@felte/validator-zod';
  import {svelteReporter, ValidationMessage} from '@felte/reporter-svelte';
  import type {ModData} from "$lib/models/mods";
  import {modSchema} from "$lib/models/mods";
  import {trimNonSchema} from "$lib/utils/forms";
  import {markdown} from '$lib/utils/markdown';

  export let onSubmit: (data: ModData) => void;
  export let initialValues: ModData | undefined = undefined;
  export let submitText = 'Create';

  export let editing = false;

  const {form, data} = createForm<ModData>({
    initialValues: initialValues,
    extend: [validator, svelteReporter],
    validateSchema: modSchema,
    onSubmit: (data) => onSubmit(trimNonSchema(data, modSchema)),
  });

  $: preview = ($data.full_description as string) || '';
</script>

<form use:form>
  <div class="grid grid-flow-row gap-6">
    <div class="grid grid-flow-row gap-2">
      <label for="name">Name:</label>
      <input id="name" class="base-input" name="name" type="text" placeholder="Name">
      <ValidationMessage for="name" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    <div class="grid grid-flow-row gap-2">
      <label for="mod_reference">Mod Reference:</label>
      <input id="mod_reference" class="base-input" name="mod_reference" type="text" placeholder="Mod Reference"
             readonly={editing}>
      <ValidationMessage for="mod_reference" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    <div class="grid grid-flow-row gap-2">
      <label for="short_description">Short Description:</label>
      <input id="short_description" class="base-input" name="short_description" type="text"
             placeholder="Short Description">
      <ValidationMessage for="short_description" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    <div class="grid gap-6 split">
      <div class="grid grid-flow-row gap-2 auto-rows-max">
        <label for="full_description">Full Description:</label>
        <textarea class="base-input" id="full_description" name="full_description" placeholder="Full Description"
                  rows="10"></textarea>
        <ValidationMessage for="full_description" let:messages={message}>
          <span class="validation-message">{message || ''}</span>
        </ValidationMessage>
      </div>
      <div class="grid grid-flow-row gap-2 auto-rows-max">
        <span>Preview:</span>
        {#await markdown(preview) then previewRendered}
          <div class="markdown-content right">{ @html previewRendered}</div>
        {/await}
      </div>
    </div>

    <div class="grid grid-flow-row gap-2">
      <label for="logo">Logo:</label>
      <input id="logo" class="base-input" name="logo" type="file" accept="image/png,image/jpeg,image/gif"
             placeholder="Logo">
      <ValidationMessage for="logo" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    <div class="grid grid-flow-row gap-2">
      <label for="source_url">Source URL:</label>
      <input id="source_url" class="base-input" name="source_url" type="text" placeholder="Source URL">
      <ValidationMessage for="source_url" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    <div>
      <input type="submit" value={submitText} class="px-4 py-2 rounded text-base bg-blue-500 cursor-pointer">
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
