<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import type { Modpack, ModpackModEntry } from '$lib/generated';
  import { getTranslate } from '@tolgee/svelte';
  import { getModalStore } from '@skeletonlabs/skeleton';
  import ModList from '$lib/components/modpacks/ModList.svelte';

  export let modpack: Modpack;
  export let onDone: (mods: ModpackModEntry[]) => void = () => {};

  const mods = writable<ModpackModEntry[]>(modpack?.mods ?? []);

  setContext('MOD_MANAGER', {
    mods,
    addMod: (id: string, version: string) => {
      mods.update((ms) => [...ms, { mod_id: id, version_constraint: version }]);
    },
    removeMod: (id: string) => {
      mods.update((ms) => ms.filter((m) => m.mod_id !== id));
    }
  });

  export const { t } = getTranslate();
  const modalStore = getModalStore();

  function closeWithMods() {
    onDone($mods);
    modalStore.close();
  }
</script>

<div class="card p-4" style="width:95vw;max-width:95vw;margin:0 auto;">
  <h2 class="text-2xl">{$t('modpack.manage-mods.title')}</h2>

  <div class="mb-6 flex w-full flex-col gap-2 pb-2">
    <div class="flex w-full items-center justify-between border-b py-4">
      <h2 class="text-xl">{$t('modpack.manage-mods.current-mods')}</h2>
      <button class="variant-ghost-primary btn" on:click={closeWithMods}>Finish</button>
    </div>
    <ModList include={true} modIDs={$mods.map((mod) => mod.mod_id)} />
  </div>

  <div class="mb-6 flex w-full flex-col gap-2 pb-2">
    <div class="flex w-full items-center justify-between border-b py-4">
      <h2 class="text-xl">{$t('modpack.manage-mods.add-mods')}</h2>
    </div>
    <ModList exclude={true} modIDs={$mods.map((mod) => mod.mod_id)} />
  </div>
</div>
