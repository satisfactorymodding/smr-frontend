<script lang="ts" context="module">
  import { paramsToProps } from '$lib/utils/routing';

  export const load = paramsToProps();
</script>

<script lang="ts">
  import { getContextClient, queryStore } from '@urql/svelte';
  import { EditModDocument, GetModDocument } from '$lib/generated';
  import Toast from '$lib/components/general/Toast.svelte';
  import { goto } from '$app/navigation';
  import ModForm from '$lib/components/mods/ModForm.svelte';
  import type { ModData } from '$lib/models/mods';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import Card, { Content } from '@smui/card';
  import { get } from 'svelte/store';

  const client = getContextClient();

  export let modId!: string;

  let errorMessage = '';
  let errorToast = false;

  const mod = queryStore({
    query: GetModDocument,
    client,
    variables: { mod: modId }
  });

  const onSubmit = (data: ModData) => {
    client
      .mutation(EditModDocument, {
        modId: get(mod).data.mod.id,
        mod: data
      })
      .toPromise()
      .then((value) => {
        if (value.error) {
          console.error(value.error.message);
          errorMessage = 'Error editing mod: ' + value.error.message;
          errorToast = true;
        } else {
          // TODO Toast or something
          goto(base + '/mod/' + value.data.updateMod.id);
        }
      });
  };

  $: if (!errorToast) {
    errorMessage = '';
  }

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

<h1 class="text-4xl my-4 font-bold">Edit Mod</h1>

<Card>
  <Content>
    {#if $mod.fetching}
      <p>Loading...</p>
    {:else if $mod.error}
      <p>Oh no... {$mod.error.message}</p>
    {:else}
      <ModForm {onSubmit} {initialValues} editing={true} submitText="Save" />
    {/if}
  </Content>
</Card>

<Toast bind:running={errorToast}>
  <span>{errorMessage}</span>
</Toast>
