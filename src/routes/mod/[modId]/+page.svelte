<script lang="ts">
  import { DeleteModDocument } from '$lib/generated';
  import ModInfo from '$lib/components/mods/ModInfo.svelte';
  import ModLatestVersions from '$lib/components/mods/ModLatestVersions.svelte';
  import ModAuthors from '$lib/components/mods/ModAuthors.svelte';
  import ModLogo from '$lib/components/mods/ModLogo.svelte';
  import ModDescription from '$lib/components/mods/ModDescription.svelte';
  import ModVersions from '$lib/components/mods/ModVersions.svelte';
  import { user } from '$lib/stores/user';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import { modSchema, serializeSchema } from '$lib/utils/schema';
  import { getContextClient } from '@urql/svelte';
  import type { PageData } from './$types';
  import { getModalStore, getToastStore, type ModalSettings } from "@skeletonlabs/skeleton";
  import EditCompatibilityModal from '$lib/modals/EditCompatibilityModal.svelte';
  import Page404 from "$lib/components/general/Page404.svelte";

  export let data: PageData;

  const { modId, mod } = data;

  const client = getContextClient();

  let versionsTab = false;

  const toastStore = getToastStore();

  $: canUserEdit =
    $user?.roles?.deleteContent || $mod?.data?.mod?.authors?.findIndex((author) => author.user_id == $user?.id) >= 0;
  $: canUserEditCompatibility = $user?.roles?.editAnyModCompatibility || canUserEdit;

  const deleteModFn = () => {
    client
      .mutation(DeleteModDocument, { modId: $mod.data.mod.id })
      .toPromise()
      .then((value) => {
        if (value.error) {
          console.error(value.error.message);
          toastStore.trigger({
            message: 'Error deleting mod: ' + value.error.message,
            background: 'variant-filled-error',
            autohide: false
          });
        } else {
          toastStore.trigger({
            message: `Mod deleted`,
            background: 'variant-filled-success',
            timeout: 5000
          });
          goto(base + '/mods');
        }
      });
  };

  const deleteModal: ModalSettings = {
    type: 'confirm',
    title: 'Delete Mod?',
    body: 'Are you sure you wish to delete this mod?',
    response: (r: boolean) => {
      if (r) {
        deleteModFn();
      }
    }
  };

  $: editCompatibilityModal = {
    type: 'component',
    component: {
      ref: EditCompatibilityModal,
      props: {
        mod: $mod.data
      }
    }
  } satisfies ModalSettings;

  const modalStore = getModalStore();
</script>

<svelte:head>
  {#if !$mod.fetching && !$mod.error && $mod.data.mod}
    <MetaDescriptors
      description={$mod.data.mod.short_description}
      title={$mod.data.mod.name}
      image={$mod.data.mod.logo} />

    <!-- eslint-disable -->
    {@html serializeSchema(modSchema($mod.data.mod))}
  {/if}
</svelte:head>

{#if $mod.fetching}
  <p>Loading...</p>
{:else if $mod.error}
  <p>Oh no... {$mod.error.message}</p>
{:else if $mod.data.mod}
  <div class="grid gap-6 xlx:grid-flow-row">
    <div class="flex flex-wrap h-auto justify-between items-center">
      <h1 class="text-4xl font-bold">{$mod.data.mod.name}</h1>
      <div>
        {#if canUserEdit}
          <button class="btn variant-ghost-primary" on:click={() => goto(base + '/mod/' + modId + '/edit')}
            >Edit</button>
          <button class="btn variant-ghost-primary" on:click={() => modalStore.trigger(deleteModal)}>Delete</button>
          <button class="btn variant-ghost-primary" on:click={() => goto(base + '/mod/' + modId + '/new-version')}
            >New Version</button>
        {/if}
        {#if canUserEditCompatibility}
          <button class="btn variant-ghost-primary" on:click={() => modalStore.trigger(editCompatibilityModal)}
            >Compatibility</button>
        {/if}

        <button class="btn variant-ghost-primary" on:click={() => (versionsTab = !versionsTab)}>
          {#if !versionsTab}
            Versions
          {:else}
            Description
          {/if}
        </button>
      </div>
    </div>
    <div class="grid grid-auto-max auto-cols-fr gap-4">
      {#if !versionsTab}
        <ModDescription mod={$mod.data.mod} />
      {:else}
        <ModVersions modId={$mod.data.mod.id} />
      {/if}
      <div class="grid grid-cols-1 auto-rows-min gap-8">
        <ModLogo
          modLogo={$mod.data.mod.logo}
          modName={$mod.data.mod.name}
          compatibility={$mod.data.mod.compatibility} />
        <ModInfo mod={$mod.data.mod} />
        <ModLatestVersions modId={$mod.data.mod.id} latestVersions={$mod.data.mod.latestVersions} />
        <ModAuthors authors={$mod.data.mod.authors} />
      </div>
    </div>
  </div>
{:else}
  <Page404/>
{/if}
