<script lang="ts">
  import { getContextClient } from '@urql/svelte';
  import { NewModDocument } from '$lib/generated';
  import { goto } from '$app/navigation';
  import ModForm from '$lib/components/mods/ModForm.svelte';
  import type { ModData } from '$lib/models/mods';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import { getToastStore } from '@skeletonlabs/skeleton';
  import { getTranslate } from '@tolgee/svelte';

  export const { t } = getTranslate();

  const toastStore = getToastStore();

  const client = getContextClient();

  const onSubmit = (data: ModData) => {
    client
      .mutation(NewModDocument, {
        mod: data
      })
      .toPromise()
      .then((value) => {
        if (value.error) {
          console.error(value.error.message);
          toastStore.trigger({
            message: 'Error creating mod: ' + value.error.message,
            background: 'variant-filled-error',
            autohide: false
          });
        } else {
          toastStore.trigger({
            message: $t('new-mod.toast.creation-success'),
            background: 'variant-filled-success',
            timeout: 5000
          });
          goto(base + '/mod/' + value.data.createMod.id);
        }
      });
  };
</script>

<svelte:head>
  <MetaDescriptors description="Adding a new mod in the Satisfactory Mod Repository" title="New mod" />
</svelte:head>

<h1 class="my-4 text-4xl font-bold">{$t('new-mod.title')}</h1>

<div class="card p-4">
  <section>
    <ModForm {onSubmit} />
  </section>
</div>
