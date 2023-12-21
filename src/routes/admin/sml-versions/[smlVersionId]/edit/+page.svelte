<script lang="ts">
  import { getContextClient, queryStore } from '@urql/svelte';
  import { GetSmlVersionAdminDocument, UpdateSmlVersionDocument } from '$lib/generated';
  import { goto } from '$app/navigation';
  import type { SMLVersionData } from '$lib/models/sml-versions';
  import SMLVersionForm from '$lib/components/sml-versions/SMLVersionForm.svelte';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import type { PageData } from './$types';
  import { getToastStore } from '@skeletonlabs/skeleton';

  export let data: PageData;

  const { smlVersionId } = data;

  const client = getContextClient();

  const toastStore = getToastStore();

  const smlVersion = queryStore({
    query: GetSmlVersionAdminDocument,
    client,
    variables: { smlVersionID: smlVersionId }
  });

  const onSubmit = (smlVersionData: SMLVersionData) => {
    client
      .mutation(UpdateSmlVersionDocument, {
        smlVersionID: smlVersionId,
        smlVersion: smlVersionData
      })
      .toPromise()
      .then((value) => {
        if (value.error) {
          console.error(value.error.message);
          toastStore.trigger({
            message: 'Error editing SMLVersion: ' + value.error.message,
            background: 'variant-filled-error',
            autohide: false
          });
        } else {
          toastStore.trigger({
            message: `SML version updated`,
            background: 'variant-filled-success',
            timeout: 5000
          });
          goto(base + '/admin/sml-versions');
        }
      });
  };

  $: initialValues = $smlVersion.data
    ? ({
        ...$smlVersion.data.getSMLVersion,
        logo: undefined
      } as unknown as SMLVersionData)
    : undefined;
</script>

<svelte:head>
  <MetaDescriptors description="Edit SML Version" title="Admin: Edit SML Version" />
</svelte:head>

<h1 class="text-4xl my-4 font-bold">Edit SMLVersion</h1>

<div class="card p-4">
  <section>
    {#if $smlVersion.fetching}
      <p>Loading...</p>
    {:else if $smlVersion.error}
      <p>Oh no... {$smlVersion.error.message}</p>
    {:else}
      <SMLVersionForm {onSubmit} {initialValues} submitText="Save" />
    {/if}
  </section>
</div>
