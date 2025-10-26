<script lang="ts">
  import { DeleteGuideDocument } from '$lib/generated';
  import GuideInfo from '$lib/components/guides/GuideInfo.svelte';
  import GuideAuthor from '$lib/components/guides/GuideAuthor.svelte';
  import { user } from '$lib/stores/user';
  import { goto } from '$app/navigation';
  import { markdown } from '$lib/utils/markdown';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import { getContextClient } from '@urql/svelte';
  import type { PageData } from './$types';
  import Page404 from '$lib/components/general/Page404.svelte';
  import { toaster } from '$lib/utils/toaster-svelte';
  import BasicModal from '$lib/components/general/BasicModal.svelte';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

  let { guideId, guide } = $derived(data);

  const client = getContextClient();

  let canUserEdit = $derived($user?.roles?.deleteContent || $user?.id === $guide?.data?.getGuide?.user?.id);

  const deleteGuideFn = () => {
    client
      .mutation(DeleteGuideDocument, { guideId })
      .toPromise()
      .then((value) => {
        if (value.error) {
          console.error(value.error.message);
          toaster.error({
            description: 'Error deleting guide: ' + value.error.message
          });
        } else {
          toaster.success({
            description: `Guide deleted`,
            duration: 5000
          });
          goto(base + '/guides');
        }
      });
  };

  let deleteModalOpen = $state(false);
</script>

<svelte:head>
  {#if !$guide.fetching && !$guide.error && $guide.data.getGuide}
    <MetaDescriptors description={$guide.data.getGuide.short_description} title={$guide.data.getGuide.name} />
  {/if}
</svelte:head>

{#if $guide.fetching}
  <p>Loading...</p>
{:else if $guide.error}
  <p>Oh no... {$guide.error.message}</p>
{:else if $guide.data.getGuide}
  <div class="xlx:grid-flow-row grid gap-6">
    <div class="flex h-auto flex-wrap items-center justify-between">
      <h1 class="text-4xl font-bold">{$guide.data.getGuide.name}</h1>

      <div>
        {#if canUserEdit}
          <button
            class="btn border border-primary-500 preset-tonal-primary"
            onclick={() => goto(base + '/guide/' + guideId + '/edit')}>
            <span class="material-icons pr-2">edit</span>
            Edit</button>

          <BasicModal
            bind:open={deleteModalOpen}
            title="Delete guide?"
            body="Are you sure you wish to delete this guide?"
            buttonTextCancel="Cancel"
            buttonTextConfirm="Delete"
            confirm={deleteGuideFn} />
          <button class="btn border border-primary-500 preset-tonal-primary" onclick={() => (deleteModalOpen = true)}>
            <span class="material-icons pr-2">delete</span>
            Delete</button>
        {/if}
      </div>
    </div>
    <div class="grid-auto-max grid auto-cols-fr gap-4">
      <div class="h-fit card preset-filled-surface-100-900 p-4">
        <section>
          <div class="markdown-content break-words">
            {#await markdown($guide.data.getGuide.guide) then guideRendered}
              <!-- eslint-disable -->
              <p>{@html guideRendered}</p>
            {/await}
          </div>
        </section>
      </div>
      <div class="grid auto-rows-min grid-cols-1 gap-8">
        <GuideInfo guide={$guide.data.getGuide} />
        <GuideAuthor author={$guide.data.getGuide.user} />
      </div>
    </div>
  </div>
{:else}
  <Page404 />
{/if}
