<script lang="ts">
  import { createForm } from 'felte';
  import { validator } from '@felte/validator-zod';
  import { svelteReporter, ValidationMessage } from '@felte/reporter-svelte';
  import { trimNonSchema } from '$lib/utils/forms';
  import { markdown } from '$lib/utils/markdown';
  import type { SMLVersionData } from '$lib/models/sml-versions';
  import { smlVersionSchema, smlLinksSchema } from '$lib/models/sml-versions';
  import Textfield from '@smui/textfield';
  import Button from '@smui/button';
  import { VersionStabilities } from '$lib/generated';
  import Select, { Option } from '@smui/select';

  export let onSubmit: (data: SMLVersionData) => void;

  export let initialValues: SMLVersionData = {
    link: '',
    bootstrap_version: '0.0.0',
    date: '',
    changelog: '',
    satisfactory_version: 0,
    stability: VersionStabilities.Alpha,
    links: [{ SMLVersionLinkID: '', platform: '', side: '', link: '' }],
    version: ''
  };
  export let submitText = 'Create';

  const { form, data, addField, unsetField } = createForm<SMLVersionData>({
    initialValues: initialValues,
    extend: [validator, svelteReporter],
    validateSchema: smlVersionSchema,
    onSubmit: (data: SMLVersionData) => onSubmit(trimNonSchema(data, smlVersionSchema))
  });

  $: links = $data.links;

  function removeLinks(index) {
    return () => unsetField(`links.${index}`);
  }

  function addLinks(index) {
    return () => addField(`links`, { SMLVersionLinkID: '', platform: '', side: '', link: '' }, index);
  }

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

    <div class="grid grid-flow-row gap-2">
      <Textfield bind:value={$data.bootstrap_version} label="Bootstrap Version" required />
      <ValidationMessage for="bootstrap_version" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    <div>
      <Select type="radio" bind:value={$data.stability} label="Stability">
        <Option value="alpha">Alpha</Option>
        <Option value="beta">Beta</Option>
        <Option value="release">Release</Option>
      </Select>
    </div>

    <div class="grid gap-6 split">
      <div class="grid grid-flow-row gap-2 auto-rows-max">
        <Textfield
          textarea
          class="vertical-textarea"
          bind:value={$data.changelog}
          label="Changelog"
          required
          input$rows={10}
        />
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

    <div class="grid grid-flow-row gap-2">
      {#each links as data_link, index}
        <div class="gap-6">

          <Select bind:value={links[index].platform} label="Platform">
            <Option value="Windows">Windows</Option>
            <Option value="Linux">Linux</Option>
          </Select>

          <Select bind:value={links[index].platform} label="Client/Server">
            <Option value="Client">Client</Option>
            <Option value="Server">Server</Option>
          </Select>

          <!-- For Dean's Radio Buttons

          <label>
            Windows
            <input id={`links[${index}].platform`} name={`links[${index}].platform`} value="Windows" type="radio" />
          </label>
          <label>
            Linux
            <input id={`links[${index}].platform`} name={`links[${index}].platform`} value="Linux" type="radio" />
          </label>

          <label>
            <input id={`links[${index}].side`} name={`links[${index}].side`} value="Client" type="radio" />
            Client
          </label>
          <label>
            <input id={`links[${index}].side`} name={`links[${index}].side`} value="Server" type="radio" />
            Server
          </label>

        -->

          <Textfield name={`links[${index}].link`} placeholder="URL" bind:value={links[index].link} />

          <Button type="button" on:click={addLinks(index + 1)}> Add </Button>
          <Button type="button" on:click={removeLinks(index)}> Remove </Button>
        </div>
      {/each}

      <Textfield bind:value={$data.link} label="Link" required />
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
