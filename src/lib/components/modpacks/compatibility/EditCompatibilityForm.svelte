<script lang="ts">
  import ModpackCompatibilityEdit from './ModpackCompatibilityEdit.svelte';
  import type { ModpackData } from '$lib/models/modpacks';
  import { EditModpackCompatibilityDocument } from '$lib/generated';
  import { getContextClient } from '@urql/svelte';
  import { createEventDispatcher } from 'svelte';
  import { getTranslate } from '@tolgee/svelte';

  export let modpackId: string;
  export let modpack: ModpackData;
  export const { t } = getTranslate();

  const client = getContextClient();

  const dispatch = createEventDispatcher();

  async function onSubmit(e: Event) {
    e.preventDefault();
    const success = (
      await client
        .mutation(EditModpackCompatibilityDocument, {
          modpackId,
          compatibility: modpack.compatibility
        })
        .toPromise()
    ).data.updateModpackCompatibility;

    if (success) {
      dispatch('submit');
    } else {
      dispatch('fail');
    }
  }
</script>

<form on:submit={onSubmit}>
  <ModpackCompatibilityEdit bind:compatibilityInfo={modpack.compatibility} />
  <div class="p-5">
    <button class="variant-ghost-primary btn" type="submit">{$t('entry.save')}</button>
  </div>
</form>
