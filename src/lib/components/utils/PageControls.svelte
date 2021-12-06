<script lang="ts">
  import type { Writable } from 'svelte/store';
  import Button from '@smui/button';

  export let startPage = 1;
  export let totalPages: number;
  export let currentPage: Writable<number>;
</script>

{#if $currentPage > startPage}
  <Button variant="outlined" on:click={() => currentPage.set(startPage)}>&laquo;</Button>
  <Button variant="outlined" on:click={() => currentPage.set($currentPage - 1)}>&lt;</Button>
{/if}

{#if $currentPage > startPage + 1}
  <div class="py-1 px-4 inline-block">...</div>
{/if}

{#if $currentPage > startPage}
  <Button variant="outlined" on:click={() => currentPage.set($currentPage - 1)}>
    {$currentPage - 1}
  </Button>
{/if}

<Button variant="unelevated">
  {$currentPage}
</Button>

{#if $currentPage < totalPages}
  <Button variant="outlined" on:click={() => currentPage.set($currentPage + 1)}>
    {$currentPage + 1}
  </Button>
{/if}

{#if $currentPage < totalPages - 1}
  <div class="py-1 px-2 inline-block">...</div>
{/if}

{#if $currentPage < totalPages}
  <Button variant="outlined" on:click={() => currentPage.set($currentPage + 1)}>&gt;</Button>
  <Button variant="outlined" on:click={() => currentPage.set(totalPages)}>&raquo;</Button>
{/if}
