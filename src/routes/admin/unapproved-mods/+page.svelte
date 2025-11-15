<script lang="ts">
  import { ApproveModDocument, DenyModDocument, GetUnapprovedModsDocument } from '$lib/generated';
  import { getContextClient, queryStore } from '@urql/svelte';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import { prettyDate } from '$lib/utils/formatting';
  import Pager from '$lib/components/general/Pager.svelte';
  import QueryStateHandler from '$lib/components/general/QueryStateHandler.svelte';

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
</script>

<svelte:head>
  <MetaDescriptors description="Unapproved mods" title="Admin: Unapproved Mods" />
</svelte:head>

<h1>Unapproved Mods</h1>

{#if totalMods}
  <div class="mb-5 ml-auto flex justify-end">
    <div>
      <Pager bind:page bind:perPage total={totalMods} />
    </div>
  </div>
{/if}

<div class="card preset-filled-surface-100-900">
  <QueryStateHandler query={mods}>
    {#snippet loading()}
      <section class="p-4">Loading...</section>
    {/snippet}

    {#snippet error(err)}
      <section class="p-4">Oh no... {err.message}</section>
    {/snippet}

    <table class="table max-w-full">
      <thead>
        <tr>
          <th>Mod</th>
          <th>Description</th>
          <th>Release Date</th>
          <th><!-- Buttons --></th>
        </tr>
      </thead>
      <tbody>
        {#each $mods.data.getUnapprovedMods.mods as mod (mod.id)}
          <tr>
            <td>{mod.name}</td>
            <td>{mod.short_description}</td>
            <td>{prettyDate(mod.created_at)}</td>
            <td class="!p-2.5">
              <div class="grid grid-flow-col gap-4">
                <button
                  class="btn border border-primary-500 preset-tonal-primary btn-sm"
                  onclick={() => approveMod(mod.id)}>Approve</button>
                <button
                  class="btn border border-primary-500 preset-tonal-primary btn-sm"
                  onclick={() => denyMod(mod.id)}>Deny</button>
                <a class="btn border border-primary-500 preset-tonal-primary btn-sm" href={base + '/mod/' + mod.id}
                  >View</a>
              </div>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </QueryStateHandler>
</div>

{#if totalMods}
  <div class="mt-5 ml-auto flex justify-end">
    <div>
      <Pager bind:page bind:perPage total={totalMods} />
    </div>
  </div>
{/if}

<style lang="postcss">
  @reference "../../../app.css";

  h1 {
    @apply my-4 text-4xl font-bold;
  }
</style>
