<script lang="ts">
  import { createForm } from 'felte';
  import { validator } from '@felte/validator-zod';
  import { reporter, ValidationMessage } from '@felte/reporter-svelte';
  import { trimNonSchema } from '$lib/utils/forms';
  import { markdown } from '$lib/utils/markdown';
  import type { SMLVersionData } from '$lib/models/sml-versions';
  import { smlVersionSchema } from '$lib/models/sml-versions';
  import { VersionStabilities } from '$lib/generated';
  import { getTranslate } from '@tolgee/svelte';

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
      <label class="label">
        <span>{$t('version')}</span>
        <input type="text" bind:value={$data.version} required class="input p-2" />
      </label>
      <ValidationMessage for="version" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    <div class="grid grid-flow-row gap-2">
      <label class="label">
        <span>Satisfactory {$t('version')}</span>
        <input type="text" bind:value={$data.satisfactory_version} required class="input p-2" />
      </label>
      <ValidationMessage for="satisfactory_version" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    {#if $data.bootstrap_version !== '0.0.0'}
      <div class="grid grid-flow-row gap-2">
        <label class="label">
          <span>Bootstrap {$t('version')}</span>
          <input type="text" bind:value={$data.bootstrap_version} required class="input p-2" />
        </label>
        <ValidationMessage for="bootstrap_version" let:messages={message}>
          <span class="validation-message">{message || ''}</span>
        </ValidationMessage>
      </div>
    {/if}

    <div class="grid grid-flow-row gap-2">
      <label class="label">
        <span>{$t('stability')}</span>
        <select class="select" bind:value={$data.stability}>
          <option value="alpha">Alpha</option>
          <option value="beta">Beta</option>
          <option value="release">Release</option>
        </select>
      </label>
      <ValidationMessage for="stability" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    <div class="grid gap-6 split">
      <div class="grid grid-flow-row gap-2 auto-rows-max">
        <label class="label">
          <span>{$t('changelog')}</span>
          <textarea class="vertical-textarea textarea p-2" bind:value={$data.changelog} required rows={10} />
        </label>
        <ValidationMessage for="changelog" let:messages={message}>
          <span class="validation-message">{message || ''}</span>
        </ValidationMessage>
      </div>
      <div class="grid grid-flow-row gap-2 auto-rows-max">
        <span>{$t('preview')}:</span>
        {#await markdown(preview) then previewRendered}
          <!-- eslint-disable -->
          <div class="markdown-content right">{@html previewRendered}</div>
        {/await}
      </div>
    </div>

    <div class="grid grid-flow-row gap-2">
      {#each $data.arch as data_link, i}
        <div class="gap-6 auto-rows-max">
          <label class="label">
            <span>Platform</span>
            <select class="select" bind:value={data_link.platform}>
              <option value="WindowsNoEditor">{$t('arch.windows-client')}</option>
              <option value="WindowsServer">{$t('arch.windows-server')}</option>
              <option value="LinuxServer">{$t('arch.linux-server')}</option>
            </select>
          </label>

          <label class="label">
            <span>URL</span>
            <textarea
              class="textarea p-2"
              name={`data_link.link`}
              placeholder="URL"
              bind:value={data_link.link}
              style="min-width: 850px;" />
          </label>
          <ValidationMessage for="data_link.link" let:messages={message}>
            <span class="validation-message">{message || ''}</span>
          </ValidationMessage>

          {#if !editing}
            <button class="btn variant-ghost-primary" on:click={addArch}>{$t('add')}</button>
            <button class="btn variant-ghost-primary" disabled={$data.arch.length == 1} on:click={() => removeArch(i)}
              >{$t('remove')}</button>
          {/if}
        </div>
      {/each}

      <label class="label">
        <span>{$t('link')}</span>
        <input type="text" bind:value={$data.link} required class="input p-2" />
      </label>
      <ValidationMessage for="link" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    <div class="grid grid-flow-row gap-2">
      <label class="label">
        <span>{$t('date-and-time')}</span>
        <input type="text" bind:value={$data.date} required class="input p-2" />
      </label>
      <ValidationMessage for="date" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    <div>
      <button class="btn variant-ghost-primary" type="submit">{submitText}</button>
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
