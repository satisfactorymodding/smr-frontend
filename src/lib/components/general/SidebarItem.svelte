<script lang="ts">
  import { preloadData } from '$app/navigation';
  import { page } from '$app/stores';
  import type { SidebarItemData } from '$lib/utils/sidebarItemData';

  export let item: SidebarItemData;

  $: currentPath = $page.url.pathname;
</script>

<li>
  {#if !item.external}
    <a
      href={item.url}
      class:bg-primary-active-token={currentPath === item.url}
      on:mouseover={() => preloadData(item.url)}
      on:focus={() => preloadData(item.url)}>
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
