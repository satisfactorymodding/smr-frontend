<script lang="ts">
  import { getContextClient } from '@urql/svelte';
  import { NewSmlVersionDocument } from '$lib/generated';
  import { goto } from '$app/navigation';
  import type { SMLVersionData } from '$lib/models/sml-versions';
  import SMLVersionForm from '$lib/components/sml-versions/SMLVersionForm.svelte';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import { getToastStore } from '@skeletonlabs/skeleton';

  const client = getContextClient();

  const toastStore = getToastStore();

  const onSubmit = (data: SMLVersionData) => {
    client
      .mutation(NewSmlVersionDocument, {
        smlVersion: data
      })
      .toPromise()
      .then((value) => {
        if (value.error) {
          console.error(value.error.message);
          toastStore.trigger({
            message: 'Error creating SML Version: ' + value.error.message,
            background: 'variant-filled-error',
            autohide: false
          });
        } else {
          toastStore.trigger({
            message: `SML version created`,
            background: 'variant-filled-success',
            timeout: 5000
          });
          goto(base + '/admin/sml-versions');
        }
      });
  };
</script>

<svelte:head>
  <MetaDescriptors description="New SML Version" title="Admin: New SML Version" />
</svelte:head>

<h1 class="text-4xl my-4 font-bold">New SML Version</h1>

<div class="card p-4">
  <section>
    <SMLVersionForm {onSubmit} />
  </section>
</div>
