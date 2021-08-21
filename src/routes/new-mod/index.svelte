<svelte:head>
  <title>New Mod - SMR</title>
</svelte:head>

<script lang="ts">
  import {mutation} from '@urql/svelte';
  import {NewModDocument} from "$lib/generated";
  import Toast from "$lib/components/general/Toast.svelte";
  import {goto} from '$app/navigation';
  import ModForm from "$lib/components/mods/ModForm.svelte";
  import type {ModData} from "$lib/models/mods";
  import {base} from "$app/paths";

  let errorMessage = '';
  let errorToast = false;

  const newMod = mutation({
    query: NewModDocument
  });

  const onSubmit = (data: ModData) => {
    newMod({
      mod: data
    }).then(value => {
      if (value.error) {
        console.error(value.error.message);
        errorMessage = 'Error creating mod: ' + value.error.message;
        errorToast = true;
      } else {
        // TODO Toast or something
        goto(base + '/mod/' + value.data.createMod.id);
      }
    });
  }

  $: if (!errorToast) errorMessage = '';
</script>

<h1 class="text-4xl my-4 font-bold">New Mod</h1>

<ModForm onSubmit={onSubmit}/>

<Toast bind:running={errorToast}>
  <span>{errorMessage}</span>
</Toast>
