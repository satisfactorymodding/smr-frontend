<script lang="ts">
  import ModCompatibilityEdit from './ModCompatibilityEdit.svelte';
  import type { ModData } from '$lib/models/mods';
  import { EditModCompatibilityDocument } from '$lib/generated';
  import { getContextClient } from '@urql/svelte';
  import { createEventDispatcher } from 'svelte';
  import Button from '@smui/button';
  import { getTranslate } from "@tolgee/svelte";

  export let modId: string;
  export let mod: ModData;

  export const { t } = getTranslate();

  const client = getContextClient();

  const dispatch = createEventDispatcher();

  async function onSubmit(e: Event) {
    e.preventDefault();
    const success = (
      await client
        .mutation(EditModCompatibilityDocument, {
          modId,
          compatibility: mod.compatibility
        })
        .toPromise()
    ).data.updateModCompatibility;
    if (success) {
      dispatch('submit');
    } else {
      dispatch('fail');
    }
  }
</script>

<form on:submit={onSubmit}>
  <ModCompatibilityEdit bind:compatibilityInfo={mod.compatibility} />
  <div class="p-5">
    <Button variant="outlined" type="submit">{ $t('entry.save') }</Button>
  </div>
</form>
