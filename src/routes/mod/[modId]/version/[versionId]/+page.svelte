<script lang="ts">
  import { DeleteVersionDocument } from '$lib/generated';
  import VersionDescription from '$lib/components/versions/VersionDescription.svelte';
  import VersionInfo from '$lib/components/versions/VersionInfo.svelte';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import { API_REST } from '$lib/core';
  import Toast from '$lib/components/general/Toast.svelte';
  import { writable } from 'svelte/store';
  import { goto } from '$app/navigation';
  import { user } from '$lib/stores/user';
  import { base } from '$app/paths';
  import { installMod } from '$lib/stores/launcher';
  import { prettyArch } from '$lib/utils/formatting';
  import { getContextClient } from '@urql/svelte';
  import type { PageData } from './$types';
  import { getModalStore, type ModalSettings, popup } from '@skeletonlabs/skeleton';

  export let data: PageData;

  const { modId, versionId, version } = data;

  const client = getContextClient();

  let errorMessage = '';
  let errorToast = false;

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
          errorMessage = 'Error deleting version: ' + value.error.message;
          errorToast = true;
        } else {
          // TODO Toast or something
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
    <div class="flex flex-wrap h-auto justify-between items-center">
      <h1 class="text-4xl font-bold">
        {$version.data.getVersion.mod.name}
        Version {$version.data.getVersion.version}
      </h1>

      <div class="grid grid-flow-col gap-4">
        {#if canUserEdit}
          <button
            class="btn variant-ghost-primary"
            on:click={() => goto(base + '/mod/' + modId + '/version/' + versionId + '/edit')}>
            Edit
          </button>
          <button class="btn variant-ghost-primary" on:click={() => modalStore.trigger(deleteModal)}>Delete</button>
        {/if}
        {#if $version.data.getVersion.arch.length != 0}
          <button
            class="btn variant-ghost-primary"
            use:popup={{
              event: 'focus-click',
              target: 'versionArchDropdown',
              placement: 'bottom',
              closeQuery: 'a'
            }}>
            <span>Download</span>
            <span class="material-icons" style="margin: 0;">arrow_drop_down</span>
          </button>

          <div class="card w-72 shadow-xl" data-popup="versionArchDropdown">
            <nav class="list-nav">
              <ul>
                {#each $version.data.getVersion.arch as arch}
                  <li>
                    <a
                      class="w-full"
                      href={API_REST + '/mod/' + modId + '/versions/' + versionId + '/' + arch.platform + '/download'}>
                      <span>Download {prettyArch(arch.platform)}</span>
                    </a>
                  </li>
                {/each}
              </ul>
            </nav>
          </div>
        {:else}
          <a class="btn variant-ghost-primary" href={base + '/mod/' + modId + '/version/' + versionId}>View</a>
          <a
            class="btn variant-ghost-primary"
            href={API_REST + '/mod/' + modId + '/versions/' + versionId + '/download'}>Download</a>
        {/if}
        <button
          class="btn variant-ghost-primary"
          on:click={() => installMod($version.data.getVersion.mod.mod_reference)}>
          <span>Install</span>
          <span class="material-icons">download</span>
        </button>

        <a class="btn variant-ghost-primary" href={base + '/mod/' + modId}>
          <span>Mod</span>
          <span class="material-icons">extension</span>
        </a>
      </div>
    </div>
    <div class="grid grid-auto-max auto-cols-fr gap-4">
      <VersionDescription changelog={$version.data.getVersion.changelog} />
      <div class="grid grid-cols-1 auto-rows-min gap-8">
        <VersionInfo version={$version.data.getVersion} />
      </div>
    </div>
  </div>

  <Toast bind:running={errorToast}>
    <span>{errorMessage}</span>
  </Toast>
{:else}
  <!-- TODO Better 404 -->
  404
{/if}
