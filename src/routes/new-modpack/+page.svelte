<script lang="ts">
  import { getContextClient, queryStore } from '@urql/svelte';
  import { GetModpackDocument, NewModpackDocument } from '$lib/generated';
  import { goto } from '$app/navigation';
  import ModpackForm from '$lib/components/modpacks/ModpackForm.svelte';
  import type { ModpackData } from '$lib/models/modpacks';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import { getToastStore } from '@skeletonlabs/skeleton';
  import { getTranslate } from '@tolgee/svelte';
  import { page } from '$app/stores';
  import ModpackCard from '$lib/components/modpacks/ModpackCard.svelte';

  export const { t } = getTranslate();

  const toastStore = getToastStore();

  const client = getContextClient();

  const remixId = $page.url.searchParams.get('remixId');

  const onSubmit = (data: ModpackData) => {
    client
      .mutation(NewModpackDocument, {
        modpack: data
      })
      .toPromise()
      .then((value) => {
        if (value.error) {
          console.error(value.error.message);
          toastStore.trigger({
            message: 'Error creating modpack: ' + value.error.message,
            background: 'variant-filled-error',
            autohide: false
          });
        } else {
          toastStore.trigger({
            message: $t('new-modpack.toast.creation-success'),
            background: 'variant-filled-success',
            timeout: 5000
          });
          goto(base + '/modpack/' + value.data.createModpack.id);
        }
      });
  };

  $: parent = queryStore({
    query: GetModpackDocument,
    client,
    pause: !remixId,
    variables: remixId ? { modpackID: remixId } : undefined,
    requestPolicy: 'network-only'
  });

  $: modpack = $parent.data?.getModpack;
</script>

<svelte:head>
  <MetaDescriptors description="Adding a new mod in the Satisfactory Mod Repository" title="New modpack" />
</svelte:head>

<h1 class="my-4 text-4xl font-bold">{$t('new-modpack.title')}</h1>

{#if remixId != null}
  <div class="grid grid-flow-row gap-2">
    {$t('modpacks.remix.remixing')}:
    {#if !$parent.fetching}
      <ModpackCard {modpack} downloadable={false} />
    {/if}
  </div>
{/if}

<div class="card p-4">
  <section>
    {#if remixId == null}
      <ModpackForm {onSubmit} />
    {:else if !$parent.fetching}
      <ModpackForm {onSubmit} {remixId} remixMods={modpack.mods} />
    {/if}
  </section>
</div>
