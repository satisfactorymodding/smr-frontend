<script lang="ts">
  import { preloadData } from '$app/navigation';
  import { page } from '$app/state';
  import type { SidebarItemData } from '$lib/utils/sidebarItemData';
  import { Navigation } from '@skeletonlabs/skeleton-svelte';

  interface Props {
    item: SidebarItemData;
  }

  let { item }: Props = $props();

  let currentPath = $derived(page.url.pathname);

  const onCloseDrawer = () => {
    // drawerStore.close()
  };

  let anchorSidebar = 'btn hover:preset-tonal justify-start px-2 w-full';
</script>

{#if !item.external}
  <Navigation.Menu>
    <a
      href={item.url}
      class:preset-filled-primary-500={currentPath === item.url}
      onmouseover={() => preloadData(item.url)}
      onclick={onCloseDrawer}
      onfocus={() => preloadData(item.url)}
      class={anchorSidebar}
      title={item.label}
      aria-label={item.label}>
      <span class="material-icons">{item.icon}</span>
      <span>{item.label}</span>
    </a>
  </Navigation.Menu>
{:else}
  <Navigation.Menu>
    <a href={item.url} target="_blank" rel="noopener" class={anchorSidebar} title={item.label} aria-label={item.label}>
      <span class="material-icons">{item.icon}</span>
      <span>{item.label}</span>
    </a>
  </Navigation.Menu>
{/if}
