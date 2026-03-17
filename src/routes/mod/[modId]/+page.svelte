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
  import CompatibilityGrid from '$lib/components/mods/compatibility/CompatibilityGrid.svelte';
  import { getContextClient } from '@urql/svelte';
  import type { PageData } from './$types';
  import { getModalStore, getToastStore, type ModalSettings } from '@skeletonlabs/skeleton';
  import EditCompatibilityModal from '$lib/modals/EditCompatibilityModal.svelte';
  import Page404 from '$lib/components/general/Page404.svelte';
  import { getTranslate } from '@tolgee/svelte';
  import ModNetworkDisclosure from '$lib/components/mods/disclosure/ModNetworkDisclosure.svelte';
  import AIDisclosure from '$lib/components/mods/disclosure/AIDisclosure.svelte';

  export let data: PageData;

  export const { t } = getTranslate();

  $: ({ modId, mod } = data);

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
            message: $t('mod.toast.mod-deleted'),
            background: 'variant-filled-success',
            timeout: 5000
          });
          goto(base + '/mods');
        }
      });
  };

  const openTab = (tabName) => {
    let i = 0;
    const tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
      (tabcontent[i] as HTMLElement).style.display = 'none';
    }

    const tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    document.getElementById(tabName).style.display = 'block';
    document.getElementById(tabName).className += ' active';
  };

  const deleteModal: ModalSettings = {
    type: 'confirm',
    title: $t('mod.modal.delete.title'),
    body: $t('mod.modal.delete.text'),
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
        mod: $mod.data?.mod
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
    <div class="flex h-auto flex-wrap items-center justify-between">
      <h1 class="text-4xl font-bold">{$mod.data.mod.name}</h1>
      <div>
        {#if canUserEdit}
          <button class="variant-ghost-primary btn" on:click={() => goto(base + '/mod/' + modId + '/edit')}>
            <span class="material-icons pr-2">edit</span>
            {$t('mod.edit')}</button>
          <button class="variant-ghost-primary btn" on:click={() => modalStore.trigger(deleteModal)}>
            <span class="material-icons pr-2">delete_forever</span>
            {$t('mod.delete')}</button>
          <button class="variant-ghost-primary btn" on:click={() => goto(base + '/mod/' + modId + '/new-version')}>
            <span class="material-icons pr-2">upload_file</span>
            {$t('mod.new-version')}</button>
        {/if}
        {#if canUserEditCompatibility}
          <button class="variant-ghost-primary btn" on:click={() => modalStore.trigger(editCompatibilityModal)}>
            <span class="material-icons">rocket_launch</span>
            <span class="material-icons">science</span>
            <span class="material-icons pr-3">videogame_asset</span>
            {$t('mod.edit-compatibility')}</button>
        {/if}
        <button class="variant-ghost-primary btn" on:click={() => (versionsTab = !versionsTab)}>
          {#if !versionsTab}
            <span class="material-icons pr-2" title="Browse all uploaded versions of this mod">view_list</span>
            {$t('mod.view-versions')}
          {:else}
            <span class="material-icons pr-2" title="View the description page for this mod">description</span>
            {$t('mod.view-description')}
          {/if}
        </button>
      </div>
    </div>
    <div class="grid-auto-max grid auto-cols-fr gap-4">
      {#if !versionsTab}
        <ModDescription mod={$mod.data.mod} />
      {:else}
        <ModVersions modId={$mod.data.mod.id} />
      {/if}
      <div class="grid auto-rows-min grid-cols-1 gap-8">
        <div class="m-auto">
          <ModLogo
            modLogo={$mod.data.mod.logo}
            modName={$mod.data.mod.name}
            compatibility={$mod.data.mod.compatibility} />
        </div>
        <div class="tab grid auto-rows-min grid-cols-4 gap-8">
          <button class="tablinks" on:click={() => openTab('Latest Versions')}>Latest Versions</button>
          <button class="tablinks" on:click={() => openTab('Compatibility Grid')}>Compatibility Grid</button>
          <button class="tablinks" on:click={() => openTab('Mod Info')}>Mod Info</button>
          <button class="tablinks" on:click={() => openTab('Mod Authors')}>Mod Authors</button>
          <button class="tablinks" on:click={() => openTab('Mod Network Disclosures')}>Mod Network Disclosures</button>
          <button class="tablinks" on:click={() => openTab('Mod AI Disclosures')}>Mod AI Disclosures</button>
        </div>

        <div id="Latest Versions" class="tabcontent">
          <ModLatestVersions
            modId={$mod.data.mod.id}
            modReference={$mod.data.mod.mod_reference}
            latestVersions={$mod.data.mod.latestVersions} />
        </div>
        <div id="Compatibility Grid" class="tabcontent" style="display:none">
          <CompatibilityGrid compatibility={$mod.data.mod.compatibility} />
        </div>
        <div id="Mod Info" class="tabcontent" style="display:none">
          <ModInfo mod={$mod.data.mod} />
        </div>
        <div id="Mod Authors" class="tabcontent" style="display:none">
          <ModAuthors authors={$mod.data.mod.authors} />
        </div>
        <div id="Mod Network Disclosures" class="tabcontent" style="display:none">
          <ModNetworkDisclosure mod={$mod.data.mod} />
        </div>
        <div id="Mod AI Disclosures" class="tabcontent" style="display:none">
          <AIDisclosure mod={$mod.data.mod} />
          <button class="variant-ghost-primary btn" on:click={() => goto(base + '/content-policy')}>
            <span class=" pr-2">AI Policy</span>
          </button>
        </div>
      </div>
    </div>
  </div>
{:else}
  <Page404 />
{/if}
