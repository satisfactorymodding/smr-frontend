<script lang="ts">
  import { createForm } from 'felte';
  import { validator } from '@felte/validator-zod';
  import { svelteReporter, ValidationMessage } from '@felte/reporter-svelte';
  import { trimNonSchema } from '$lib/utils/forms';
  import { markdown } from '$lib/utils/markdown';
  import type { SMLVersionData } from '$lib/models/sml-versions';
  import { smlVersionSchema } from '$lib/models/sml-versions';
  import Textfield from '@smui/textfield';
  import Button from '@smui/button';
  import Radio from '@smui/radio';
  import { VersionStabilities } from '$lib/generated';
  import Select, { Option } from '@smui/select';

  export let onSubmit: (data: SMLVersionData) => void;

  export let editing = false;

  export let initialValues: SMLVersionData = {
    link: '',
    bootstrap_version: '0.0.0',
    date: '',
    changelog: '',
    satisfactory_version: 0,
    stability: VersionStabilities.Alpha,
    links: [{ SMLVersionLinkID: '', platform: '', link: '' }],
    version: ''
  };
  export let submitText = 'Create';

  const { form, data } = createForm<SMLVersionData>({
    initialValues: initialValues,
    extend: [validator, svelteReporter],
    validateSchema: smlVersionSchema,
    onSubmit: (data: SMLVersionData) => onSubmit(trimNonSchema(data, smlVersionSchema))
  });

  $: links = $data.links;

  const add = () => {
    $data.links = $data.links.concat({ SMLVersionLinkID: '', platform: '', link: '' });
  };

  const remove = (i) => () => {
    $data.links = $data.links.filter((u, index) => index !== i);
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

    {#if $data.bootstrap_version !== '0.0.0'}
      <div class="grid grid-flow-row gap-2">
        <Textfield bind:value={$data.bootstrap_version} label="Bootstrap Version" required />
        <ValidationMessage for="bootstrap_version" let:messages={message}>
          <span class="validation-message">{message || ''}</span>
        </ValidationMessage>
      </div>
    {/if}

    <div class="grid grid-flow-row gap-2 auto-rows-max">
      <Radio bind:group={$data.stability} value="alpha"/>Alpha
      <Radio bind:group={$data.stability} value="beta"/>Beta
      <Radio bind:group={$data.stability} value="release"/>Release
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
        <div class="gap-6 auto-rows-max">
          <Select bind:value={links[index].platform} label="Platform">
            <Option value="WindowsNoEditor">Windows Client</Option>
            <Option value="WindowsServer">Windows Server</Option>
            <Option value="LinuxServer">Linux Server</Option>
          </Select>

          <Textfield name={`links[${index}].link`} placeholder="URL" bind:value={links[index].link} style="min-width: 850px;" label="URL" />

          {#if !editing}
            {#if index === $data.links.length - 1}
              <Button type="button" on:click={add}>Add</Button>
            {/if}
            {#if $data.links.length !== 1}
              <Button type="button" on:click={remove(index)}>Remove</Button>
            {/if}
          {/if}
        </div>
      {/each}

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
