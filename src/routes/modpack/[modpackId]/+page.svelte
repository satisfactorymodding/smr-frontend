<script lang="ts">
  import ModpackInfo from '$lib/components/modpacks/ModpackInfo.svelte';
  // import ModLatestVersions from '$lib/components/mods/ModLatestVersions.svelte';
  // import ModAuthors from '$lib/components/mods/ModAuthors.svelte';
  import ModpackLogo from '$lib/components/modpacks/ModpackLogo.svelte';
  import ModpackDescription from '$lib/components/modpacks/ModpackDescription.svelte';
  // import ModVersions from '$lib/components/mods/ModVersions.svelte';
  // import { user } from '$lib/stores/user';
  // import { goto } from '$app/navigation';
  // import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import { modpackSchema, serializeSchema } from '$lib/utils/schema';
  // import CompatibilityGrid from '$lib/components/mods/compatibility/CompatibilityGrid.svelte';
  import { getContextClient } from '@urql/svelte';
  import type { PageData } from './$types';
  import { getModalStore, getToastStore, type ModalSettings } from '@skeletonlabs/skeleton';
  // import EditCompatibilityModal from '$lib/modals/EditCompatibilityModal.svelte';
  import Page404 from '$lib/components/general/Page404.svelte';
  import { getTranslate } from '@tolgee/svelte';

  export let data: PageData;

  export const { t } = getTranslate();

  $: ({ modpackId, modpack } = data);

  const client = getContextClient();

  const toastStore = getToastStore();

  const modalStore = getModalStore();
</script>

<svelte:head>
  {#if !$modpack.fetching && !$modpack.error && $modpack.data.getModpack}
    <MetaDescriptors
      description={$modpack.data.getModpack.short_description}
      title={$modpack.data.getModpack.name}
      image={$modpack.data.getModpack.logo} />

    eslint-disable
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
        <!-- {#if canUserEdit}
          <button class="variant-ghost-primary btn" on:click={() => goto(base + '/mod/' + modId + '/edit')}>
            <span class="material-icons pr-2">edit</span>
            {$t('mod.edit')}</button>
          <button class="variant-ghost-primary btn" on:click={() => modalStore.trigger(deleteModal)}>
            <span class="material-icons pr-2">delete_forever</span>
            {$t('mod.delete')}</button>
          <button class="variant-ghost-primary btn" on:click={() => goto(base + '/mod/' + modId + '/new-version')}>
            <span class="material-icons pr-2">upload_file</span>
            {$t('mod.new-version')}</button>
        {/if} -->
        <!-- {#if canUserEditCompatibility}
          <button class="variant-ghost-primary btn" on:click={() => modalStore.trigger(editCompatibilityModal)}>
            <span class="material-icons">rocket_launch</span>
            <span class="material-icons pr-2">science</span>
            {$t('mod.edit-compatibility')}</button>
        {/if} -->
        <!-- <button class="variant-ghost-primary btn" on:click={() => (versionsTab = !versionsTab)}>
          {#if !versionsTab}
            <span class="material-icons pr-2" title="Browse all uploaded versions of this mod">view_list</span>
            {$t('mod.view-versions')}
          {:else}
            <span class="material-icons pr-2" title="View the description page for this mod">description</span>
            {$t('mod.view-description')}
          {/if}
        </button> -->
      </div>
    </div>
    <div class="grid-auto-max grid auto-cols-fr gap-4">
      <!-- {#if !versionsTab} -->
        <ModpackDescription modpack={$modpack.data.getModpack} />
      <!-- {:else} -->
        <!-- <ModVersions modId={$mod.data.mod.id} /> -->
      <!-- {/if} -->
      <div class="grid auto-rows-min grid-cols-1 gap-8">
        <div class="m-auto">
          <ModpackLogo
            modpackLogo={$modpack.data.getModpack.logo}
            modpackName={$modpack.data.getModpack.name} />
        </div>
        <ModpackInfo modpack={$modpack.data.getModpack} />
        <!-- <ModAuthors authors={$mod.data.mod.authors} /> -->
      </div>
    </div>
  </div>
{:else}
  <Page404 />
{/if}
