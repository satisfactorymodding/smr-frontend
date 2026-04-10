<script lang="ts">
  import { DeleteModpackDocument, GetModpackDocument } from '$lib/generated';
  import ModpackInfo from '$lib/components/modpacks/ModpackInfo.svelte';
  import ModpackLogo from '$lib/components/modpacks/ModpackLogo.svelte';
  import ModpackDescription from '$lib/components/modpacks/ModpackDescription.svelte';
  import ModpackInstall from '$lib/components/modpacks/ModpackInstall.svelte';
  import ModpackCreators from '$lib/components/modpacks/ModpackCreators.svelte';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import { modpackSchema, serializeSchema } from '$lib/utils/schema';
  import type { PageData } from './$types';
  import { user } from '$lib/stores/user';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import Page404 from '$lib/components/general/Page404.svelte';
  import { getTranslate } from '@tolgee/svelte';
  import { getContextClient, queryStore } from '@urql/svelte';
  import { getModalStore, getToastStore, type ModalSettings } from '@skeletonlabs/skeleton';
  import EditCompatibilityModal from '$lib/modals/EditCompatibilityModal.svelte';

  export let data: PageData;

  const client = getContextClient();

  export const { t } = getTranslate();

  const modalStore = getModalStore();

  const toastStore = getToastStore();

  $: ({ modpack } = data);

  $: modpackValue = $modpack.data?.getModpack;

  $: parentId = modpackValue?.parent_id ?? null;

  $: modIds = (modpackValue?.mods).map((m) => String(m.mod_id));

  $: parent = queryStore({
    query: GetModpackDocument,
    client,
    pause: !parentId,
    variables: parentId ? { modpackID: parentId } : undefined,
    requestPolicy: 'network-only'
  });

  const deleteModFn = () => {
    client
      .mutation(DeleteModpackDocument, { ModpackID: $modpack.data.getModpack.id })
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

  let versionsTab = false;

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
        modpack: $modpack.data?.getModpack
      }
    }
  } satisfies ModalSettings;

  $: canUserEdit = $user?.roles?.deleteContent || modpackValue?.creator_id == $user?.id;
  $: canUserEditCompatibility = $user?.roles?.editAnyModCompatibility || canUserEdit;
</script>

<svelte:head>
  {#if !$modpack.fetching && !$modpack.error && $modpack.data.getModpack}
    <MetaDescriptors
      description={$modpack.data.getModpack.short_description}
      title={$modpack.data.getModpack.name}
      image={$modpack.data.getModpack.logo} />

    {@html serializeSchema(modpackSchema($modpack.data.getModpack))}
  {/if}
</svelte:head>

{#if $modpack.fetching}
  <p>Loading...</p>
{:else if $modpack.error}
  <p>Oh no... {$modpack.error.message}</p>
{:else if $modpack.data.getModpack}
  <div class="grid gap-6 xlx:grid-flow-row">
    <div class="flex h-auto flex-wrap items-center justify-between">
      <h1 class="text-4xl font-bold">{$modpack.data.getModpack.name}</h1>
      <div>
        {#if canUserEdit}
          <button
            class="variant-ghost-primary btn"
            on:click={() => goto(base + '/modpack/' + $modpack.data.getModpack.id + '/edit')}>
            <span class="material-icons pr-2">edit</span>
            {$t('modpack.edit')}</button>
          <button class="variant-ghost-primary btn" on:click={() => modalStore.trigger(deleteModal)}>
            <span class="material-icons pr-2">delete_forever</span>
            {$t('modpack.delete')}</button>
          <button
            class="variant-ghost-primary btn"
            on:click={() => goto(base + '/modpack/' + $modpack.data.getModpack.id + '/new-release')}>
            <span class="material-icons pr-2">upload_file</span>
            {$t('modpack.new-release')}</button>
        {/if}
        {#if canUserEditCompatibility}
          <button class="variant-ghost-primary btn" on:click={() => modalStore.trigger(editCompatibilityModal)}>
            <span class="material-icons">rocket_launch</span>
            <span class="material-icons pr-2">science</span>
            {$t('modpack.edit-compatibility')}</button>
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
        <button class="variant-ghost-primary btn">
          <span class="material-icons">replay</span>
          {$t('modpacks.remix')}</button>
      </div>
    </div>
    <div class="grid-auto-max grid auto-cols-fr gap-4">
      <ModpackDescription modpack={$modpack.data.getModpack} modReferences={modIds} />
      <div class="grid auto-rows-min grid-cols-1 gap-8">
        <div class="m-auto">
          <ModpackLogo modpackLogo={$modpack.data.getModpack.logo} modpackName={$modpack.data.getModpack.name} />
        </div>
        <ModpackInstall modpack={$modpack.data.getModpack} />
        <ModpackInfo modpack={$modpack.data.getModpack} />
        <ModpackCreators
          creator={$modpack.data.getModpack.creator_id}
          remix={parentId && !$parent.fetching && !$parent.error ? $parent.data?.getModpack?.creator_id : undefined}
          modReferences={modIds} />
      </div>
    </div>
  </div>
{:else}
  <Page404 />
{/if}
