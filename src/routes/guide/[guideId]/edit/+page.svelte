<script lang="ts">
  import { getContextClient, queryStore } from '@urql/svelte';
  import { EditGuideDocument, GetGuideDocument } from '$lib/generated';
  import { goto } from '$app/navigation';
  import GuideForm from '$lib/components/guides/GuideForm.svelte';
  import type { GuideData } from '$lib/models/guides';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import type { PageData } from './$types';
  import { getModalStore, getToastStore, type ModalSettings } from '@skeletonlabs/skeleton';

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

  const goBackFn = () => {
    goto(base + '/guide/' + guideId);
  };

  const backModal: ModalSettings = {
    type: 'confirm',
    title: 'Go Back?',
    buttonTextCancel: 'Keep Editing',
    buttonTextConfirm: 'Go Back',
    body: 'Going back will discard any unsaved changes. Are you sure you wish to continue?',
    response: (r: boolean) => {
      if (r) {
        goBackFn();
      }
    }
  };

  const modalStore = getModalStore();
</script>

<svelte:head>
  {#if !$guide.fetching && !$guide.error && $guide.data.getGuide}
    <MetaDescriptors
      description="Editing guide '{$guide.data.getGuide.short_description}'"
      title="Edit guide '{$guide.data.getGuide.name}'" />
  {/if}
</svelte:head>

<div class="flex flex-wrap h-auto justify-between items-center">
  <h1 class="text-4xl my-4 font-bold">Edit Guide</h1>
  <div>
    <button class="btn variant-ghost-primary" on:click={() => modalStore.trigger(backModal)}>
      <span class="material-icons pr-2">arrow_back</span>
      Back to Guide</button>
  </div>
</div>

<div class="card p-4">
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
