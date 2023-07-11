<script lang="ts">
  import { ApproveModDocument, DenyModDocument, GetUnapprovedModsDocument } from '$lib/generated';
  import { getContextClient, queryStore } from '@urql/svelte';
  import PageControls from '$lib/components/utils/PageControls.svelte';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import Card, { Content } from '@smui/card';
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
  import Button from '@smui/button';
  import { prettyDate } from '$lib/utils/formatting';

  const client = getContextClient();

  // TODO Selectable
  const perPage = 20;

  const page = 1;

  $: mods = queryStore({
    query: GetUnapprovedModsDocument,
    client,
    variables: {
      filter: {
        offset: (page - 1) * perPage,
        limit: perPage
      }
    }
  });

  $: totalMods = $mods?.data?.getUnapprovedMods?.count;

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

{#if totalMods}
  <div class="mb-5 ml-auto flex justify-end">
    <div>
      <PageControls totalPages={Math.ceil(totalMods / perPage)} bind:currentPage={page} />
    </div>
  </div>
{/if}

<Card>
  {#if $mods.fetching}
    <Content>Loading...</Content>
  {:else if $mods.error}
    <Content>Oh no... {$mods.error.message}</Content>
  {:else}
    <DataTable class="max-w-full">
      <Head>
        <Row>
          <Cell>Mod</Cell>
          <Cell>Description</Cell>
          <Cell>Release Date</Cell>
          <Cell><!-- Buttons --></Cell>
        </Row>
      </Head>
      <Body>
        {#each $mods.data.getUnapprovedMods.mods as mod}
          <Row>
            <Cell>{mod.name}</Cell>
            <Cell>{mod.short_description}</Cell>
            <Cell>{prettyDate(mod.created_at)}</Cell>
            <Cell>
              <div class="grid grid-flow-col gap-4">
                <Button variant="outlined" on:click={() => approveMod(mod.id)}>Approve</Button>
                <Button variant="outlined" on:click={() => denyMod(mod.id)}>Deny</Button>
                <Button variant="outlined" href={base + '/mod/' + mod.id}>View</Button>
              </div>
            </Cell>
          </Row>
        {/each}
      </Body>
    </DataTable>
  {/if}
</Card>

{#if totalMods}
  <div class="mt-5 ml-auto flex justify-end">
    <div>
      <PageControls totalPages={Math.ceil(totalMods / perPage)} bind:currentPage={page} />
    </div>
  </div>
{/if}
