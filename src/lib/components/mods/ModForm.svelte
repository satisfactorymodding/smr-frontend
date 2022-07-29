<script lang="ts">
  import { createForm } from 'felte';
  import { validator } from '@felte/validator-zod';
  import { reporter, ValidationMessage } from '@felte/reporter-svelte';
  import type { ModData } from '$lib/models/mods';
  import { modSchema } from '$lib/models/mods';
  import { trimNonSchema } from '$lib/utils/forms';
  import { markdown } from '$lib/utils/markdown';
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';
  import Button, { Label } from '@smui/button';
  import ModAuthor from '$lib/components/mods/ModAuthor.svelte';
  import FormField from '@smui/form-field';
  import Switch from '@smui/switch';
  import { CompatibilityState } from '$lib/generated';
  import ModCompatibility from '$lib/components/mods/compatibility/ModCompatibilityEdit.svelte';

  export let onSubmit: (data: ModData) => void;
  export let initialValues: ModData = {
    full_description: '',
    mod_reference: '',
    name: '',
    short_description: '',
    source_url: '',
    hidden: false,
    compatibility: {
      EA: {
        state: CompatibilityState.Works,
        note: ''
      },
      EXP: {
        state: CompatibilityState.Works,
        note: ''
      }
    }
  };
  export let submitText = 'Create';

  export let editing = false;

  const { form, data } = createForm<ModData>({
    initialValues: initialValues,
    extend: [validator({ schema: modSchema }), reporter],
    onSubmit: (submitted: ModData) => onSubmit(trimNonSchema(submitted, modSchema))
  });

  // The GQL type NewMod does not have a compatibility field.
  // We remove the field from the data so that the GQL request is valid
  $: {
    if (!editing) {
      delete $data.compatibility;
    }
  }

  $: preview = ($data.full_description as string) || '';

  const addAuthor = () => {
    $data.authors.push({ role: 'editor', user_id: '', key: '' });
    $data.authors = $data.authors;
  };

  const removeAuthor = (i: number) => {
    $data.authors.splice(i, 1);
    $data.authors = $data.authors;
  };

  let editCompatibility = false;
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
        <Textfield
          textarea
          class="vertical-textarea"
          bind:value={$data.full_description}
          label="Full Description"
          required
          input$rows={10} />
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
        placeholder="Logo" />
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

    <div class="grid grid-flow-row gap-2">
      <FormField>
        <Switch bind:checked={$data.hidden} />
        <span slot="label">Hidden</span>
      </FormField>
      <ValidationMessage for="hidden" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>
    {#if editing}
      <div>
        <FormField align="start">
          <Switch bind:checked={editCompatibility} on:SMUISwitch:change={() => ($data.compatibility = null)} />
          <span>Edit compatibility information</span>
        </FormField>
      </div>

      {#if editCompatibility}
        <ModCompatibility bind:compatibilityInfo={$data.compatibility} />
      {/if}

      <div class="grid grid-flow-row gap-2">
        <div class="flex items-baseline">
          <h4 class="mr-4">Authors</h4>
          <Button type="button" on:click={addAuthor}>
            <Label>Add</Label>
          </Button>
        </div>
        {#each $data.authors as author, i}
          <div class="flex items-baseline">
            {#if $data.authors[i].user_id}
              <ModAuthor id={$data.authors[i].user_id} />
            {/if}
            <Textfield
              bind:value={$data.authors[i].user_id}
              label="User ID"
              class="mr-4 w-full"
              disabled={author.role === 'creator'} />
            {#if author.role !== 'creator'}
              <Button type="button" on:click={() => removeAuthor(i)} variant="raised">
                <Label>Remove</Label>
              </Button>
            {/if}
          </div>
        {/each}
      </div>
    {/if}

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
