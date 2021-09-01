<svelte:head>
  {#if !$mod.fetching && !$mod.error && $mod.data.getMod}
    <MetaDescriptors 
      description="Editing mod {$mod.data.getMod.name}"
      title="Edit mod {$mod.data.getMod.name}" 
      image={$mod.data.getMod.logo}
    />
  {/if}
</svelte:head>

<script lang="ts" context="module">
  import {paramsToProps} from "$lib/utils/routing";

  export const load = paramsToProps();
</script>

<script lang="ts">
  import {mutation, operationStore, query} from '@urql/svelte';
  import {EditModDocument, GetModDocument} from "$lib/generated";
  import Toast from "$lib/components/general/Toast.svelte";
  import {goto} from '$app/navigation';
  import ModForm from "$lib/components/mods/ModForm.svelte";
  import type {ModData} from "$lib/models/mods";
  import {base} from "$app/paths";
  import MetaDescriptors from "$lib/components/utils/MetaDescriptors.svelte";

  export let modId!: string;

  let errorMessage = '';
  let errorToast = false;

  const mod = operationStore(
    GetModDocument,
    {mod: modId}
  );

  const editMod = mutation({
    query: EditModDocument
  });

  const onSubmit = (data: ModData) => {
    editMod({
      modId: modId,
      mod: data
    }).then(value => {
      if (value.error) {
        console.error(value.error.message);
        errorMessage = 'Error editing mod: ' + value.error.message;
        errorToast = true;
      } else {
        // TODO Toast or something
        goto(base + '/mod/' + value.data.updateMod.id);
      }
    });
  }

  $: if (!errorToast) errorMessage = '';

  $: initialValues = $mod.data ? {
    ...$mod.data.getMod,
    logo: undefined
  } : undefined;

  query(mod);
</script>

<h1 class="text-4xl my-4 font-bold">Edit Mod</h1>

{#if $mod.fetching}
  <p>Loading...</p>
{:else if $mod.error}
  <p>Oh no... {$mod.error.message}</p>
{:else}
  <ModForm onSubmit={onSubmit} initialValues={initialValues} editing={true} submitText="Save"/>
{/if}

<Toast bind:running={errorToast}>
  <span>{errorMessage}</span>
</Toast>
