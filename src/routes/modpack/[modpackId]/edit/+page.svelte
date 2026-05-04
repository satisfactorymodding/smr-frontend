<script lang="ts">
  import { getContextClient } from '@urql/svelte';
  import { EditModpackDocument } from '$lib/generated';
  import { goto } from '$app/navigation';
  import ModpackForm from '$lib/components/modpacks/ModpackForm.svelte';
  import type { ModpackData } from '$lib/models/modpacks';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import type { PageData } from './$types';
  import { getToastStore } from '@skeletonlabs/skeleton';

  export let data: PageData;

  const client = getContextClient();
  const toastStore = getToastStore();

  $: ({ modpackId, modpack } = data);

  const onSubmit = (modpackData: ModpackData) => {
    client
      .mutation(EditModpackDocument, {
        modpackId: $modpack.data?.getModpack?.id,
        modpack: modpackData
      })
      .toPromise()
      .then((value) => {
        if (value.error) {
          console.error(value.error.message);
          toastStore.trigger({
            message: 'Error editing modpack: ' + value.error.message,
            background: 'variant-filled-error',
            autohide: false
          });
        } else {
          toastStore.trigger({
            message: `Modpack updated`,
            background: 'variant-filled-success',
            timeout: 5000
          });
          goto(base + '/modpack/' + modpackId);
        }
      });
  };

  $: initialValues = $modpack.data
    ? {
        ...$modpack.data.getModpack,
        logo: undefined,
        hotness: 0,
        popularity: 0
      }
    : undefined;
</script>

<svelte:head>
  {#if !$modpack.fetching && !$modpack.error && $modpack.data.getModpack}
    <MetaDescriptors
      description="Editing modpack {$modpack.data.getModpack.name}"
      title="Edit modpack {$modpack.data.getModpack.name}"
      image={$modpack.data.getModpack.logo} />
  {/if}
</svelte:head>

<h1 class="my-4 text-4xl font-bold">Edit Modpack</h1>

<div class="card p-4">
  <section>
    {#if $modpack.fetching}
      <p>Loading...</p>
    {:else if $modpack.error}
      <p>Oh no... {$modpack.error.message}</p>
    {:else}
      <ModpackForm {onSubmit} {initialValues} editing={true} submitText="Save" />
    {/if}
  </section>
</div>
