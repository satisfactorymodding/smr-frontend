<svelte:head>
  <title>Admin: New SML Version - SMR</title>
</svelte:head>

<script lang="ts">
  import {mutation} from '@urql/svelte';
  import {NewSmlVersionDocument} from "$lib/generated";
  import Toast from "$lib/components/general/Toast.svelte";
  import {goto} from '$app/navigation';
  import type {SMLVersionData} from "$lib/models/sml-versions";
  import SMLVersionForm from "$lib/components/sml-versions/SMLVersionForm.svelte";
  import {base} from "$app/paths";

  let errorMessage = '';
  let errorToast = false;

  const newVersion = mutation({
    query: NewSmlVersionDocument
  });

  const onSubmit = (data: SMLVersionData) => {
    newVersion({
      smlVersion: data
    }).then(value => {
      if (value.error) {
        console.error(value.error.message);
        errorMessage = 'Error creating mod: ' + value.error.message;
        errorToast = true;
      } else {
        // TODO Toast or something
        goto(base + '/admin/sml-versions');
      }
    });
  }

  $: if (!errorToast) errorMessage = '';
</script>

<h1 class="text-4xl my-4 font-bold">New SML Version</h1>

<SMLVersionForm onSubmit={onSubmit}/>

<Toast bind:running={errorToast}>
  <span>{errorMessage}</span>
</Toast>
