<script lang="ts">
  import { page } from '$app/stores';
  import { base } from '$app/paths';

  const baseUrl = $page.url.origin;
  const route = $page.url.pathname;

  interface Props {
    description?: string | undefined;
    image?: string | undefined;
    title?: string | undefined;
  }

  let { description = undefined, image = undefined, title = undefined }: Props = $props();
</script>

{#if description}
  <meta name="description" content={description} />
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
