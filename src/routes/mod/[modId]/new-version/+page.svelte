<script lang="ts">
  import { getContextClient, queryStore } from '@urql/svelte';
  import { goto } from '$app/navigation';
  import type { VersionData } from '$lib/models/versions';
  import VersionForm from '$lib/components/versions/VersionForm.svelte';
  import { GetModDocument } from '$lib/generated';
  import { writable } from 'svelte/store';
  import { chunkedUpload } from '$lib/utils/chunked-upload';
  import type { UploadState } from '$lib/utils/chunked-upload';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import type { PageData } from './$types';
  import { getModalStore, getToastStore, type ModalSettings } from '@skeletonlabs/skeleton';
  import EditCompatibilityForm from '$lib/components/mods/compatibility/EditCompatibilityForm.svelte';

  export let data: PageData;

  const { modId } = data;

  const client = getContextClient();

  const uploadStatus = writable<undefined | string>('');
  const uploadPercent = writable<number>(0);

  const uploadState = writable<UploadState>();

  uploadState.subscribe((up) => {
    if (up) {
      if (up.uploaded === up.total) {
        uploadStatus.set(`Processing...`);
        uploadPercent.set(100);
      } else {
        uploadStatus.set(`Uploading: ${up.uploaded}/${up.total}`);
        uploadPercent.set((up.uploaded / up.total) * 100);
      }
    }
  });

  const toastStore = getToastStore();

  const mod = queryStore({
    query: GetModDocument,
    client,
    variables: { mod: modId }
  });

  const onSubmit = async (versionData: VersionData) =>
    chunkedUpload(
      versionData.file,
      $mod.data.mod.id,
      {
        changelog: versionData.changelog,
        stability: versionData.stability
      },
      uploadState,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      client
    )
      .then((success) => {
        toastStore.trigger({
          message: `Version created`,
          background: 'variant-filled-success',
          timeout: 5000
        });
        goto(base + '/mod/' + modId + '/version/' + success.version.id);
      })
      .catch((err) => {
        console.error(err);
        toastStore.trigger({
          message: 'Error creating version: ' + err.message,
          background: 'variant-filled-error',
          autohide: false
        });
        uploadStatus.set('');
      });

  const goBackFn = () => {
    goto(base + '/mod/' + modId);
  };

  const backModal: ModalSettings = {
    type: 'confirm',
    title: 'Go Back?',
    buttonTextCancel: 'Keep Editing',
    buttonTextConfirm: 'Go Back',
    body: 'Going back will discard any unsaved changes. Are you sure you wish to continue?',
    response: (r: boolean) => {
      if (r) {
        goBackFn();
      }
    }
  };

  const modalStore = getModalStore();
</script>

<svelte:head>
  {#if !$mod.fetching && !$mod.error && $mod.data.mod}
    <MetaDescriptors
      description="Creating a new version of mod {$mod.data.mod.name}"
      title="New version of mod {$mod.data.mod.name}" />
  {/if}
</svelte:head>

<div class="flex h-auto flex-wrap items-center justify-between">
  <h1 class="my-4 text-4xl font-bold">
    New Version for
    {#if $mod.fetching}
      ...
    {:else if !$mod.error}
      {$mod.data.mod.name}
    {/if}
  </h1>
  <div>
    <button
      class="variant-ghost-primary btn"
      title="View the description page for this mod"
      on:click={() => modalStore.trigger(backModal)}>
      <span class="material-icons pr-2">arrow_back</span>
      Back to Mod
    </button>
  </div>
</div>

<div class="card p-4">
  <section>
    {#if $mod.fetching}
      <p>Loading...</p>
    {:else if $mod.error}
      <p>Oh no... {$mod.error.message}</p>
    {:else}
      <VersionForm {onSubmit} modReference={$mod.data.mod.mod_reference} submitIcon="add_circle" />

      {#if $uploadStatus}
        <div class="relative pt-4">
          <div class="mb-2 flex items-center justify-between">
            <div>
              <span
                class="inline-block rounded-full bg-yellow-600 px-2 py-1 text-xs font-semibold uppercase text-white">
                {$uploadStatus}
              </span>
            </div>
            <div class="text-right">
              <span class="inline-block text-xs font-semibold text-white">{$uploadPercent.toFixed(0)}%</span>
            </div>
          </div>
          <div class="mb-4 flex h-2 overflow-hidden rounded bg-neutral-600 text-xs">
            <div
              style="width: {$uploadPercent.toFixed(0)}%"
              class="flex flex-col justify-center whitespace-nowrap bg-yellow-600 text-center text-white shadow-none" />
          </div>
        </div>
      {/if}

      <div class="p-4">
        <span>Edit Compatibility Info</span>
      </div>
      <div class="card p-4">
        <EditCompatibilityForm
          mod={$mod.data.mod}
          modId={$mod.data.mod.id}
          on:fail={() => {
            alert('Failed to update compatibility information, check browser console for more info.');
          }}
          on:submit={() => {
            alert("Mod compatibility data updated. Don't forget to upload the version too!");
          }} />
      </div>
    {/if}
  </section>
</div>
