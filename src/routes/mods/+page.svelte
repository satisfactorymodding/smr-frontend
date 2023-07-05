<script lang="ts">
  import ModGrid from '$lib/components/mods/ModGrid.svelte';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
</script>

<svelte:head>
  <MetaDescriptors description="Mods available from the Satisfactory Mod Repository" title="Mods" />
</svelte:head>

<ModGrid showSearch={true} newMod={true} colCount={4} />
