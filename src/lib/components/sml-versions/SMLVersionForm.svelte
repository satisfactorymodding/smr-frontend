<script lang="ts">
  import {createForm} from 'felte';
  import {validator} from '@felte/validator-zod';
  import {svelteReporter, ValidationMessage} from '@felte/reporter-svelte';
  import {trimNonSchema} from "$lib/utils/forms";
  import {markdown} from '$lib/utils/markdown';
  import type {SMLVersionData} from "$lib/models/sml-versions";
  import {smlVersionSchema} from "$lib/models/sml-versions";

  export let onSubmit: (data: SMLVersionData) => void;
  export let initialValues: SMLVersionData | undefined = undefined;
  export let submitText = 'Create';

  const {form, data} = createForm<SMLVersionData>({
    initialValues: initialValues,
    extend: [validator, svelteReporter],
    validateSchema: smlVersionSchema,
    onSubmit: (data) => onSubmit(trimNonSchema(data, smlVersionSchema)),
  });

  $: preview = ($data.changelog as string) || '';
</script>

<form use:form>
  <div class="grid grid-flow-row gap-6">
    <div class="grid grid-flow-row gap-2">
      <label for="version">Version:</label>
      <input id="version" class="base-input" name="version" type="text" placeholder="Version">
      <ValidationMessage for="version" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    <div class="grid grid-flow-row gap-2">
      <label for="satisfactory_version">Satisfactory Version:</label>
      <input id="satisfactory_version" class="base-input" name="satisfactory_version" type="number"
             placeholder="Satisfactory Version">
      <ValidationMessage for="satisfactory_version" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    <div class="grid grid-flow-row gap-2">
      <label for="bootstrap_version">Bootstrap Version:</label>
      <input id="bootstrap_version" class="base-input" name="bootstrap_version" type="text"
             placeholder="Bootstrap Version">
      <ValidationMessage for="bootstrap_version" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    <div class="grid grid-flow-row gap-2">
      <label for="stability">Stability:</label>
      <select id="stability" class="base-input" name="stability">
        <option value="alpha">Alpha</option>
        <option value="beta">Beta</option>
        <option value="release">Release</option>
      </select>
      <ValidationMessage for="stability" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    <div class="grid gap-6 split">
      <div class="grid grid-flow-row gap-2 auto-rows-max">
        <label for="changelog">Changelog:</label>
        <textarea class="base-input" id="changelog" name="changelog" placeholder="Changelog" rows="10"></textarea>
        <ValidationMessage for="changelog" let:messages={message}>
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
      <label for="date">Date and Time:</label>
      <input id="date" class="base-input" name="date" type="text" placeholder="Date and Time">
      <ValidationMessage for="date" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    <div class="grid grid-flow-row gap-2">
      <label for="link">Link:</label>
      <input id="link" class="base-input" name="link" type="text" placeholder="Link">
      <ValidationMessage for="link" let:messages={message}>
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
