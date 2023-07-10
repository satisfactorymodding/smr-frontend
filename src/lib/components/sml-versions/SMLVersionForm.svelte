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
  import { getTranslate } from "@tolgee/svelte";

  export const { t } = getTranslate();

  export let onSubmit: (data: SMLVersionData) => void;

  export let editing = false;

  export let initialValues: SMLVersionData = {
    link: '',
    bootstrap_version: '0.0.0',
    date: '',
    changelog: '',
    satisfactory_version: 0,
    stability: VersionStabilities.Alpha,
    version: '',
    arch: [{ platform: '', link: '' }]
  };
  export let submitText = $t('entry.create');

  const { form, data } = createForm<SMLVersionData>({
    initialValues: initialValues,
    extend: [validator({ schema: smlVersionSchema }), reporter],
    onSubmit: (submitted: SMLVersionData) => onSubmit(trimNonSchema(submitted, smlVersionSchema))
  });

  const addArch = () => {
    $data.arch.push({ platform: '', link: '', key: '' });
    $data.arch = $data.arch;
  };

  const removeArch = (i: number) => {
    $data.arch.splice(i, 1);
    $data.arch = $data.arch;
  };

  $: preview = ($data.changelog as string) || '';
</script>

<form use:form>
  <div class="grid grid-flow-row gap-6">
    <div class="grid grid-flow-row gap-2">
      <Textfield bind:value={$data.version} label={ $t('version') } required />
      <ValidationMessage for="version" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    <div class="grid grid-flow-row gap-2">
      <Textfield bind:value={$data.satisfactory_version} label="Satisfactory { $t('version') }" required type="number" />
      <ValidationMessage for="satisfactory_version" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    {#if $data.bootstrap_version !== '0.0.0'}
      <div class="grid grid-flow-row gap-2">
        <Textfield bind:value={$data.bootstrap_version} label="Bootstrap { $t('version') }" required />
        <ValidationMessage for="bootstrap_version" let:messages={message}>
          <span class="validation-message">{message || ''}</span>
        </ValidationMessage>
      </div>
    {/if}

    <div class="grid grid-flow-row gap-2">
      <Select bind:value={$data.stability} label={ $t('stability') }>
        <Option value="alpha">Alpha</Option>
        <Option value="beta">Beta</Option>
        <Option value="release">Release</Option>
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
          label={ $t('changelog') }
          required
          input$rows={10} />
        <ValidationMessage for="changelog" let:messages={message}>
          <span class="validation-message">{message || ''}</span>
        </ValidationMessage>
      </div>
      <div class="grid grid-flow-row gap-2 auto-rows-max">
        <span>{ $t('preview') }:</span>
        {#await markdown(preview) then previewRendered}
          <div class="markdown-content right">{@html previewRendered}</div>
        {/await}
      </div>
    </div>

    <div class="grid grid-flow-row gap-2">
      {#each $data.arch as data_link, i}
        <div class="gap-6 auto-rows-max">
          <Select bind:value={data_link.platform} label="Platform">
            <Option value="WindowsNoEditor">{ $t('arch.windows-client') }</Option>
            <Option value="WindowsServer">{ $t('arch.windows-server') }</Option>
            <Option value="LinuxServer">{ $t('arch.linux-server') }</Option>
          </Select>

          <Textfield
            name={`data_link.link`}
            placeholder="URL"
            bind:value={data_link.link}
            style="min-width: 850px;"
            label="URL" />
          <ValidationMessage for="data_link.link" let:messages={message}>
            <span class="validation-message">{message || ''}</span>
          </ValidationMessage>

          {#if !editing}
            <Button type="button" on:click={addArch}>{ $t('add') }</Button>
            <Button type="button" disabled={$data.arch.length == 1} on:click={() => removeArch(i)}>{ $t('remove') }</Button>
          {/if}
        </div>
      {/each}

      <Textfield bind:value={$data.link} label={ $t('link') } />
      <ValidationMessage for="link" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    <div class="grid grid-flow-row gap-2">
      <Textfield bind:value={$data.date} label={ $t('date-and-time') } required />
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
