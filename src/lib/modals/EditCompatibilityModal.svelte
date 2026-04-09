<script lang="ts">
  import type { Mod, Modpack } from '$lib/generated';
  import { getTranslate } from '@tolgee/svelte';
  import EditModCompatibilityForm from '$lib/components/mods/compatibility/EditCompatibilityForm.svelte';
  import EditModpackCompatibilityForm from '$lib/components/modpacks/compatibility/EditCompatibilityForm.svelte';
  import { getModalStore } from '@skeletonlabs/skeleton';

  export let mod: Mod;
  export let modpack: Modpack;

  export const { t } = getTranslate();
  const modalStore = getModalStore();
</script>

<div class="card flex flex-col gap-2 p-4">
  <h2 class="text-2xl">Edit Compatibility</h2>
  <div>
    {#if mod}
      <EditModCompatibilityForm
        modId={mod.id}
        {mod}
        on:fail={() => {
          alert('Failed to update compatibility information, check browser console for more info.');
        }}
        on:submit={() => {
          modalStore.close();
          location.reload();
        }} />
    {:else if modpack}
      <EditModpackCompatibilityForm
      modpackId={modpack.id}
      {modpack}
      on:fail={() => {
        alert('Failed to update compatibility information, check browser console for more info.');
      }}
      on:submit={() => {
        modalStore.close();
        location.reload();
      }} />
    {/if}
  </div>
</div>
