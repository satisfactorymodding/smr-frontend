<script lang="ts">
  import { createForm } from 'felte';
  import { validator } from '@felte/validator-zod';
  import { svelteReporter, ValidationMessage } from '@felte/reporter-svelte';
  import type { ModData } from '$lib/models/mods';
  import { modSchema } from '$lib/models/mods';
  import { trimNonSchema } from '$lib/utils/forms';
  import { markdown } from '$lib/utils/markdown';
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';
  import Button from '@smui/button';

  export let onSubmit: (data: ModData) => void;
  export let initialValues: ModData = {
    full_description: '',
    mod_reference: '',
    name: '',
    short_description: '',
    source_url: ''
  };
  export let submitText = 'Create';

  export let editing = false;

  const { form, data } = createForm<ModData>({
    initialValues: initialValues,
    extend: [validator, svelteReporter],
    validateSchema: modSchema,
    onSubmit: (data) => onSubmit(trimNonSchema(data, modSchema))
  });

  $: preview = ($data.full_description as string) || '';
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
      <Textfield bind:value={$data.mod_reference} label="Mod Reference" required disabled={editing}>
        <HelperText persistent={!editing} slot="helper">
          {#if !editing}
            Warning! You will not be able to change this after creating the mod! Please ensure this is a unique modifier
            that closely matches the name of your mod!
          {/if}
        </HelperText>
      </Textfield>
      <ValidationMessage for="mod_reference" let:messages={message}>
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
        <Textfield textarea bind:value={$data.full_description} label="Full Description" required input$rows={10} />
        <ValidationMessage for="full_description" let:messages={message}>
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

    <div class="grid grid-flow-row gap-2">
      <label for="logo">Logo:</label>
      <input
        id="logo"
        class="base-input"
        name="logo"
        type="file"
        accept="image/png,image/jpeg,image/gif"
        placeholder="Logo"
      />
      <ValidationMessage for="logo" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    <div class="grid grid-flow-row gap-2">
      <Textfield bind:value={$data.source_url} label="Source URL" />
      <ValidationMessage for="source_url" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
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
