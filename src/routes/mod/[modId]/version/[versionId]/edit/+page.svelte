<script lang="ts">
  import { queryStore, getContextClient } from '@urql/svelte';
  import { GetModVersionDocument, UpdateVersionDocument } from '$lib/generated';
  import Toast from '$lib/components/general/Toast.svelte';
  import { goto } from '$app/navigation';
  import VersionForm from '$lib/components/versions/VersionForm.svelte';
  import type { VersionData } from '$lib/models/versions';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import Card, { Content } from '@smui/card';
  import type { PageData } from './$types';

  export let data: PageData;

  $: ({ modId, versionId } = data);

  const client = getContextClient();

  let errorMessage = '';
  let errorToast = false;

  $: version = queryStore({
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
          errorMessage = 'Error editing version: ' + value.error.message;
          errorToast = true;
        } else {
          // TODO Toast or something
          return goto(base + '/mod/' + modId + '/version/' + versionId);
        }
      });

  $: if (!errorToast) {
    errorMessage = '';
  }

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

<Card>
  <Content>
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
  </Content>
</Card>

<Toast bind:running={errorToast}>
  <span>{errorMessage}</span>
</Toast>
