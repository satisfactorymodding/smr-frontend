<script lang="ts">
  import ModpackInfo from '$lib/components/modpacks/ModpackInfo.svelte';
  import ModpackLogo from '$lib/components/modpacks/ModpackLogo.svelte';
  import ModpackDescription from '$lib/components/modpacks/ModpackDescription.svelte';
  import ModpackInstall from '$lib/components/modpacks/ModpackInstall.svelte';
  import ModpackCreators from '$lib/components/modpacks/ModpackCreators.svelte';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import { modpackSchema, serializeSchema } from '$lib/utils/schema';
  import type { PageData } from './$types';
  import Page404 from '$lib/components/general/Page404.svelte';
  import { getTranslate } from '@tolgee/svelte';
  import { queryStore, getContextClient } from '@urql/svelte';
  import { GetModpackDocument } from '$lib/generated';

  export let data: PageData;

  const client = getContextClient();

  export const { t } = getTranslate();

  $: ({ modpack } = data);

  $: parentId = $modpack.data?.getModpack?.parent_id ?? null;

  $: parent = queryStore({
    query: GetModpackDocument,
    client,
    pause: !parentId,
    variables: parentId ? { modpackID: parentId } : undefined,
    requestPolicy: 'network-only'
  });

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
    </div>
    <div class="grid-auto-max grid auto-cols-fr gap-4">
        <ModpackDescription modpack={$modpack.data.getModpack} />
      <div class="grid auto-rows-min grid-cols-1 gap-8">
        <div class="m-auto">
          <ModpackLogo
            modpackLogo={$modpack.data.getModpack.logo}
            modpackName={$modpack.data.getModpack.name} />
        </div>
        <ModpackInstall modpack={$modpack.data.getModpack} />  
        <ModpackInfo modpack={$modpack.data.getModpack} />
        <ModpackCreators creator={$modpack.data.getModpack.creator_id} remix={parentId && !$parent.fetching && !$parent.error ? $parent.data?.getModpack?.creator_id : undefined} />
      </div>
    </div>
  </div>
{:else}
  <Page404 />
{/if}
