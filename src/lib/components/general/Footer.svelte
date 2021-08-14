<script lang="ts">
  import {page} from '$app/stores';

  $: currentPath = $page.path;

  const activeLink = (path: string): string => {
    return currentPath.startsWith(path) ? ' underline' : '';
  }
</script>

<div class="menu grid bg-black py-2.5 px-4 items-center mt-8">
  <div class="grid grid-flow-col justify-self-center items-center">
    <a class="border-r-2 border-white px-4 text-gray-400{activeLink('/sml-versions')}" href="/sml-versions">SML Versions</a>
    <a class="border-r-2 border-white px-4 text-gray-400{activeLink('/help')}" href="/help">Help</a>
    <a class="border-r-2 border-white px-4 text-gray-400{activeLink('/api-docs')}" href="/api-docs">API Docs</a>
    <a class="border-r-2 border-white px-4 text-gray-400{activeLink('/privacy-policy')}" href="/privacy-policy">Privacy Policy</a>
    <a class="px-4 text-gray-400{activeLink('/tos')}" href="/tos">Terms of Service</a>
  </div>
</div>

<style lang="postcss">
  .menu {
    & > * {
      grid-column-start: 1;
      grid-row-start: 1;
    }
  }
</style>
