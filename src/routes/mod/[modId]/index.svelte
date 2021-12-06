<script lang="ts" context="module">
  import { paramsToProps } from '$lib/utils/routing';
  import { operationStore } from '@urql/svelte';
  import { GetModDocument } from '$lib/generated';
  import { loadWaitForNoFetch } from '$lib/utils/gql';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import Button from '@smui/button';

  const modQ = operationStore(GetModDocument, { mod: undefined });

  export const load = paramsToProps(async (input) => {
    modQ.variables.mod = input.page.params.modId;
    return loadWaitForNoFetch({
      mod: modQ
    })(input);
  });
</script>

<script lang="ts">
  import { DeleteModDocument } from '$lib/generated';
  import { mutation, query } from '@urql/svelte';
  import ModInfo from '$lib/components/mods/ModInfo.svelte';
  import ModLatestVersions from '$lib/components/mods/ModLatestVersions.svelte';
  import ModAuthors from '$lib/components/mods/ModAuthors.svelte';
  import ModLogo from '$lib/components/mods/ModLogo.svelte';
  import ModDescription from '$lib/components/mods/ModDescription.svelte';
  import ModVersions from '$lib/components/mods/ModVersions.svelte';
  import { user } from '$lib/stores/user';
  import { goto } from '$app/navigation';
  import { writable } from 'svelte/store';
  import Dialog from '$lib/components/general/Dialog.svelte';
  import Toast from '$lib/components/general/Toast.svelte';
  import { base } from '$app/paths';
  import { browser } from '$app/env';

  export let modId!: string;
  export let mod: typeof modQ;

  let versionsTab = false;

  let errorMessage = '';
  let errorToast = false;

  const deleteMod = mutation({
    query: DeleteModDocument
  });

  $: canUserEdit =
    $user?.roles?.deleteContent || $mod?.data?.getMod?.authors?.findIndex((author) => author.user_id == $user?.id) >= 0;

  const deleteDialogOpen = writable<boolean>(false);

  const deleteModFn = () => {
    deleteMod({ modId }).then((value) => {
      if (value.error) {
        console.error(value.error.message);
        errorMessage = 'Error deleting mod: ' + value.error.message;
        errorToast = true;
      } else {
        // TODO Toast or something
        goto(base + '/mods');
      }
    });
  };

  if (browser) {
    query(mod);
  }
</script>

<svelte:head>
  {#if !$mod.fetching && !$mod.error && $mod.data.getMod}
    <MetaDescriptors
      description={$mod.data.getMod.short_description}
      title={$mod.data.getMod.name}
      image={$mod.data.getMod.logo}
    />
  {/if}
</svelte:head>

{#if $mod.fetching}
  <p>Loading...</p>
{:else if $mod.error}
  <p>Oh no... {$mod.error.message}</p>
{:else if $mod.data.getMod}
  <div class="grid gap-8 grid-auto-max">
    <div class="grid grid-cols-1 auto-rows-min gap-4">
      <div class="grid grid-flow-col grid-auto-max h-auto gap-4 items-center">
        <h1 class="text-4xl my-4 font-bold">{$mod.data.getMod.name}</h1>

        {#if canUserEdit}
          <Button variant="outlined" on:click={() => goto(base + '/mod/' + modId + '/edit')}>Edit</Button>
          <Button variant="outlined" on:click={() => deleteDialogOpen.set(true)}>Delete</Button>
          <Button variant="outlined" on:click={() => goto(base + '/mod/' + modId + '/new-version')}>New Version</Button>
        {/if}

        <Button variant="outlined" on:click={() => (versionsTab = !versionsTab)}>
          {#if !versionsTab}
            Versions
          {:else}
            Description
          {/if}
        </Button>
      </div>
      {#if !versionsTab}
        <ModDescription mod={$mod.data.getMod} />
      {:else}
        <ModVersions modId={$mod.data.getMod.id} />
      {/if}
    </div>
    <div class="grid grid-cols-1 auto-rows-min gap-8">
      <ModLogo modLogo={$mod.data.getMod.logo} modName={$mod.data.getMod.name} />
      <ModInfo mod={$mod.data.getMod} />
      <ModLatestVersions modId={$mod.data.getMod.id} latestVersions={$mod.data.getMod.latestVersions} />
      <ModAuthors authors={$mod.data.getMod.authors} />
    </div>
  </div>

  <Dialog bind:open={$deleteDialogOpen}>
    <div class="grid grid-flow-row gap-4">
      <h3 class="text-2xl font-bold">Delete Mod?</h3>

      <span>Are you sure you wish to delete this mod</span>

      <button class="py-1 px-4 rounded text-base bg-yellow-600" on:click={() => deleteDialogOpen.set(false)}>
        Cancel
      </button>
      <button class="py-1 px-4 rounded text-base bg-red-500" on:click={() => deleteModFn()}> Delete </button>
    </div>
  </Dialog>

  <Toast bind:running={errorToast}>
    <span>{errorMessage}</span>
  </Toast>
{:else}
  <!-- TODO Better 404 -->
  404
{/if}

<style lang="postcss">
  .grid-auto-max {
    grid-template-columns: auto max-content max-content max-content max-content;
  }
</style>
