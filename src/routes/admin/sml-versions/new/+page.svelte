<script lang="ts">
  import { getContextClient } from '@urql/svelte';
  import { NewSmlVersionDocument } from '$lib/generated';
  import Toast from '$lib/components/general/Toast.svelte';
  import { goto } from '$app/navigation';
  import type { SMLVersionData } from '$lib/models/sml-versions';
  import SMLVersionForm from '$lib/components/sml-versions/SMLVersionForm.svelte';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import Card, { Content } from '@smui/card';

  const client = getContextClient();

  let errorMessage = '';
  let errorToast = false;

  const onSubmit = (data: SMLVersionData) => {
    client
      .mutation(NewSmlVersionDocument, {
        smlVersion: data
      })
      .toPromise()
      .then((value) => {
        if (value.error) {
          console.error(value.error.message);
          errorMessage = 'Error creating mod: ' + value.error.message;
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
</script>

<svelte:head>
  <MetaDescriptors description="New SML Version" title="Admin: New SML Version" />
</svelte:head>

<h1 class="text-4xl my-4 font-bold">New SML Version</h1>

<Card>
  <Content>
    <SMLVersionForm {onSubmit} />
  </Content>
</Card>

<Toast bind:running={errorToast}>
  <span>{errorMessage}</span>
</Toast>
