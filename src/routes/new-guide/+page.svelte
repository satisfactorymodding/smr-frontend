<script lang="ts">
  import { getContextClient } from '@urql/svelte';
  import { NewGuideDocument } from '$lib/generated';
  import { goto } from '$app/navigation';
  import GuideForm from '$lib/components/guides/GuideForm.svelte';
  import type { GuideData } from '$lib/models/guides';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';

  const client = getContextClient();

  const onSubmit = (data: GuideData) => {
    client
      .mutation(NewGuideDocument, {
        guide: data
      })
      .toPromise()
      .then((value) => {
        if (value.error) {
          console.error(value.error.message);
          toastStore.trigger({
            message: 'Error creating guide: ' + value.error.message,
            background: 'preset-filled-error-500',
            autohide: false
          });
        } else {
          toastStore.trigger({
            message: `Guide created`,
            background: 'preset-filled-success-500',
            timeout: 5000
          });
          goto(base + '/guide/' + value.data.createGuide.id);
        }
      });
  };
</script>

<svelte:head>
  <MetaDescriptors description="Creating a new guide" title="New guide" />
</svelte:head>

<h1 class="my-4 text-4xl font-bold">New Guide</h1>

<div class="card p-4">
  <section>
    <GuideForm {onSubmit} submitIcon="add_circle" />
  </section>
</div>
