<script lang="ts">
  import { getContextClient, queryStore } from '@urql/svelte';
  import { goto } from '$app/navigation';
  import { CreateModpackReleaseDocument, GetModpackDocument } from '$lib/generated';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import type { PageData } from './$types';
  import { getModalStore, getToastStore, type ModalSettings } from '@skeletonlabs/skeleton';
  import EditCompatibilityForm from '$lib/components/modpacks/compatibility/EditCompatibilityForm.svelte';
  import { getTranslate } from '@tolgee/svelte';
  import ReleaseForm from '$lib/components/releases/ReleaseForm.svelte';
  import type { ReleaseData } from '$lib/models/releases';

  export const { t } = getTranslate();

  export let data: PageData;

  const { modpackId } = data;

  const client = getContextClient();

  const toastStore = getToastStore();

  const modpack = queryStore({
    query: GetModpackDocument,
    client,
    variables: { modpackID: modpackId },
    requestPolicy: 'cache-and-network'
  });

  const onSubmit = async (releaseData: ReleaseData) =>
    client
      .mutation(CreateModpackReleaseDocument, {
        modpackID: $modpack.data?.getModpack?.id,
        release: {
          version: releaseData.version,
          changelog: releaseData.changelog
        }
      })
      .toPromise()
      .then((value) => {
        if (value.error) {
          console.error(value.error.message);
          toastStore.trigger({
            message: 'Error creating release: ' + value.error.message,
            background: 'variant-filled-error',
            autohide: false
          });
        } else {
          toastStore.trigger({
            message: `Release created`,
            background: 'variant-filled-success',
            timeout: 5000
          });
          goto(base + '/modpack/' + modpackId + '/release/' + value.data.createModpackRelease.id);
        }
      });

  const goBackFn = () => {
    goto(base + '/modpack/' + modpackId);
  };

  const backModal: ModalSettings = {
    type: 'confirm',
    title: 'Go Back?',
    buttonTextCancel: 'Keep Editing',
    buttonTextConfirm: 'Go Back',
    body: 'Going back will discard any unsaved changes. Are you sure you wish to continue?',
    response: (r: boolean) => {
      if (r) {
        goBackFn();
      }
    }
  };

  const modalStore = getModalStore();
</script>

<svelte:head>
  {#if !$modpack.fetching && !$modpack.error && $modpack.data.getModpack}
    <MetaDescriptors
      description="Creating a new version of modpack {$modpack.data.getModpack.name}"
      title="New version of modpack {$modpack.data.getModpack.name}" />
  {/if}
</svelte:head>

<div class="flex h-auto flex-wrap items-center justify-between">
  <h1 class="my-4 text-4xl font-bold">
    New Release for
    {#if $modpack.fetching}
      ...
    {:else if !$modpack.error}
      {$modpack.data.getModpack.name}
    {/if}
  </h1>
  <div>
    <button
      class="variant-ghost-primary btn p-4"
      on:click={() => goto(base + '/modpack/' + $modpack.data.getModpack.id + '/edit')}>
      <span class="material-icons pr-2">edit</span>
      {$t('release.modpackedit')}</button>
    <button
      class="variant-ghost-primary btn p-4"
      title="View the description page for this modpack"
      on:click={() => modalStore.trigger(backModal)}>
      <span class="material-icons pr-2">arrow_back</span>
      {$t('release.back')}
    </button>
  </div>
</div>

<div class="card p-4">
  <section>
    {#if $modpack.fetching}
      <p>Loading...</p>
    {:else if $modpack.error}
      <p>Oh no... {$modpack.error.message}</p>
    {:else}
      <ReleaseForm {onSubmit} modpackReference={$modpack.data.getModpack.id} submitIcon="add_circle" />

      <div class="p-4">
        <span>Edit Compatibility Info</span>
      </div>
      <div class="p-4">
        <span>{$t('release.compatibility-note')}</span>
      </div>
      <div class="card p-4">
        <EditCompatibilityForm
          modpack={$modpack.data.getModpack}
          modpackId={$modpack.data.getModpack.id}
          on:fail={() => {
            alert('Failed to update compatibility information, check browser console for more info.');
          }}
          on:submit={() => {
            alert('Modpack compatibility data updated.');
          }} />
      </div>
      <div class="p-4"></div>
    {/if}
  </section>
</div>
