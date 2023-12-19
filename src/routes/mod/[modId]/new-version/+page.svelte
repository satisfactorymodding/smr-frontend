<script lang="ts">
  import { getContextClient, queryStore } from '@urql/svelte';
  import { goto } from '$app/navigation';
  import type { VersionData } from '$lib/models/versions';
  import VersionForm from '$lib/components/versions/VersionForm.svelte';
  import { GetModReferenceDocument } from '$lib/generated';
  import { writable } from 'svelte/store';
  import { chunkedUpload } from '$lib/utils/chunked-upload';
  import type { UploadState } from '$lib/utils/chunked-upload';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import type { PageData } from './$types';
  import { getToastStore } from "@skeletonlabs/skeleton";

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
    query: GetModReferenceDocument,
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
</script>

<svelte:head>
  {#if !$mod.fetching && !$mod.error && $mod.data.mod}
    <MetaDescriptors
      description="Creating a new version of mod {$mod.data.mod.name}"
      title="New version of mod {$mod.data.mod.name}" />
  {/if}
</svelte:head>

<div class="flex flex-wrap h-auto justify-between items-center">
<h1 class="text-4xl my-4 font-bold">
  New Version for
  {#if $mod.fetching}
    ...
  {:else if !$mod.error}
    {$mod.data.mod.name}
  {/if}
</h1>
  <div>
    <button
      class="btn variant-ghost-primary"
      title="View the description page for this mod"
      on:click={() => goto(base + '/mod/' + modId)}>
      Return to Description Page (discard new version)
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
      <VersionForm {onSubmit} modReference={$mod.data.mod.mod_reference} />

      {#if $uploadStatus}
        <div class="relative pt-4">
          <div class="flex mb-2 items-center justify-between">
            <div>
              <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-yellow-600">
                {$uploadStatus}
              </span>
            </div>
            <div class="text-right">
              <span class="text-xs font-semibold inline-block text-white">{$uploadPercent.toFixed(0)}%</span>
            </div>
          </div>
          <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-600">
            <div
              style="width: {$uploadPercent.toFixed(0)}%"
              class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-600" />
          </div>
        </div>
      {/if}
    {/if}
  </section>
</div>
