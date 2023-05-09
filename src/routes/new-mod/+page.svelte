<script lang="ts">
  import { getContextClient } from '@urql/svelte';
  import { NewModDocument } from '$lib/generated';
  import Toast from '$lib/components/general/Toast.svelte';
  import { goto } from '$app/navigation';
  import ModForm from '$lib/components/mods/ModForm.svelte';
  import type { ModData } from '$lib/models/mods';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import Card, { Content } from '@smui/card';

  let errorMessage = '';
  let errorToast = false;

  const client = getContextClient();

  const onSubmit = (data: ModData) => {
    client
      .mutation(NewModDocument, {
        mod: data
      })
      .toPromise()
      .then((value) => {
        if (value.error) {
          console.error(value.error.message);
          errorMessage = 'Error creating mod: ' + value.error.message;
          errorToast = true;
        } else {
          // TODO Toast or something
          goto(base + '/mod/' + value.data.createMod.id);
        }
      });
  };

  $: if (!errorToast) {
    errorMessage = '';
  }
</script>

<svelte:head>
  <MetaDescriptors description="Adding a new mod in the Satisfactory Mod Repository" title="New mod" />
</svelte:head>

<h1 class="text-4xl my-4 font-bold">New Mod</h1>

<Card>
  <Content>
    <ModForm {onSubmit} />
  </Content>
</Card>

<Toast bind:running={errorToast}>
  <span>{errorMessage}</span>
</Toast>
