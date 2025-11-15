<script lang="ts">
  import { getContextClient } from '@urql/svelte';
  import { EditModDocument } from '$lib/generated';
  import { goto } from '$app/navigation';
  import ModForm from '$lib/components/mods/ModForm.svelte';
  import type { ModData } from '$lib/models/mods';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import type { PageData } from './$types';
  import { get } from 'svelte/store';
  import { toaster } from '$lib/utils/toaster-svelte';
  import QueryStateHandler from '$lib/components/general/QueryStateHandler.svelte';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

  const client = getContextClient();

  let { modId, mod } = $derived(data);

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
          toaster.error({
            description: 'Error editing mod: ' + value.error.message
          });
        } else {
          toaster.success({
            description: `Mod updated`,
            duration: 5000
          });
          goto(base + '/mod/' + modId);
        }
      });
  };

  let initialValues = $derived(
    $mod.data
      ? {
          ...$mod.data.mod,
          logo: undefined
        }
      : undefined
  );
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

<div class="card preset-filled-surface-100-900 p-4">
  <section>
    <QueryStateHandler query={mod}>
      <ModForm {onSubmit} {initialValues} editing={true} submitText="Save" />
    </QueryStateHandler>
  </section>
</div>
