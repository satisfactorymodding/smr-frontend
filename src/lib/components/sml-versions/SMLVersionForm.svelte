<script lang="ts">
  import { createForm } from 'felte';
  import { validator } from '@felte/validator-zod';
  import { reporter, ValidationMessage } from '@felte/reporter-svelte';
  import { trimNonSchema } from '$lib/utils/forms';
  import { markdown } from '$lib/utils/markdown';
  import type { SMLVersionData } from '$lib/models/sml-versions';
  import { smlVersionSchema } from '$lib/models/sml-versions';
  import Textfield from '@smui/textfield';
  import Button from '@smui/button';
  import { VersionStabilities } from '$lib/generated';
  import Select, { Option } from '@smui/select';

  export let onSubmit: (data: SMLVersionData) => void;

  // export let editing = false;

  export let initialValues: SMLVersionData = {
    link: '',
    date: new Date().toISOString(),
    changelog: '',
    satisfactory_version: 0,
    stability: VersionStabilities.Alpha,
    version: '',
    targets: [{ targetName: 'Windows', link: '' }]
  };
  export let submitText = 'Create';

  const { form, data, addField, unsetField } = createForm<SMLVersionData>({
    initialValues: initialValues,
    extend: [validator({ schema: smlVersionSchema }), reporter],
    onSubmit: (submitted: SMLVersionData) => onSubmit(trimNonSchema(submitted, smlVersionSchema))
  });

  const addTarget = () => {
    addField('targets', { targetName: '', link: '' });
  };

  const removeTarget = (i: number) => {
    unsetField(`targets.${i}`);
  };

  $: preview = ($data.changelog as string) || '';
</script>

<form use:form>
  <div class="grid grid-flow-row gap-6">
    <div class="grid grid-flow-row gap-2">
      <Textfield bind:value={$data.version} label="Version" required />
      <ValidationMessage for="version" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    <div class="grid grid-flow-row gap-2">
      <Textfield bind:value={$data.satisfactory_version} label="Satisfactory Version" required type="number" />
      <ValidationMessage for="satisfactory_version" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    {#if $data.bootstrap_version !== undefined && $data.bootstrap_version !== null}
      <div class="grid grid-flow-row gap-2">
        <Textfield bind:value={$data.bootstrap_version} label="Bootstrap Version" required />
        <ValidationMessage for="bootstrap_version" let:messages={message}>
          <span class="validation-message">{message || ''}</span>
        </ValidationMessage>
      </div>
    {/if}

    <div class="grid grid-flow-row gap-2">
      <Select bind:value={$data.stability} label="Stability">
        <Option value="release">Release</Option>
        <Option value="alpha">Alpha</Option>
        <Option value="beta">Beta</Option>
      </Select>
      <ValidationMessage for="stability" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    <div class="grid gap-6 split">
      <div class="grid grid-flow-row gap-2 auto-rows-max">
        <Textfield
          textarea
          class="vertical-textarea"
          bind:value={$data.changelog}
          label="Changelog"
          required
          input$rows={10} />
        <ValidationMessage for="changelog" let:messages={message}>
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

    <span>Targets:</span>
    <div class="grid grid-flow-row gap-2">
      {#each $data.targets as target, i}
        <div class="flex content-center gap-2">
          <div>
            <Select bind:value={target.targetName} label="Platform">
              <Option value="Windows">Windows Client</Option>
              <Option value="WindowsServer">Windows Server</Option>
              <Option value="LinuxServer">Linux Server</Option>
              <svelte:fragment slot="helperText">
                <ValidationMessage for="targets.{i}.targetName" let:messages={message}>
                  <span class="validation-message">{message || ''}</span>
                </ValidationMessage>
              </svelte:fragment>
            </Select>
          </div>
          <div class="grow">
            <Textfield placeholder="URL" bind:value={target.link} label="URL" class="w-full">
              <svelte:fragment slot="helperText">
                <ValidationMessage for="targets.{i}.link" let:messages={message}>
                  <span class="validation-message">{message || ''}</span>
                </ValidationMessage>
              </svelte:fragment>
            </Textfield>
          </div>
          <Button type="button" disabled={$data.targets.length == 1} on:click={() => removeTarget(i)} class="h-full"
            >Remove</Button>
        </div>
      {/each}
      <Button type="button" on:click={addTarget}>Add target</Button>

      <Textfield bind:value={$data.link} label="Link" />
      <ValidationMessage for="link" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    <div class="grid grid-flow-row gap-2">
      <Textfield bind:value={$data.date} label="Date and Time" required />
      <ValidationMessage for="date" let:messages={message}>
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
