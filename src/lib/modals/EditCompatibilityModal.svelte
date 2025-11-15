<script lang="ts">
  import { getTranslate } from '@tolgee/svelte';
  import EditCompatibilityForm from '$lib/components/mods/compatibility/EditCompatibilityForm.svelte';
  import BaseModal from '$lib/components/general/BaseModal.svelte';
  import type { ModData } from '$lib/models/mods';

  interface Props {
    mod: ModData & { id: string };
    open: boolean;
  }

  let { mod, open = $bindable() }: Props = $props();

  export const { t } = getTranslate();
</script>

<BaseModal bind:open>
  <h2 class="text-2xl">Edit Compatibility</h2>
  <div>
    <EditCompatibilityForm
      modId={mod.id}
      {mod}
      on:fail={() => {
        alert('Failed to update compatibility information, check browser console for more info.');
      }}
      on:submit={() => {
        open = false;
        location.reload();
      }} />
  </div>
</BaseModal>
