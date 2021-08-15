<script lang="ts" context="module">
  import {paramsToProps} from "$lib/utils/routing";

  export const load = paramsToProps();
</script>

<script lang="ts">
  import {mutation, operationStore, query} from '@urql/svelte';
  import {GetModVersionDocument, UpdateVersionDocument} from "$lib/generated";
  import Toast from "$lib/components/general/Toast.svelte";
  import {goto} from '$app/navigation';
  import VersionForm from "$lib/components/versions/VersionForm.svelte";
  import type {VersionData} from "$lib/models/versions";
  import {base} from "$app/paths";

  export let modId!: string;
  export let versionId!: string;

  let errorMessage = '';
  let errorToast = false;

  const version = operationStore(
    GetModVersionDocument,
    {version: versionId}
  );

  const editVersion = mutation({
    query: UpdateVersionDocument
  });

  const onSubmit = async (data: VersionData) => {
    return editVersion({
      versionId: versionId,
      version: data
    }).then(value => {
      if (value.error) {
        console.error(value.error.message);
        errorMessage = 'Error editing version: ' + value.error.message;
        errorToast = true;
      } else {
        // TODO Toast or something
        return goto(base + '/mod/' + modId + '/version/' + versionId);
      }
    });
  }

  $: if (!errorToast) errorMessage = '';

  $: initialValues = $version.data ? {
    ...$version.data.getVersion,
    logo: undefined
  } : undefined;

  query(version);
</script>

<h1 class="text-4xl my-4 font-bold">Edit Version</h1>

{#if $version.fetching}
  <p>Loading...</p>
{:else if $version.error}
  <p>Oh no... {$version.error.message}</p>
{:else}
  <VersionForm onSubmit={onSubmit} initialValues={initialValues} editing={true} submitText="Save"/>
{/if}

<Toast bind:running={errorToast}>
  <span>{errorMessage}</span>
</Toast>
