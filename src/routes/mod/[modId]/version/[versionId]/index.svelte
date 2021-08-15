<script lang="ts" context="module">
  import {paramsToProps} from "$lib/utils/routing";

  export const load = paramsToProps();
</script>

<script lang="ts">
  import {mutation, operationStore, query} from "@urql/svelte";
  import {DeleteVersionDocument, GetModVersionDocument} from "$lib/generated";
  import VersionDescription from "$lib/components/versions/VersionDescription.svelte";
  import VersionInfo from "$lib/components/versions/VersionInfo.svelte";
  import Icon from "@iconify/svelte";
  import downloadIcon from '@iconify/icons-mdi/download.js';
  import {API_REST} from "$lib/core";
  import Toast from "$lib/components/general/Toast.svelte";
  import Dialog from "$lib/components/general/Dialog.svelte";
  import {writable} from "svelte/store";
  import {goto} from "$app/navigation";
  import {user} from "$lib/stores/user";
  import {base} from "$app/paths";

  export let modId!: string;
  export let versionId!: string;

  let errorMessage = '';
  let errorToast = false;

  const version = operationStore(
    GetModVersionDocument,
    {version: versionId}
  );

  const deleteVersion = mutation({
    query: DeleteVersionDocument
  });

  $: canUserEdit = $user?.roles?.deleteContent || $version?.data?.getVersion.mod?.authors?.findIndex(author => author.user_id == $user?.id) >= 0;

  const deleteDialogOpen = writable<boolean>(false);

  const deleteVersionFn = () => {
    deleteVersion({versionId}).then(value => {
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

  query(version);
</script>

{#if $version.fetching}
  <p>Loading...</p>
{:else if $version.error}
  <p>Oh no... {$version.error.message}</p>
{:else}
  {#if $version.data.getVersion}
    <div class="grid gap-8 grid-auto-max">
      <div class="grid grid-cols-1 auto-rows-min gap-8">
        <div class="grid grid-flow-col grid-auto-max h-auto items-center">
          <h1 class="text-4xl my-4 font-bold">{ $version.data.getVersion.mod.name } Version {$version.data.getVersion.version}</h1>

          <div class="grid grid-flow-col gap-4">
            {#if canUserEdit}
              <button class="py-2 px-4 rounded text-base bg-yellow-600"
                      on:click={() => goto(base + '/mod/' + modId + '/version/' + versionId + '/edit')}>
                Edit
              </button>
              <button class="py-2 px-4 rounded text-base bg-red-500"
                      on:click={() => deleteDialogOpen.set(true)}>
                Delete
              </button>
            {/if}

            <a href={API_REST + '/mod/' + modId + '/versions/' + versionId + '/download'}
               class="py-2 px-4 rounded text-base bg-green-600 text-center">Download</a>
            <!-- TODO SMM -->
            <a href="{base}" class="py-2 px-4 rounded text-base bg-blue-600 text-center">
              <span>Install</span>
              <Icon icon={downloadIcon} inline={true} class="inline-block"/>
            </a>
          </div>
        </div>
        <VersionDescription changelog={$version.data.getVersion.changelog}/>
      </div>
      <div class="grid grid-cols-1 auto-rows-min gap-8">
        <VersionInfo version={$version.data.getVersion}/>
      </div>
    </div>

    <Dialog bind:open={$deleteDialogOpen}>
      <div class="grid grid-flow-row gap-4">
        <h3 class="text-2xl font-bold">Delete Version?</h3>

        <span>Are you sure you wish to delete this version</span>

        <button class="py-1 px-4 rounded text-base bg-yellow-600" on:click={() => deleteDialogOpen.set(false)}>
          Cancel
        </button>
        <button class="py-1 px-4 rounded text-base bg-red-500" on:click={() => deleteVersionFn()}>
          Delete
        </button>
      </div>
    </Dialog>

    <Toast bind:running={errorToast}>
      <span>{errorMessage}</span>
    </Toast>
  {:else }
    <!-- TODO Better 404 -->
    404
  {/if}
{/if}

<style lang="postcss">
  .grid-auto-max {
    grid-template-columns: auto max-content;
  }
</style>
