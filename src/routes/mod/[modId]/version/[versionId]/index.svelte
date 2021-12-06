<script lang="ts" context="module">
  import { paramsToProps } from '$lib/utils/routing';
  import { operationStore } from '@urql/svelte';
  import { GetModVersionDocument } from '$lib/generated';
  import { loadWaitForNoFetch } from '$lib/utils/gql';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';

  const versionQ = operationStore(GetModVersionDocument, { version: undefined });

  export const load = paramsToProps(async (input) => {
    versionQ.variables.version = input.page.params.versionId;
    return loadWaitForNoFetch({
      version: versionQ
    })(input);
  });
</script>

<script lang="ts">
  import { mutation, query } from '@urql/svelte';
  import { DeleteVersionDocument } from '$lib/generated';
  import VersionDescription from '$lib/components/versions/VersionDescription.svelte';
  import VersionInfo from '$lib/components/versions/VersionInfo.svelte';
  import { API_REST } from '$lib/core';
  import Toast from '$lib/components/general/Toast.svelte';
  import Dialog from '$lib/components/general/Dialog.svelte';
  import { writable } from 'svelte/store';
  import { goto } from '$app/navigation';
  import { user } from '$lib/stores/user';
  import { base } from '$app/paths';
  import { browser } from '$app/env';
  import Button, { Label, Icon } from '@smui/button';

  export let modId!: string;
  export let versionId!: string;
  export let version: typeof versionQ;

  let errorMessage = '';
  let errorToast = false;

  const deleteVersion = mutation({
    query: DeleteVersionDocument
  });

  $: canUserEdit =
    $user?.roles?.deleteContent ||
    $version?.data?.getVersion.mod?.authors?.findIndex((author) => author.user_id == $user?.id) >= 0;

  const deleteDialogOpen = writable<boolean>(false);

  const deleteVersionFn = () => {
    deleteVersion({ versionId }).then((value) => {
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

  if (browser) {
    query(version);
  }
</script>

<svelte:head>
  {#if !$version.fetching && !$version.error && $version.data.getVersion}
    <MetaDescriptors
      description="Information for mod version {$version.data.getVersion.mod.name} {$version.data.getVersion.version}"
      title="Mod version {$version.data.getVersion.mod.name} {$version.data.getVersion.version}"
    />
  {/if}
</svelte:head>

{#if $version.fetching}
  <p>Loading...</p>
{:else if $version.error}
  <p>Oh no... {$version.error.message}</p>
{:else if $version.data.getVersion}
  <div class="grid gap-8 grid-auto-max">
    <div class="grid grid-cols-1 auto-rows-min gap-8">
      <div class="grid grid-flow-col grid-auto-max h-auto items-center">
        <h1 class="text-4xl my-4 font-bold">
          {$version.data.getVersion.mod.name}
          Version {$version.data.getVersion.version}
        </h1>

        <div class="grid grid-flow-col gap-4">
          {#if canUserEdit}
            <Button
              variant="outlined"
              on:click={() => goto(base + '/mod/' + modId + '/version/' + versionId + '/edit')}
            >
              Edit
            </Button>
            <Button variant="outlined" on:click={() => deleteDialogOpen.set(true)}>Delete</Button>
          {/if}

          <Button variant="outlined" href={API_REST + '/mod/' + modId + '/versions/' + versionId + '/download'}>
            Download
          </Button>
          <!-- TODO SMM -->
          <Button variant="outlined" href={base}>
            <Label>Install</Label>
            <Icon class="material-icons">download</Icon>
          </Button>
        </div>
      </div>
      <VersionDescription changelog={$version.data.getVersion.changelog} />
    </div>
    <div class="grid grid-cols-1 auto-rows-min gap-8">
      <VersionInfo version={$version.data.getVersion} />
    </div>
  </div>

  <Dialog bind:open={$deleteDialogOpen}>
    <div class="grid grid-flow-row gap-4">
      <h3 class="text-2xl font-bold">Delete Version?</h3>

      <span>Are you sure you wish to delete this version</span>

      <button class="py-1 px-4 rounded text-base bg-yellow-600" on:click={() => deleteDialogOpen.set(false)}>
        Cancel
      </button>
      <button class="py-1 px-4 rounded text-base bg-red-500" on:click={() => deleteVersionFn()}> Delete</button>
    </div>
  </Dialog>

  <Toast bind:running={errorToast}>
    <span>{errorMessage}</span>
  </Toast>
{:else}
  <!-- TODO Better 404 -->
  404
{/if}

<style lang="postcss">
  .grid-auto-max {
    grid-template-columns: auto max-content;
  }
</style>
