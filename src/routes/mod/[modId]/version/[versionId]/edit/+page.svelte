<script lang="ts">
  import { queryStore, getContextClient } from '@urql/svelte';
  import { GetModVersionDocument, UpdateVersionDocument } from '$lib/generated';
  import { goto } from '$app/navigation';
  import VersionForm from '$lib/components/versions/VersionForm.svelte';
  import type { VersionData } from '$lib/models/versions';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import type { PageData } from './$types';
  import { toaster } from '$lib/utils/toaster-svelte';
  import BasicModal from '$lib/components/general/BasicModal.svelte';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

  let { modId, versionId } = $derived(data);

  const client = getContextClient();

  let version = $derived(
    queryStore({
      query: GetModVersionDocument,
      client,
      variables: { version: versionId }
    })
  );

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
          toaster.error({
            description: 'Error editing version: ' + value.error.message
          });
        } else {
          toaster.success({
            description: `Version updated`,
            duration: 5000
          });
          return goto(base + '/mod/' + modId + '/version/' + versionId);
        }
      });

  let initialValues = $derived(
    $version.data
      ? {
          ...$version.data.getVersion,
          logo: undefined
        }
      : undefined
  );

  const goBackFn = () => {
    goto(base + '/mod/' + modId + '/version/' + versionId);
  };

  let backModalOpen = $state(false);
</script>

<svelte:head>
  {#if !$version.fetching && !$version.error && $version.data.getVersion}
    <MetaDescriptors
      description="Editing mod version {$version.data.getVersion.mod.name} {$version.data.getVersion.version}"
      title="Edit mod version {$version.data.getVersion.mod.name} {$version.data.getVersion.version}" />
  {/if}
</svelte:head>

<div class="flex h-auto flex-wrap items-center justify-between">
  <h1 class="my-4 text-4xl font-bold">Edit Version</h1>
  <div>
    <BasicModal
      bind:open={backModalOpen}
      title="Go Back?"
      body="Going back will discard any unsaved changes. Are you sure you wish to continue?"
      buttonTextCancel="Keep Editing"
      buttonTextConfirm="Go Back"
      confirm={goBackFn} />
    <button class="btn border border-primary-500 preset-tonal-primary" onclick={() => (backModalOpen = true)}>
      <span class="material-icons pr-2">arrow_back</span>
      Back to Versions</button>
  </div>
</div>

<div class="card preset-filled-surface-100-900 p-4">
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
        submitText="Save"
        submitIcon="save" />
    {/if}
  </section>
</div>
