<script lang="ts">
  import { ApproveModDocument, DenyModDocument, GetUnapprovedModsDocument } from '$lib/generated';
  import { getContextClient, queryStore } from '@urql/svelte';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import { prettyDate } from '$lib/utils/formatting';
  import { type PaginationSettings, Paginator } from '@skeletonlabs/skeleton';

  const client = getContextClient();

  let perPage = $state(20);
  let page = $state(0);

  let mods = $derived(
    queryStore({
      query: GetUnapprovedModsDocument,
      client,
      variables: {
        filter: {
          offset: page * perPage,
          limit: perPage
        }
      }
    })
  );

  let totalMods = $derived($mods?.data?.getUnapprovedMods?.count);

  const approveMod = (modId: string) => {
    client
      .mutation(ApproveModDocument, { modId })
      .toPromise()
      .then(() => {
        mods.pause();
        mods.resume();
      });
  };

  const denyMod = (modId: string) => {
    client
      .mutation(DenyModDocument, { modId })
      .toPromise()
      .then(() => {
        mods.pause();
        mods.resume();
      });
  };

  let paginationSettings = $derived({
    page: page,
    limit: perPage,
    size: totalMods,
    amounts: [5, 10, 20, 50, 100]
  } satisfies PaginationSettings);
</script>

<svelte:head>
  <MetaDescriptors description="Unapproved mods" title="Admin: Unapproved Mods" />
</svelte:head>

<h1>Unapproved Mods</h1>

{#if totalMods}
  <div class="mb-5 ml-auto flex justify-end">
    <div>
      <Paginator
        bind:settings={paginationSettings}
        showFirstLastButtons={true}
        showPreviousNextButtons={true}
        on:page={(p) => (page = p.detail)}
        on:amount={(p) => (perPage = p.detail)}
        controlVariant="variant-filled-surface" />
    </div>
  </div>
{/if}

<div class="card">
  {#if $mods.fetching}
    <section class="p-4">Loading...</section>
  {:else if $mods.error}
    <section class="p-4">Oh no... {$mods.error.message}</section>
  {:else}
    <table class="table table-hover max-w-full">
      <thead>
        <tr>
          <th>Mod</th>
          <th>Description</th>
          <th>Release Date</th>
          <th><!-- Buttons --></th>
        </tr>
      </thead>
      <tbody>
        {#each $mods.data.getUnapprovedMods.mods as mod}
          <tr>
            <td>{mod.name}</td>
            <td>{mod.short_description}</td>
            <td>{prettyDate(mod.created_at)}</td>
            <td class="!p-2.5">
              <div class="grid grid-flow-col gap-4">
                <button class="variant-ghost-primary btn btn-sm" onclick={() => approveMod(mod.id)}>Approve</button>
                <button class="variant-ghost-primary btn btn-sm" onclick={() => denyMod(mod.id)}>Deny</button>
                <a class="variant-ghost-primary btn btn-sm" href={base + '/mod/' + mod.id}>View</a>
              </div>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}
</div>

{#if totalMods}
  <div class="ml-auto mt-5 flex justify-end">
    <div>
      <Paginator
        bind:settings={paginationSettings}
        showFirstLastButtons={true}
        showPreviousNextButtons={true}
        on:page={(p) => (page = p.detail)}
        on:amount={(p) => (perPage = p.detail)}
        controlVariant="variant-filled-surface" />
    </div>
  </div>
{/if}

<style lang="postcss">
  h1 {
    @apply my-4 text-4xl font-bold;
  }
</style>
