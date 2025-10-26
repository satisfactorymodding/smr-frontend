<script>
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
</script>

<svelte:head>
  <MetaDescriptors description="SMR Admin" title="Admin" />
</svelte:head>

<h1>Admin Panel</h1>

<div class="card preset-filled-surface-100-900 p-4">
  <section>
    <a href="{base}/admin/unapproved-mods" class="text-white">
      <h2>Unapproved Mods</h2>
    </a>

    <a href="{base}/admin/unapproved-versions" class="text-white">
      <h2>Unapproved Versions</h2>
    </a>

    <a href="{base}/admin/satisfactory-versions" class="text-white">
      <h2>Satisfactory Versions</h2>
    </a>

    <a href="{base}/admin/tag-manager" class="text-white">
      <h2>Tag Manager</h2>
    </a>

    <a href="{base}/admin/announcements" class="text-white">
      <h2>Announcements</h2>
    </a>
  </section>
</div>

<style lang="postcss">
  @reference "../../app.css";

  h1 {
    @apply my-4 text-4xl font-bold;
  }

  h2 {
    @apply my-4 text-3xl font-bold;
  }

  a {
    @apply text-yellow-500 underline;
  }
</style>
