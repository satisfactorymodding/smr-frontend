<script lang="ts">
  import ModpackGrid from '$lib/components/modpacks/ModpackGrid.svelte';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
</script>

<svelte:head>
  <MetaDescriptors description="Modpacks available from the Satisfactory Mod Repository" title="Modpacks" />
</svelte:head>

<!-- <ModpackGrid showSearch={true} newModpack={true} colCount={4} /> -->
<ModpackGrid showSearch={true} colCount={4} />