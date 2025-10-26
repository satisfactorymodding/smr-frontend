<script lang="ts">
  import { getContextClient } from '@urql/svelte';
  import { NewModDocument } from '$lib/generated';
  import { goto } from '$app/navigation';
  import ModForm from '$lib/components/mods/ModForm.svelte';
  import type { ModData } from '$lib/models/mods';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import { getTranslate } from '@tolgee/svelte';
  import { toaster } from '$lib/utils/toaster-svelte';

  const { t } = getTranslate();

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
          toaster.error({
            description: 'Error creating mod: ' + value.error.message
          });
        } else {
          toaster.success({
            description: $t('new-mod.toast.creation-success'),
            duration: 5000
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

<div class="card preset-filled-surface-100-900 p-4">
  <section>
    <ModForm {onSubmit} />
  </section>
</div>
