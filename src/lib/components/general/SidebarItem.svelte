<script lang="ts">
  import { preloadData } from '$app/navigation';
  import { page } from '$app/state';
  import type { SidebarItemData } from '$lib/utils/sidebarItemData';

  interface Props {
    item: SidebarItemData;
  }

  let { item }: Props = $props();

  let currentPath = $derived(page.url.pathname);

  const onCloseDrawer = () => {
    // drawerStore.close()
  };
</script>

<li>
  {#if !item.external}
    <a
      href={item.url}
      class:preset-filled-primary-500={currentPath === item.url}
      onmouseover={() => preloadData(item.url)}
      onclick={onCloseDrawer}
      onfocus={() => preloadData(item.url)}>
      <span class="material-icons">{item.icon}</span>
      <span class="flex-auto">{item.label}</span>
    </a>
  {:else}
    <a href={item.url} target="_blank" rel="noopener">
      <span class="material-icons">{item.icon}</span>
      <span class="flex-auto">{item.label}</span>
    </a>
  {/if}
</li>
