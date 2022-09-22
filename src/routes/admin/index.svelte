<script>
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import Card, { Content } from '@smui/card';
</script>

<svelte:head>
  <MetaDescriptors description="SMR Admin" title="Admin" />
</svelte:head>

<h1>Admin Panel</h1>

<Card>
  <Content>
    <a href="{base}/admin/unapproved-mods" class="text-white">
      <h2>Unapproved Mods</h2>
    </a>

    <a href="{base}/admin/unapproved-versions" class="text-white">
      <h2>Unapproved Versions</h2>
    </a>

    <a href="{base}/admin/sml-versions" class="text-white">
      <h2>SML Versions</h2>
    </a>

    <a href="{base}/admin/tag-manager" class="text-white">
      <h2>Tag Manager</h2>
    </a>
  </Content>
</Card>

<style lang="postcss">
  h1 {
    @apply text-4xl my-4 font-bold;
  }

  h2 {
    @apply text-3xl my-4 font-bold;
  }

  a {
    @apply underline text-yellow-500;
  }
</style>
