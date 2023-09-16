<script lang="ts">
  import { getContextClient, queryStore } from '@urql/svelte';
  import { EditGuideDocument, GetGuideDocument } from '$lib/generated';
  import { goto } from '$app/navigation';
  import GuideForm from '$lib/components/guides/GuideForm.svelte';
  import type { GuideData } from '$lib/models/guides';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import type { PageData } from './$types';
  import { getToastStore } from "@skeletonlabs/skeleton";

  export let data: PageData;

  const { guideId } = data;

  const client = getContextClient();

  const toastStore = getToastStore();

  const guide = queryStore({
    query: GetGuideDocument,
    client,
    variables: { guide: guideId }
  });

  const onSubmit = (guideData: GuideData) => {
    client
      .mutation(EditGuideDocument, {
        guideId: guideId,
        guide: guideData
      })
      .toPromise()
      .then((value) => {
        if (value.error) {
          console.error(value.error.message);
          toastStore.trigger({
            message: 'Error editing guide: ' + value.error.message,
            background: 'variant-filled-error',
            autohide: false
          });
        } else {
          toastStore.trigger({
            message: `Guide updated`,
            background: 'variant-filled-success',
            timeout: 5000
          });
          goto(base + '/guide/' + value.data.updateGuide.id);
        }
      });
  };
</script>

<svelte:head>
  {#if !$guide.fetching && !$guide.error && $guide.data.getGuide}
    <MetaDescriptors
      description="Editing guide '{$guide.data.getGuide.short_description}'"
      title="Edit guide '{$guide.data.getGuide.name}'" />
  {/if}
</svelte:head>

<h1 class="text-4xl my-4 font-bold">Edit Guide</h1>

<div class="card p-4">
  <section>
    {#if $guide.fetching}
      <p>Loading...</p>
    {:else if $guide.error}
      <p>Oh no... {$guide.error.message}</p>
    {:else}
      <GuideForm {onSubmit} initialValues={$guide.data.getGuide} submitText="Save" />
    {/if}
  </section>
</div>
