<script lang="ts">
  import { createForm } from 'felte';
  import { validator } from '@felte/validator-zod';
  import { reporter } from '@felte/reporter-svelte';
  import type { VersionData, VersionMetadata } from '$lib/models/versions';
  import { constructVersionSchema } from '$lib/models/versions';
  import { trimNonSchema } from '$lib/utils/forms';
  import { writable } from 'svelte/store';
  import { VersionStabilities } from '$lib/generated';
  import { prettyBytes } from '$lib/utils/formatting';
  import { getTranslate } from '@tolgee/svelte';
  import FormFileField from '$lib/components/forms/FormFileField.svelte';
  import FormMarkdownField from '$lib/components/forms/FormMarkdownField.svelte';

  export const { t } = getTranslate();

  interface Props {
    modReference: string;
    onSubmit: (data: VersionData) => Promise<void>;
    initialValues?: Omit<VersionData, 'file'>;
    submitIcon: string;
    submitText?: string;
    editing?: boolean;
  }

  let {
    modReference,
    onSubmit,
    initialValues = {
      changelog: '',
      stability: VersionStabilities.Release
    },
    submitIcon,
    submitText = $t('entry.create'),
    editing = false
  }: Props = $props();

  const modMeta = writable<VersionMetadata>();

  let disabled = $state(false);

  const versionSchema = constructVersionSchema(modReference, modMeta);
  const { form, data } = createForm<VersionData>({
    initialValues: initialValues as VersionData,
    extend: [validator({ schema: versionSchema }), reporter],
    onSubmit: (submitted: VersionData) => {
      disabled = true;
      onSubmit(trimNonSchema(submitted, versionSchema)).then(() => (disabled = false));
    }
  });

  let dependencies = $derived($modMeta?.uplugin?.Plugins?.filter((d) => !d.BasePlugin) || []);
</script>

<form use:form>
  <div class="grid grid-flow-row gap-6">
    {#if !editing}
      <FormFileField label="{$t('file')} *" name="file" id="file" accept=".zip,.smod" placeholder="File" />

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
              {#each dependencies as dependency (dependency.Name)}
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
              {#each $modMeta.objects as object (object)}
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

    <FormMarkdownField label={$t('changelog')} name="changelog" bind:value={$data.changelog} required />

    <div class="text-muted">
      {$t('version-form.agreement-to')} <a href="/content-policy">{$t('content-policy')}</a>.
    </div>

    <div>
      <button class="btn border border-primary-500 preset-tonal-primary" type="submit" {disabled}>
        <span class="material-icons pr-2">{submitIcon}</span>
        {submitText}
      </button>
    </div>
  </div>
</form>

<style lang="postcss">
  @reference "../../../app.css";

  a {
    @apply text-yellow-500 underline;
  }
</style>
