<script lang="ts">
  import type {Writable} from "svelte/store";

  export let startPage = 1;
  export let totalPages: number;
  export let currentPage: Writable<number>;
</script>

{#if $currentPage > startPage}
  <button class="page-button" on:click={() => currentPage.set(startPage)}>
    &laquo;
  </button>
  <button class="page-button" on:click={() => currentPage.set($currentPage - 1)}>
    &lt;
  </button>
{/if}

{#if $currentPage > startPage + 1}
  <div class="py-1 px-4 inline-block">...</div>
{/if}

{#if $currentPage > startPage}
  <button class="page-button" on:click={() => currentPage.set($currentPage - 1)}>
    { $currentPage - 1 }
  </button>
{/if}

<button class="py-1 px-4 rounded border border-gray-50 mr-2 cursor-default">
  { $currentPage }
</button>

{#if $currentPage < totalPages}
  <button class="page-button" on:click={() => currentPage.set($currentPage + 1)}>
    { $currentPage + 1 }
  </button>
{/if}

{#if $currentPage < totalPages - 1}
  <div class="py-1 px-2 inline-block">...</div>
{/if}

{#if $currentPage < totalPages}
  <button class="page-button" on:click={() => currentPage.set($currentPage + 1)}>
    &gt;
  </button>
  <button class="page-button" on:click={() => currentPage.set(totalPages)}>
    &raquo;
  </button>
{/if}

<style lang="postcss">
  .page-button {
    @apply py-1 px-4 rounded border border-gray-500 mr-2 hover:border-gray-50;
  }
</style>
