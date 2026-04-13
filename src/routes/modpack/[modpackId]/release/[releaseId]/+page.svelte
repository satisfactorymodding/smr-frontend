<script lang="ts">
  import { DeleteModpackReleaseDocument } from '$lib/generated';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import { goto } from '$app/navigation';
  import { user } from '$lib/stores/user';
  import { base } from '$app/paths';
  import ReleaseTargetSupportGrid from '$lib/components/releases/ReleaseTargetSupportGrid.svelte';
  import ReleaseModVersions from '$lib/components/releases/ReleaseModVersions.svelte';
  import { getContextClient } from '@urql/svelte';
  import type { PageData } from './$types';
  import { getModalStore, getToastStore, type ModalSettings } from '@skeletonlabs/skeleton';
  import Page404 from '$lib/components/general/Page404.svelte';
  import { getTranslate } from '@tolgee/svelte';
  import { markdown } from '$lib/utils/markdown';

  export const { t } = getTranslate();

  export let data: PageData;

  const { modpackId, releaseId, modpack } = data;

  const client = getContextClient();

  const toastStore = getToastStore();

  $: modpackData = $modpack?.data?.getModpack;
  $: releaseData = modpackData?.releases?.find((r) => r.id === releaseId);

  $: canUserEdit = $user?.roles?.deleteContent || modpackData?.creator_id == $user?.id;

  $: lockfileMods = (() => {
    if (!releaseData?.lockfile) {
      return [];
    }
    try {
      const parsed = typeof releaseData.lockfile === 'string' ? JSON.parse(releaseData.lockfile) : releaseData.lockfile;
      if (parsed?.mods) {
        return Object.entries(parsed.mods).map(([mod_id, info]: [string, { version: string }]) => ({
          mod_id,
          version_constraint: info.version
        }));
      }
    } catch (e) {
      console.error('Failed to parse lockfile mods:', e);
    }
    return [];
  })();

  const deleteReleaseFn = () => {
    client
      .mutation(DeleteModpackReleaseDocument, { modpackID: modpackId, version: releaseData?.version })
      .toPromise()
      .then((value) => {
        if (value.error) {
          console.error(value.error.message);
          toastStore.trigger({
            message: 'Error deleting release: ' + value.error.message,
            background: 'variant-filled-error',
            autohide: false
          });
        } else {
          toastStore.trigger({
            message: `Release deleted`,
            background: 'variant-filled-success',
            timeout: 5000
          });
          goto(base + '/modpack/' + modpackId);
        }
      });
  };

  const deleteModal: ModalSettings = {
    type: 'confirm',
    title: 'Delete Release?',
    body: 'Are you sure you wish to delete this release?',
    response: (r: boolean) => {
      if (r) {
        deleteReleaseFn();
      }
    }
  };

  const modalStore = getModalStore();
</script>

<svelte:head>
  {#if !$modpack.fetching && !$modpack.error && releaseData}
    <MetaDescriptors
      description="Release {releaseData.version} of modpack {modpackData?.name || modpackId}"
      title="Modpack {modpackData?.name || modpackId} - Release {releaseData.version}" />
  {/if}
</svelte:head>

{#if $modpack.fetching}
  <p>Loading...</p>
{:else if $modpack.error}
  <p>Oh no... {$modpack.error.message}</p>
{:else if releaseData}
  <div class="grid gap-6 xlx:grid-flow-row">
    <div class="flex h-auto flex-wrap items-center justify-between">
      <h1 class="text-4xl font-bold">
        {modpackData?.name || modpackId}
        — Release {releaseData.version}
      </h1>

      <div class="grid grid-flow-col gap-4">
        {#if canUserEdit}
          <a
            class="variant-ghost-primary btn"
            href={base + '/modpack/' + modpackId + '/release/' + releaseId + '/edit'}>
            <span class="material-icons pr-2">edit</span>
            {$t('release.edit')}
          </a>
          <button class="variant-ghost-primary btn" on:click={() => modalStore.trigger(deleteModal)}>
            <span class="material-icons pr-2">delete</span>
            {$t('release.delete')}
          </button>
        {/if}
        <a class="variant-ghost-primary btn" href={base + '/modpack/' + modpackId} title="Back to modpack">
          <span class="material-icons pr-2">arrow_back</span>
          <span>{$t('release.back')}</span>
        </a>
      </div>
    </div>

    <div class="grid-auto-max grid auto-cols-fr gap-4">
      <div class="card h-fit p-4">
        <section>
          <h3 class="mb-2 text-xl font-bold">{$t('changelog')}</h3>
          <div class="markdown-content break-words">
            {#await markdown(releaseData.changelog) then changelogRendered}
              <!-- eslint-disable-next-line -->
              <p>{@html changelogRendered}</p>
            {/await}
          </div>
        </section>
      </div>

      <div class="grid auto-rows-min grid-cols-1 gap-8">
        <div class="card p-4">
          <h3 class="mb-2 text-xl font-bold">{$t('release.info', { defaultValue: 'Release Info' })}</h3>
          <dl class="grid grid-cols-2 gap-2">
            <dt class="font-semibold">{$t('entry.version')}</dt>
            <dd>{releaseData.version}</dd>
            <dt class="font-semibold">{$t('entry.created-at')}</dt>
            <dd>{new Date(releaseData.created_at).toLocaleDateString()}</dd>
          </dl>
        </div>

        {#if lockfileMods.length > 0}
          <div class="card p-4">
            <h3 class="mb-2 text-xl font-bold">{$t('release.resolved-mods', { defaultValue: 'Resolved Mods' })}</h3>
            <ReleaseModVersions modsInput={lockfileMods} />
          </div>
        {/if}

        {#if releaseData.targets && releaseData.targets.length > 0}
          <div class="card p-4">
            <h3 class="mb-2 text-xl font-bold">
              {$t('release.resolved-targets', { defaultValue: 'Resolved Targets' })}
            </h3>
            <ReleaseTargetSupportGrid targets={releaseData.targets} />
          </div>
        {/if}
      </div>
    </div>
  </div>
{:else}
  <Page404 />
{/if}
