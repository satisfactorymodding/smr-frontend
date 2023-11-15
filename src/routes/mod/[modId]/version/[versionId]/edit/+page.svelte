<script lang="ts">
  import { queryStore, getContextClient } from '@urql/svelte';
  import { GetModVersionDocument, UpdateVersionDocument } from '$lib/generated';
  import { goto } from '$app/navigation';
  import VersionForm from '$lib/components/versions/VersionForm.svelte';
  import type { VersionData } from '$lib/models/versions';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import type { PageData } from './$types';
  import { getToastStore } from "@skeletonlabs/skeleton";

  export let data: PageData;

  const { modId, versionId } = data;

  const client = getContextClient();

  const toastStore = getToastStore();

  const version = queryStore({
    query: GetModVersionDocument,
    client,
    variables: { version: versionId }
  });

  const onSubmit = async (versionData: VersionData) =>
    client
      .mutation(UpdateVersionDocument, {
        versionId: versionId,
        version: versionData
      })
      .toPromise()
      .then((value) => {
        if (value.error) {
          console.error(value.error.message);
          toastStore.trigger({
            message: 'Error editing version: ' + value.error.message,
            background: 'variant-filled-error',
            autohide: false
          });
        } else {
          toastStore.trigger({
            message: `Version updated`,
            background: 'variant-filled-success',
            timeout: 5000
          });
          return goto(base + '/mod/' + modId + '/version/' + versionId);
        }
      });

  $: initialValues = $version.data
    ? {
        ...$version.data.getVersion,
        logo: undefined
      }
    : undefined;
</script>

<svelte:head>
  {#if !$version.fetching && !$version.error && $version.data.getVersion}
    <MetaDescriptors
      description="Editing mod version {$version.data.getVersion.mod.name} {$version.data.getVersion.version}"
      title="Edit mod version {$version.data.getVersion.mod.name} {$version.data.getVersion.version}" />
  {/if}
</svelte:head>

<h1 class="text-4xl my-4 font-bold">Edit Version</h1>

<div class="card p-4">
  <section>
    {#if $version.fetching}
      <p>Loading...</p>
    {:else if $version.error}
      <p>Oh no... {$version.error.message}</p>
    {:else}
      <VersionForm
        {onSubmit}
        {initialValues}
        modReference={$version.data.getVersion.mod.mod_reference}
        editing={true}
        submitText="Save" />
    {/if}
  </section>
</div>
