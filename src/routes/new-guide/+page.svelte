<script lang="ts">
  import { getContextClient } from '@urql/svelte';
  import { NewGuideDocument } from '$lib/generated';
  import { goto } from '$app/navigation';
  import GuideForm from '$lib/components/guides/GuideForm.svelte';
  import type { GuideData } from '$lib/models/guides';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import { toaster } from '$lib/utils/toaster-svelte';

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
          toaster.error({
            description: 'Error creating guide: ' + value.error.message
          });
        } else {
          toaster.success({
            description: `Guide created`,
            duration: 5000
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

<div class="card preset-filled-surface-100-900 p-4">
  <section>
    <GuideForm {onSubmit} submitIcon="add_circle" />
  </section>
</div>
