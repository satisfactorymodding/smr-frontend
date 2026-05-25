<script lang="ts">
  import ModCompatibilityEdit from './ModCompatibilityEdit.svelte';
  import { EditModCompatibilityDocument, type Mod } from '$lib/generated';
  import { getContextClient } from '@urql/svelte';
  import { createEventDispatcher } from 'svelte';
  import { getTranslate } from '@tolgee/svelte';

  export let modId: string;
  export let mod: Pick<Mod, 'compatibility'>;

  export const { t } = getTranslate();

  const client = getContextClient();

  const dispatch = createEventDispatcher();

  async function onSubmit(e: Event) {
    e.preventDefault();

    const result = await client
      .mutation(EditModCompatibilityDocument, {
        modId,
        compatibility: mod.compatibility!
      })
      .toPromise();
    const success = result.data?.updateModCompatibility ?? false;

    if (success) {
      dispatch('submit');
    } else {
      console.error('Failed to update compatibility information', result.error);
      dispatch('fail');
    }
  }
</script>

<form on:submit={onSubmit}>
  <ModCompatibilityEdit bind:compatibilityInfo={mod.compatibility} />
  <div class="p-5">
    <button class="variant-ghost-primary btn" type="submit">{$t('entry.save')}</button>
  </div>
</form>
