<script lang="ts">
  import { page } from '$app/stores';
  import { base } from '$app/paths';

  let baseUrl = $page.host;
  let route = $page.path;

  export let description: string;
  export let image: string;
  export let title: string;
</script>

{#if description}
  <meta property="description" content={description} />
  <meta property="og:description" content={description} />
{/if}

{#if image}
  <meta property="og:image" content={image} />
{:else}
  <meta property="og:image" content="{base}/assets/favicon.ico" />
{/if}

{#if title}
  <title>{title} - SMR</title>
  <meta property="og:title" content="{title} - SMR" />
{/if}

<meta property="og:url" content="{baseUrl}{route}" />
