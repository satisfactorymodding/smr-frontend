<script lang="ts">
  import { createForm } from 'felte';
  import { validator } from '@felte/validator-zod';
  import { reporter, ValidationMessage } from '@felte/reporter-svelte';
  import { trimNonSchema } from '$lib/utils/forms';
  import { markdown } from '$lib/utils/markdown';
  import type { SMLVersionData } from '$lib/models/sml-versions';
  import { smlVersionSchema } from '$lib/models/sml-versions';
  import { TargetName, VersionStabilities } from '$lib/generated';
  import { getTranslate } from '@tolgee/svelte';

  export const { t } = getTranslate();

  export let onSubmit: (data: SMLVersionData) => void;

  // export let editing = false;

  export let initialValues: SMLVersionData = {
    link: '',
    date: new Date().toISOString(),
    changelog: '',
    satisfactory_version: 0,
    stability: VersionStabilities.Alpha,
    version: '',
    targets: [{ targetName: TargetName.Windows, link: '' }],
    engine_version: ''
  };
  export let submitText = $t('entry.create');

  const { form, data, addField, unsetField } = createForm<SMLVersionData>({
    initialValues: initialValues,
    extend: [validator({ schema: smlVersionSchema }), reporter],
    onSubmit: (submitted: SMLVersionData) => {
      console.log('hello', submitted);
      return onSubmit(trimNonSchema(submitted, smlVersionSchema));
    }
  });

  const addTarget = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    addField('targets', { targetName: TargetName.Windows, link: '' } as any);
  };

  const removeTarget = (i: number) => {
    unsetField(`targets.${i}`);
  };

  $: preview = ($data.changelog as string) || '';
</script>

<form use:form>
  <div class="grid grid-flow-row gap-6">
    <div class="grid grid-flow-row gap-2">
      <label class="label">
        <span>{$t('version')} *</span>
        <input type="text" bind:value={$data.version} required class="input p-2" />
      </label>
      <ValidationMessage for="version" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    <div class="grid grid-flow-row gap-2">
      <label class="label">
        <span>Satisfactory {$t('version')} *</span>
        <input type="number" bind:value={$data.satisfactory_version} required class="input p-2" />
      </label>
      <ValidationMessage for="satisfactory_version" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    {#if $data.bootstrap_version !== undefined && $data.bootstrap_version !== null}
      <div class="grid grid-flow-row gap-2">
        <label class="label">
          <span>Bootstrap {$t('version')} *</span>
          <input type="text" bind:value={$data.bootstrap_version} required class="input p-2" />
        </label>
        <ValidationMessage for="bootstrap_version" let:messages={message}>
          <span class="validation-message">{message || ''}</span>
        </ValidationMessage>
      </div>
    {/if}

    <div class="grid grid-flow-row gap-2">
      <label class="label">
        <span>{$t('stability')} *</span>
        <select class="select" bind:value={$data.stability}>
          <option value="release">Release</option>
          <option value="alpha">Alpha</option>
          <option value="beta">Beta</option>
        </select>
      </label>
      <ValidationMessage for="stability" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    <div class="split grid gap-6">
      <div class="grid grid-flow-row auto-rows-max gap-2">
        <label class="label">
          <span>{$t('changelog')} *</span>
          <textarea class="vertical-textarea textarea p-2" bind:value={$data.changelog} required rows={10} />
        </label>
        <ValidationMessage for="changelog" let:messages={message}>
          <span class="validation-message">{message || ''}</span>
        </ValidationMessage>
      </div>
      <div class="grid grid-flow-row auto-rows-max gap-2">
        <span>{$t('preview')}:</span>
        {#await markdown(preview) then previewRendered}
          <!-- eslint-disable -->
          <div class="markdown-content right">{@html previewRendered}</div>
        {/await}
      </div>
    </div>

    <span>Targets:</span>
    <div class="grid grid-flow-row gap-2">
      {#each $data.targets as target, i}
        <div class="auto-rows-max gap-6">
          <label class="label">
            <span>Platform</span>
            <select class="select" bind:value={target.targetName}>
              <option value={TargetName.Windows}>{$t('arch.windows-client')}</option>
              <option value={TargetName.WindowsServer}>{$t('arch.windows-server')}</option>
              <option value={TargetName.LinuxServer}>{$t('arch.linux-server')}</option>
            </select>
          </label>

          <label class="label">
            <span>URL</span>
            <textarea
              class="textarea p-2"
              name={`data_link.link`}
              placeholder="URL"
              bind:value={target.link}
              style="min-width: 850px;" />
          </label>
          <ValidationMessage for="targets.{i}.link" let:messages={message}>
            <span class="validation-message">{message || ''}</span>
          </ValidationMessage>

          <button class="variant-ghost-primary btn" on:click={addTarget}>{$t('add')}</button>
          <button
            class="variant-ghost-primary btn"
            disabled={$data.targets.length == 1}
            on:click={() => removeTarget(i)}>{$t('remove')}</button>
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

    <div class="grid grid-flow-row gap-2">
      <label class="label">
        <span>Engine version</span>
        <input type="text" bind:value={$data.engine_version} required class="input p-2" />
      </label>
      <ValidationMessage for="engine_version" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    <div>
      <button class="variant-ghost-primary btn" type="submit">{submitText}</button>
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
