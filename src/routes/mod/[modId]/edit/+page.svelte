<script lang="ts">
  import { getContextClient } from '@urql/svelte';
  import { EditModDocument } from '$lib/generated';
  import { goto } from '$app/navigation';
  import ModForm from '$lib/components/mods/ModForm.svelte';
  import type { ModData } from '$lib/models/mods';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import type { PageData } from './$types';
  import { getToastStore } from '@skeletonlabs/skeleton';
  import { get } from 'svelte/store';

  export let data: PageData;

  const client = getContextClient();
  const toastStore = getToastStore();

  $: ({ modId, mod } = data);

  const onSubmit = (modData: ModData) => {
    client
      .mutation(EditModDocument, {
        modId: get(mod).data.mod.id,
        mod: modData
      })
      .toPromise()
      .then((value) => {
        if (value.error) {
          console.error(value.error.message);
          toastStore.trigger({
            message: 'Error editing mod: ' + value.error.message,
            background: 'variant-filled-error',
            autohide: false
          });
        } else {
          toastStore.trigger({
            message: `Mod updated`,
            background: 'variant-filled-success',
            timeout: 5000
          });
          goto(base + '/mod/' + modId);
        }
      });
  };

  $: initialValues = $mod.data
    ? {
        ...$mod.data.mod,
        logo: undefined
      }
    : undefined;
</script>

<svelte:head>
  {#if !$mod.fetching && !$mod.error && $mod.data.mod}
    <MetaDescriptors
      description="Editing mod {$mod.data.mod.name}"
      title="Edit mod {$mod.data.mod.name}"
      image={$mod.data.mod.logo} />
  {/if}
</svelte:head>

<h1 class="my-4 text-4xl font-bold">Edit Mod</h1>

<div class="card p-4">
  <section>
    {#if $mod.fetching}
      <p>Loading...</p>
    {:else if $mod.error}
      <p>Oh no... {$mod.error.message}</p>
    {:else}
      <ModForm {onSubmit} {initialValues} editing={true} submitText="Save" />
    {/if}
  </section>
</div>
