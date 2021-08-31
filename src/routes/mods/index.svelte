<svelte:head>
  <MetaDescriptors 
    description="Mods available from the Satisfactory Mod Repository"
    title="Mods" 
  />
</svelte:head>

<script lang="ts">
  import ModGrid from "$lib/components/mods/ModGrid.svelte";
  import {base} from "$app/paths";
  import MetaDescriptors from "$lib/components/utils/MetaDescriptors.svelte";
</script>

<div class="flex justify-between items-center">
  <h1 class="text-4xl my-4 font-bold">Mods</h1>
  <a href="{base}/new-mod" class="rounded text-base bg-blue-500 py-2 px-4 h-fit">New Mod</a>
</div>
<ModGrid colCount={5}/>
