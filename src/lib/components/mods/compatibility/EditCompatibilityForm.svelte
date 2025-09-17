<script lang="ts">
  import ModCompatibilityEdit from './ModCompatibilityEdit.svelte';
  import type { ModData } from '$lib/models/mods';
  import { EditModCompatibilityDocument } from '$lib/generated';
  import { getContextClient } from '@urql/svelte';
  import { createEventDispatcher } from 'svelte';
  import { getTranslate } from '@tolgee/svelte';

  interface Props {
    modId: string;
    mod: ModData;
  }

  let { modId, mod = $bindable() }: Props = $props();

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

<form onsubmit={onSubmit}>
  <ModCompatibilityEdit bind:compatibilityInfo={mod.compatibility} />
  <div class="p-5">
    <button class="variant-ghost-primary btn" type="submit">{$t('entry.save')}</button>
  </div>
</form>
