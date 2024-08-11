<script lang="ts">
  import { createForm } from 'felte';
  import { validator } from '@felte/validator-zod';
  import { reporter, ValidationMessage } from '@felte/reporter-svelte';
  import type { VersionData, VersionMetadata } from '$lib/models/versions';
  import { constructVersionSchema } from '$lib/models/versions';
  import { trimNonSchema } from '$lib/utils/forms';
  import { markdown } from '$lib/utils/markdown';
  import { writable } from 'svelte/store';
  import { VersionStabilities } from '$lib/generated';
  import { prettyBytes } from '$lib/utils/formatting';
  import { getTranslate } from '@tolgee/svelte';

  export const { t } = getTranslate();

  export let modReference: string;
  export let onSubmit: (data: VersionData) => Promise<void>;
  export let initialValues: Omit<VersionData, 'file'> = {
    changelog: '',
    stability: VersionStabilities.Release
  };
  export let submitIcon: string;
  export let submitText = $t('entry.create');

  export let editing = false;

  const modMeta = writable<VersionMetadata>();

  let disabled = false;

  const versionSchema = constructVersionSchema(modReference, modMeta);
  const { form, data } = createForm<VersionData>({
    initialValues: initialValues as VersionData,
    extend: [validator({ schema: versionSchema }), reporter],
    onSubmit: (submitted: VersionData) => {
      disabled = true;
      onSubmit(trimNonSchema(submitted, versionSchema)).then(() => (disabled = false));
    }
  });

  $: preview = ($data.changelog as string) || '';
  $: dependencies = $modMeta?.uplugin?.Plugins?.filter((d) => !d.BasePlugin) || [];
</script>

<form use:form>
  <div class="grid grid-flow-row gap-6">
    <div class="grid grid-flow-row gap-2">
      <label class="label">
        <span>{$t('stability')} *</span>
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

    {#if !editing}
      <div class="grid grid-flow-row gap-2">
        <label for="file">{$t('file')} *</label>
        <input id="file" class="base-input" name="file" type="file" accept=".zip,.smod" placeholder="File" />
        <ValidationMessage for="file" let:messages={message}>
          <span class="validation-message">{message || ''}</span>
        </ValidationMessage>
      </div>

      {#if $data.file}
        <div>
          <span><strong>{$t('file-type')}:</strong> {$data.file.type || 'Unknown'}</span><br />
          <span><strong>{$t('file-size')}:</strong> {prettyBytes($data.file.size)}</span>
        </div>
      {/if}

      {#if $modMeta}
        <div>
          <p class="mb-4">
            <span><strong>{$t('version')}:</strong> {$modMeta.uplugin.Version}<br /></span>

            {#if $modMeta.uplugin.SemVersion !== undefined}
              <span><strong>SemVersion:</strong> {$modMeta.uplugin.SemVersion}<br /></span>
            {:else}
              <span class="text-yellow-600">
                {$t('version-form.missing-sem-version')}
                {$modMeta.uplugin.Version}.0.0
              </span>
            {/if}

            {#if $modMeta.uplugin.GameVersion !== undefined}
              <span><strong>Game version:</strong> {$modMeta.uplugin.GameVersion}<br /></span>
            {:else}
              <span class="text-yellow-600">
                {$t('version-form.missing-game-version')}
              </span>
            {/if}
          </p>

          <span><strong>Targets:</strong> {$modMeta.targets.join(', ')}<br /></span>

          {#if $modMeta.uplugin.Plugins !== undefined}
            <p>
              <strong>{$t('dependencies')}:</strong><br />
              {#each dependencies as dependency}
                <strong>{dependency.Name}: </strong>
                {#if dependency.SemVersion}
                  <span>{dependency.SemVersion}</span>
                {:else}
                  <span>*</span>
                {/if}
                <br />
              {/each}
            </p>
          {/if}

          {#if $modMeta.objects && $modMeta.objects.length > 0}
            <p>
              <strong>{$t('objects')}:</strong><br />
              {#each $modMeta.objects as object}
                <span>{object}</span>
                <br />
              {/each}
            </p>
          {:else}
            <p>
              <span class="text-yellow-600">
                {$t('version-form.missing-sem-version')}
              </span>
            </p>
          {/if}
        </div>
      {/if}
    {/if}

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

    <div class="text-muted">
      {$t('version-form.agreement-to')} <a href="/content-policy">{$t('content-policy')}</a>.
    </div>

    <div>
      <button class="variant-ghost-primary btn" type="submit" {disabled}>
        <span class="material-icons pr-2">{submitIcon}</span>
        {submitText}
      </button>
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

  a {
    @apply text-yellow-500 underline;
  }
</style>
