<script lang="ts" context="module">
  import { paramsToProps } from '$lib/utils/routing';

  export const load = paramsToProps();
</script>

<script lang="ts">
  import { mutation, operationStore, query } from '@urql/svelte';
  import { GetSmlVersionAdminDocument, UpdateSmlVersionDocument } from '$lib/generated';
  import Toast from '$lib/components/general/Toast.svelte';
  import { goto } from '$app/navigation';
  import type { SMLVersionData } from '$lib/models/sml-versions';
  import SMLVersionForm from '$lib/components/sml-versions/SMLVersionForm.svelte';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import Card, { Content } from '@smui/card';

  export let smlVersionId!: string;

  let errorMessage = '';
  let errorToast = false;

  const smlVersion = operationStore(GetSmlVersionAdminDocument, { smlVersionID: smlVersionId });

  const editSMLVersion = mutation({
    query: UpdateSmlVersionDocument
  });

  const onSubmit = (data: SMLVersionData) => {
    editSMLVersion({
      smlVersionID: smlVersionId,
      smlVersion: data
    }).then((value) => {
      if (value.error) {
        console.error(value.error.message);
        errorMessage = 'Error editing SMLVersion: ' + value.error.message;
        errorToast = true;
      } else {
        // TODO Toast or something
        goto(base + '/admin/sml-versions');
      }
    });
  };

  $: if (!errorToast) {
    errorMessage = '';
  }

  $: initialValues = $smlVersion.data
    ? {
        ...$smlVersion.data.getSMLVersion,
        logo: undefined
      }
    : undefined;

  query(smlVersion);
</script>

<svelte:head>
  <MetaDescriptors description="Edit SML Version" title="Admin: Edit SML Version" />
</svelte:head>

<h1 class="text-4xl my-4 font-bold">Edit SMLVersion</h1>

<Card>
  <Content>
    {#if $smlVersion.fetching}
      <p>Loading...</p>
    {:else if $smlVersion.error}
      <p>Oh no... {$smlVersion.error.message}</p>
    {:else}
      <SMLVersionForm {onSubmit} {initialValues} editing submitText="Save" />
    {/if}
  </Content>
</Card>

<Toast bind:running={errorToast}>
  <span>{errorMessage}</span>
</Toast>
