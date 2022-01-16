<script lang="ts">
  import { page } from '$app/stores';
  import { base } from '$app/paths';

  let baseUrl = $page.url.host;
  let route = $page.url.pathname;

  export let description: string | undefined = undefined;
  export let image: string | undefined = undefined;
  export let title: string | undefined = undefined;
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
