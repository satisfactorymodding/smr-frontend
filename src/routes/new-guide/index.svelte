<script lang="ts">
  import { mutation } from '@urql/svelte';
  import { NewGuideDocument } from '$lib/generated';
  import Toast from '$lib/components/general/Toast.svelte';
  import { goto } from '$app/navigation';
  import GuideForm from '$lib/components/guides/GuideForm.svelte';
  import type { GuideData } from '$lib/models/guides';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import Card, { Content } from '@smui/card';

  let errorMessage = '';
  let errorToast = false;

  const newGuide = mutation({
    query: NewGuideDocument
  });

  const onSubmit = (data: GuideData) => {
    newGuide({
      guide: data
    }).then((value) => {
      if (value.error) {
        console.error(value.error.message);
        errorMessage = 'Error creating guide: ' + value.error.message;
        errorToast = true;
      } else {
        // TODO Toast or something
        goto(base + '/guide/' + value.data.createGuide.id);
      }
    });
  };

  $: if (!errorToast) {
    errorMessage = '';
  }
</script>

<svelte:head>
  <MetaDescriptors description="Creating a new guide" title="New guide" />
</svelte:head>

<h1 class="text-4xl my-4 font-bold">New Guide</h1>

<Card>
  <Content>
    <GuideForm {onSubmit} />
  </Content>
</Card>

<Toast bind:running={errorToast}>
  <span>{errorMessage}</span>
</Toast>
