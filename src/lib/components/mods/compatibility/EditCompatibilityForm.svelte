<script lang="ts">
  import ModCompatibilityEdit from './ModCompatibilityEdit.svelte';
  import type { ModData } from '$lib/models/mods';
  import { EditModCompatibilityDocument } from '$lib/generated';
  import { mutation } from '@urql/svelte';
  import { createEventDispatcher } from 'svelte';
  import Button from '@smui/button';

  export let modId: string;
  export let mod: ModData;

  const updateCompatibility = mutation({ query: EditModCompatibilityDocument });

  const dispatch = createEventDispatcher();

  async function onSubmit(e) {
    e.preventDefault();
    let success = (
      await updateCompatibility({
        modId,
        compatibility: mod.compatibility
      })
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
    <Button variant="outlined" type="submit">Save</Button>
  </div>
</form>
