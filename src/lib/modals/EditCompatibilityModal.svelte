<script lang="ts">
  import type { Mod } from '$lib/generated';
  import { getTranslate } from '@tolgee/svelte';
  import EditCompatibilityForm from '$lib/components/mods/compatibility/EditCompatibilityForm.svelte';

  interface Props {
    mod: Mod;
  }

  let { mod }: Props = $props();

  export const { t } = getTranslate();
</script>

<div class="card flex flex-col gap-2 p-4">
  <h2 class="text-2xl">Edit Compatibility</h2>
  <div>
    <EditCompatibilityForm
      modId={mod.id}
      {mod}
      on:fail={() => {
        alert('Failed to update compatibility information, check browser console for more info.');
      }}
      on:submit={() => {
        modalStore.close();
        location.reload();
      }} />
  </div>
</div>
