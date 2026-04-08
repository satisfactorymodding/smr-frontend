<script lang="ts">
  import { getContextClient } from '@urql/svelte';
  import { NewModpackDocument } from '$lib/generated';
  import { goto } from '$app/navigation';
  import ModpackForm from '$lib/components/modpacks/ModpackForm.svelte';
  import type { ModpackData } from '$lib/models/modpacks';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import { getToastStore } from '@skeletonlabs/skeleton';
  import { getTranslate } from '@tolgee/svelte';

  export const { t } = getTranslate();

  const toastStore = getToastStore();

  const client = getContextClient();

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
</script>

<svelte:head>
  <MetaDescriptors description="Adding a new mod in the Satisfactory Mod Repository" title="New modpack" />
</svelte:head>

<h1 class="my-4 text-4xl font-bold">{$t('new-modpack.title')}</h1>

<div class="card p-4">
  <section>
    <ModpackForm {onSubmit} />
  </section>
</div>
