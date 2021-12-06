<script lang="ts">
  import { ApproveModDocument, DenyModDocument, GetUnapprovedModsDocument } from '$lib/generated';
  import { mutation, operationStore, query } from '@urql/svelte';
  import { writable } from 'svelte/store';
  import PageControls from '$lib/components/utils/PageControls.svelte';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import Card, { Content } from '@smui/card';
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
  import Button from '@smui/button';

  // TODO Selectable
  const perPage = 20;

  const mods = operationStore(GetUnapprovedModsDocument, {
    filter: {
      offset: 0,
      limit: perPage
    }
  });

  const page = writable(1);
  let totalMods: number;

  page.subscribe((p) => ($mods.variables.filter.offset = (p - 1) * perPage));

  $: totalMods = $mods?.data?.getUnapprovedMods?.count;

  const approveModMut = mutation({
    query: ApproveModDocument
  });

  const approveMod = (modId: string) => {
    approveModMut({ modId }).then(() => {
      mods.reexecute();
    });
  };

  const denyModMut = mutation({
    query: DenyModDocument
  });

  const denyMod = (modId: string) => {
    denyModMut({ modId }).then(() => {
      mods.reexecute();
    });
  };

  query(mods);
</script>

<svelte:head>
  <MetaDescriptors description="Unapproved mods" title="Admin: Unapproved Mods" />
</svelte:head>

{#if totalMods}
  <div class="mb-5 ml-auto flex justify-end">
    <div>
      <PageControls totalPages={Math.ceil(totalMods / perPage)} currentPage={page} />
    </div>
  </div>
{/if}

<Card>
  {#if $mods.fetching}
    <Content>Loading...</Content>
  {:else if $mods.error}
    <Content>Oh no... {$mods.error.message}</Content>
  {:else}
    <DataTable table$aria-label="People list" style="max-width: 100%;">
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
            <!-- TODO Pretty Date -->
            <Cell>{mod.created_at}</Cell>
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
      <PageControls totalPages={Math.ceil(totalMods / perPage)} currentPage={page} />
    </div>
  </div>
{/if}
