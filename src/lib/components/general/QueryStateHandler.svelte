<script lang="ts">
  import type { Readable } from 'svelte/store';

  interface QueryState {
    fetching: boolean;
    error?: Error;
    data?: unknown;
  }

  interface Props {
    query: Readable<QueryState>;
    loading?: import('svelte').Snippet;
    error?: import('svelte').Snippet<[Error]>;
    empty?: import('svelte').Snippet;
    children: import('svelte').Snippet;
  }

  let { query, loading, error, empty, children }: Props = $props();
</script>

{#if $query.fetching}
  {#if loading}
    {@render loading()}
  {:else}
    <p>Loading...</p>
  {/if}
{:else if $query.error}
  {#if error}
    {@render error($query.error)}
  {:else}
    <p>Oh no... {$query.error.message}</p>
  {/if}
{:else if $query.data}
  {@render children()}
{:else if empty}
  {@render empty()}
{/if}
