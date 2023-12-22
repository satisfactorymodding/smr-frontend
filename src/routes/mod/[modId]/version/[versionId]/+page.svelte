<script lang="ts">
  import { DeleteVersionDocument } from '$lib/generated';
  import VersionDescription from '$lib/components/versions/VersionDescription.svelte';
  import VersionInfo from '$lib/components/versions/VersionInfo.svelte';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import { API_REST } from '$lib/core';
  import { goto } from '$app/navigation';
  import { user } from '$lib/stores/user';
  import { base } from '$app/paths';
  import { installMod } from '$lib/stores/launcher';
  import { prettyTarget } from '$lib/utils/formatting';
  import VersionTargetSupportGrid from '$lib/components/versions/VersionTargetSupportGrid.svelte';
  import VersionDependenciesGrid from '$lib/components/versions/VersionDependenciesGrid.svelte';
  import { getContextClient } from '@urql/svelte';
  import type { PageData } from './$types';
  import { getModalStore, getToastStore, type ModalSettings, popup } from '@skeletonlabs/skeleton';
  import Page404 from '$lib/components/general/Page404.svelte';

  export let data: PageData;

  const { modId, versionId, version } = data;

  const client = getContextClient();

  const toastStore = getToastStore();

  $: canUserEdit =
    $user?.roles?.deleteContent ||
    $version?.data?.getVersion.mod?.authors?.findIndex((author) => author.user_id == $user?.id) >= 0;

  const deleteVersionFn = () => {
    client
      .mutation(DeleteVersionDocument, { versionId })
      .toPromise()
      .then((value) => {
        if (value.error) {
          console.error(value.error.message);
          toastStore.trigger({
            message: 'Error deleting version: ' + value.error.message,
            background: 'variant-filled-error',
            autohide: false
          });
        } else {
          toastStore.trigger({
            message: `Version deleted`,
            background: 'variant-filled-success',
            timeout: 5000
          });
          goto(base + '/mod/' + modId);
        }
      });
  };

  const deleteModal: ModalSettings = {
    type: 'confirm',
    title: 'Delete Version?',
    body: 'Are you sure you wish to delete this version?',
    response: (r: boolean) => {
      if (r) {
        deleteVersionFn();
      }
    }
  };

  const modalStore = getModalStore();
</script>

<svelte:head>
  {#if !$version.fetching && !$version.error && $version.data.getVersion}
    <MetaDescriptors
      description="Information for mod version {$version.data.getVersion.mod.name} {$version.data.getVersion.version}"
      title="Mod version {$version.data.getVersion.mod.name} {$version.data.getVersion.version}" />
  {/if}
</svelte:head>

{#if $version.fetching}
  <p>Loading...</p>
{:else if $version.error}
  <p>Oh no... {$version.error.message}</p>
{:else if $version.data.getVersion}
  <div class="grid gap-6 xlx:grid-flow-row">
    <div class="flex h-auto flex-wrap items-center justify-between">
      <h1 class="text-4xl font-bold">
        {$version.data.getVersion.mod.name}
        Version {$version.data.getVersion.version}
      </h1>

      <div class="grid grid-flow-col gap-4">
        {#if canUserEdit}
          <button
            class="variant-ghost-primary btn"
            on:click={() => goto(base + '/mod/' + modId + '/version/' + versionId + '/edit')}>
            <span class="material-icons pr-2">edit_document</span>
            Edit
          </button>
          <button class="variant-ghost-primary btn" on:click={() => modalStore.trigger(deleteModal)}>
            <span class="material-icons pr-2">delete</span>
            Delete</button>
        {/if}
        {#if $version.data.getVersion.targets.length != 0}
          <button
            class="variant-ghost-primary btn"
            title="Download a specific release target of this mod"
            use:popup={{
              event: 'focus-click',
              target: 'versionArchDropdown',
              placement: 'bottom',
              closeQuery: 'a'
            }}>
            <span>Download...</span>
            <span class="material-icons" style="margin: 0;">arrow_drop_down</span>
          </button>

          <div class="card z-10 w-72 shadow-xl" data-popup="versionArchDropdown">
            <nav class="list-nav">
              <ul>
                {#each $version.data.getVersion.targets as target}
                  <li>
                    <a
                      class="w-full"
                      href={API_REST +
                        '/mod/' +
                        modId +
                        '/versions/' +
                        versionId +
                        '/' +
                        target.targetName +
                        '/download'}>
                      <span>Download {prettyTarget(target.targetName)}</span>
                    </a>
                  </li>
                {/each}
              </ul>
            </nav>
          </div>
        {:else}
          <a class="variant-ghost-primary btn" href={base + '/mod/' + modId + '/version/' + versionId}>View</a>
          <a
            class="variant-ghost-primary btn"
            href={API_REST + '/mod/' + modId + '/versions/' + versionId + '/download'}>Download</a>
        {/if}
        <button
          class="variant-ghost-primary btn"
          title="Install via Satisfactory Mod Manager"
          on:click={() => installMod($version.data.getVersion.mod.mod_reference)}>
          <span class="material-icons">download</span>
          <span>Install</span>
        </button>
        <a
          class="variant-ghost-primary btn"
          href={base + '/mod/' + modId}
          title="View the description page for this mod">
          <span class="material-icons">extension</span>
          <span>Back to Mod</span>
        </a>
      </div>
    </div>
    <div class="grid-auto-max grid auto-cols-fr gap-4">
      <VersionDescription changelog={$version.data.getVersion.changelog} approved={$version.data.getVersion.approved} />
      <div class="grid auto-rows-min grid-cols-1 gap-8">
        <VersionInfo version={$version.data.getVersion} />
        <VersionTargetSupportGrid targets={$version.data.getVersion.targets} />
        <VersionDependenciesGrid dependencies={$version.data.getVersion.dependencies} />
      </div>
    </div>
  </div>
{:else}
  <Page404 />
{/if}
