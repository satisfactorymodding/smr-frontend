<script lang="ts">
  import { Pagination } from '@skeletonlabs/skeleton-svelte';

  interface Props {
    page: number;
    perPage: number;
    total: number;
  }

  let { page = $bindable(), perPage = $bindable(), total }: Props = $props();
</script>

<Pagination {page} pageSize={perPage} count={total} onPageChange={(event) => (page = event.page)}>
  <Pagination.PrevTrigger>
    <span class="material-icons text-sm">arrow_back</span>
  </Pagination.PrevTrigger>
  <Pagination.Context>
    {#snippet children(pagination)}
      {#each pagination().pages as p, index (p)}
        {#if p.type === 'page'}
          <Pagination.Item {...p}>
            {p.value}
          </Pagination.Item>
        {:else}
          <Pagination.Ellipsis {index}>&#8230;</Pagination.Ellipsis>
        {/if}
      {/each}
    {/snippet}
  </Pagination.Context>
  <Pagination.NextTrigger>
    <span class="material-icons text-sm">arrow_forward</span>
  </Pagination.NextTrigger>
</Pagination>
