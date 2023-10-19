<script lang="ts">
  import GuideGrid from '$lib/components/guides/GuideGrid.svelte';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
</script>

<svelte:head>
  <MetaDescriptors description="Guides for Satisfactory and modding Satisfactory" title="Guides" />
</svelte:head>

<GuideGrid newGuide={true} colCount={4} />
