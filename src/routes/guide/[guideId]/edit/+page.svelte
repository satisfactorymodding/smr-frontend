<script lang="ts">
  import { getContextClient, queryStore } from '@urql/svelte';
  import { EditGuideDocument, GetGuideDocument } from '$lib/generated';
  import Toast from '$lib/components/general/Toast.svelte';
  import { goto } from '$app/navigation';
  import GuideForm from '$lib/components/guides/GuideForm.svelte';
  import Card, { Content } from '@smui/card';
  import type { GuideData } from '$lib/models/guides';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  $: ({ guideId } = data);

  const client = getContextClient();

  let errorMessage = '';
  let errorToast = false;

  $: guide = queryStore({
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
          errorMessage = 'Error editing guide: ' + value.error.message;
          errorToast = true;
        } else {
          // TODO Toast or something
          goto(base + '/guide/' + value.data.updateGuide.id);
        }
      });
  };

  $: if (!errorToast) {
    errorMessage = '';
  }
</script>

<svelte:head>
  {#if !$guide.fetching && !$guide.error && $guide.data.getGuide}
    <MetaDescriptors
      description="Editing guide '{$guide.data.getGuide.short_description}'"
      title="Edit guide '{$guide.data.getGuide.name}'" />
  {/if}
</svelte:head>

<h1 class="text-4xl my-4 font-bold">Edit Guide</h1>

<Card>
  <Content>
    {#if $guide.fetching}
      <p>Loading...</p>
    {:else if $guide.error}
      <p>Oh no... {$guide.error.message}</p>
    {:else}
      <GuideForm {onSubmit} initialValues={$guide.data.getGuide} submitText="Save" />
    {/if}
  </Content>
</Card>

<Toast bind:running={errorToast}>
  <span>{errorMessage}</span>
</Toast>
