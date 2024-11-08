<script lang="ts">
  import ModGrid from '$lib/components/mods/ModGrid.svelte';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import type { Snapshot } from './$types';

  export const snapshot: Snapshot<{ left: number; top: number }> = {
    capture: () => {
      const page_div = document.getElementById('page');
      return { left: page_div.scrollLeft, top: page_div.scrollTop };
    },
    restore: (snapshotObj) => {
      const page_div = document.getElementById('page');
      page_div.scrollTo(snapshotObj.left, snapshotObj.top);
    }
  };
</script>

<svelte:head>
  <MetaDescriptors description="Mods available from the Satisfactory Mod Repository" title="Mods" />
</svelte:head>

<ModGrid showSearch={true} newMod={true} colCount={4} />
