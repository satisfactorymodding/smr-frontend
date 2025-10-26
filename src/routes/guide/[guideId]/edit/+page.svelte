<script lang="ts">
  import { getContextClient, queryStore } from '@urql/svelte';
  import { EditGuideDocument, GetGuideDocument } from '$lib/generated';
  import { goto } from '$app/navigation';
  import GuideForm from '$lib/components/guides/GuideForm.svelte';
  import type { GuideData } from '$lib/models/guides';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import type { PageData } from './$types';
  import { toaster } from '$lib/utils/toaster-svelte';
  import BasicModal from '$lib/components/general/BasicModal.svelte';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

  let { guideId } = $derived(data);

  const client = getContextClient();

  let guide = $derived(
    queryStore({
      query: GetGuideDocument,
      client,
      variables: { guide: guideId }
    })
  );

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
          toaster.error({
            description: 'Error editing guide: ' + value.error.message
          });
        } else {
          toaster.success({
            description: `Guide updated`,
            duration: 5000
          });
          goto(base + '/guide/' + value.data.updateGuide.id);
        }
      });
  };

  const goBackFn = () => {
    goto(base + '/guide/' + guideId);
  };

  let backModalOpen = $state(false);
</script>

<svelte:head>
  {#if !$guide.fetching && !$guide.error && $guide.data.getGuide}
    <MetaDescriptors
      description="Editing guide '{$guide.data.getGuide.short_description}'"
      title="Edit guide '{$guide.data.getGuide.name}'" />
  {/if}
</svelte:head>

<div class="flex h-auto flex-wrap items-center justify-between">
  <h1 class="my-4 text-4xl font-bold">Edit Guide</h1>
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
      Back to Guide</button>
  </div>
</div>

<div class="card preset-filled-surface-100-900 p-4">
  <section>
    {#if $guide.fetching}
      <p>Loading...</p>
    {:else if $guide.error}
      <p>Oh no... {$guide.error.message}</p>
    {:else}
      <GuideForm {onSubmit} initialValues={$guide.data.getGuide} submitText="Save" submitIcon="save" />
    {/if}
  </section>
</div>
