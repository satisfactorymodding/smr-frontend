<script lang="ts">
  import { getTranslate } from '@tolgee/svelte';
  import EditCompatibilityForm from '$lib/components/mods/compatibility/EditCompatibilityForm.svelte';
  import { onMount } from 'svelte';
  import type { ModData } from '$lib/models/mods';

  interface Props {
    mod: ModData & { id: string };
    open: boolean;
  }

  let { mod, open = $bindable() }: Props = $props();

  export const { t } = getTranslate();

  let self = $state<HTMLDialogElement>();

  onMount(() => {
    if (open) {
      self.showModal();
    }
  });

  $effect(() => {
    if (open) {
      self.showModal();
    } else {
      self.close();
    }
  });
</script>

<dialog
  data-dialog
  bind:this={self}
  onclick={() => (open = false)}
  class="top-1/2 left-1/2 z-10 max-w-[640px] -translate-1/2 space-y-4 rounded-container bg-surface-100-900 p-4 text-inherit backdrop:bg-surface-50/75 dark:backdrop:bg-surface-950/75">
  <div class="flex flex-col gap-2 card preset-filled-surface-100-900 p-4">
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
  </div>
</dialog>
