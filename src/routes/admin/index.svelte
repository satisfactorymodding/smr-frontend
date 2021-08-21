<svelte:head>
  <title>Admin - SMR</title>
</svelte:head>

<script>
  import {base} from "$app/paths";
</script>

<h1>Admin Panel</h1>

<a href="{base}/admin/unapproved-mods">
  <h2>Unapproved Mods</h2>
</a>

<a href="{base}/admin/unapproved-versions">
  <h2>Unapproved Versions</h2>
</a>

<a href="{base}/admin/sml-versions">
  <h2>SML Versions</h2>
</a>

<style lang="postcss">
  h1 {
    @apply text-4xl my-4 font-bold;
  }

  h2 {
    @apply text-3xl my-4 font-bold;
  }

  a {
    @apply underline text-yellow-500
  }
</style>
