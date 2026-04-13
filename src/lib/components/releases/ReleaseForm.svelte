<script lang="ts">
  import { createForm } from 'felte';
  import { validator } from '@felte/validator-zod';
  import { reporter, ValidationMessage } from '@felte/reporter-svelte';
  import { releaseSchema, type ReleaseData } from '$lib/models/releases';
  import { trimNonSchema } from '$lib/utils/forms';
  import { markdown } from '$lib/utils/markdown';
  import { getTranslate } from '@tolgee/svelte';
  import ReleaseModVersions from './ReleaseModVersions.svelte';
  import { getContextClient, queryStore } from '@urql/svelte';
  import {
    CalculateTargetWithModsDocument,
    GetModpackDocument,
    ModpackToLockfileDocument,
    ResolveModpackSpecificVersionsDocument
  } from '$lib/generated';
  import ReleaseTargetSupportGrid from '../releases/ReleaseTargetSupportGrid.svelte';

  export const { t } = getTranslate();

  export let modpackReference: string;
  export let releaseEditing: string | null = null;
  export let onSubmit: (data: ReleaseData) => Promise<void>;

  const client = getContextClient();

  $: modpackInfo = queryStore({
    query: GetModpackDocument,
    client,
    variables: { modpackID: modpackReference },
    requestPolicy: 'cache-and-network'
  });

  export let initialValues: Omit<ReleaseData, 'file'> = {
    version: '',
    targets: [],
    changelog: ''
  };

  export let submitIcon: string;
  export let submitText = releaseEditing ? $t('entry.update') : $t('entry.create');

  let disabled = false;

  $: releaseMods = queryStore({
    query: ResolveModpackSpecificVersionsDocument,
    client,
    variables: { modpackID: modpackReference },
    requestPolicy: 'network-only'
  });

  $: releaseTargets = queryStore({
    query: CalculateTargetWithModsDocument,
    client,
    variables: { mods: $releaseMods.data?.resolveModpackSpecificVersions || [] },
    requestPolicy: 'network-only',
    pause: !$releaseMods.data
  });

  $: existingMods = (() => {
    if (!releaseEditing) {
      return null;
    }
    const release = $modpackInfo.data?.getModpack.releases.find((r) => r.id === releaseEditing);
    if (!release?.lockfile) {
      return null;
    }
    try {
      const parsed = typeof release.lockfile === 'string' ? JSON.parse(release.lockfile) : release.lockfile;
      if (parsed?.mods) {
        return Object.entries(parsed.mods).map(([mod_id, info]: [string, { version: string }]) => ({
          mod_id,
          version_constraint: info.version
        }));
      }
    } catch (e) {
      console.error('Failed to parse lockfile mods:', e);
    }
    return null;
  })();

  const { form, data } = createForm<ReleaseData>({
    initialValues: initialValues as ReleaseData,
    extend: [validator({ schema: releaseSchema }), reporter],
    onSubmit: (submitted: ReleaseData) => {
      disabled = true;
      onSubmit(trimNonSchema(submitted, releaseSchema)).then(() => (disabled = false));
    },
    onError: (err) => {
      console.error('Form submission error:', err);
      disabled = false;
    }
  });

  $: preview = ($data.changelog as string) || '';

  $: lockfile = queryStore({
    query: ModpackToLockfileDocument,
    client,
    variables: { modpackID: modpackReference },
    requestPolicy: 'network-only'
  });
</script>

{#if $modpackInfo.fetching}
  <p>Loading...</p>
{:else if $modpackInfo.error}
  <p>Error loading modpack: {$modpackInfo.error.message}</p>
{:else if $modpackInfo.data?.getModpack}
  <form use:form>
    <div class="grid grid-flow-row gap-6">
      <div class="grid grid-flow-row gap-2">
        <label class="label">
          <span>{$t('entry.version')} *</span>
          <input type="text" placeholder="1.0.0" bind:value={$data.version} required class="input p-2" />
        </label>
        {#if $modpackInfo.data?.getModpack.releases.length > 0}
          <span class="text-muted text-sm"
            >{$t('release.previous-release')}
            <code class="bg-muted rounded px-1 py-0.5">
              {$modpackInfo.data.getModpack.releases[0].version}
              <a
                class="text-muted"
                href={undefined}
                style="cursor:pointer"
                on:click|preventDefault={() =>
                  navigator.clipboard.writeText($modpackInfo.data.getModpack.releases[0].version)}>
                <span class="material-icons" style="font-size: 16px; margin-left: 2px;">content_copy</span>
              </a>
            </code>
          </span>
        {/if}
        <ValidationMessage for="version" let:messages={message}>
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
            <!-- eslint-disable-next-line -->
            <div class="markdown-content right">{@html previewRendered}</div>
          {/await}
        </div>
      </div>

      <div>
        <span>{$t('release.resolved-mods')}</span>
        <ReleaseModVersions modsInput={existingMods || $releaseMods.data?.resolveModpackSpecificVersions || []} />
      </div>
      <div>
        <span>{$t('release.resolved-targets')}</span>
        <ReleaseTargetSupportGrid
          targets={($releaseTargets.data?.calculateTargetWithMods.targets || []).map((target) => ({
            target_name: target
          }))} />
      </div>
      <div>
        <button
          class="variant-ghost-primary btn"
          type="button"
          on:click={() => {
            const raw = $lockfile.data?.modpackToLockfile || '{}';
            const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw;
            const pretty = JSON.stringify(parsed, null, 2);
            const blob = new Blob([pretty], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${$modpackInfo.data?.getModpack.name || 'modpack'}-lockfile.json`;
            a.click();
            URL.revokeObjectURL(url);
          }}>
          {$t('release.preview-lockfile')}
        </button>
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
{/if}

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
