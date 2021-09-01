<script lang="ts">
  import GuideGrid from '$lib/components/guides/GuideGrid.svelte';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
</script>

<svelte:head>
  <MetaDescriptors description="Guides for Satisfactory and modding Satisfactory" title="Guides" />
</svelte:head>

<div class="flex justify-between items-center">
  <h1 class="text-4xl my-4 font-bold">Guides</h1>
  <a href="{base}/new-guide" class="rounded text-base bg-blue-500 py-2 px-4 h-fit">New Guide</a>
</div>
<GuideGrid colCount={5} />
