<script lang="ts">
  import { ApproveVersionDocument, DenyVersionDocument, GetUnapprovedVersionsDocument } from '$lib/generated';
  import { mutation, operationStore, query } from '@urql/svelte';
  import { writable } from 'svelte/store';
  import PageControls from '$lib/components/utils/PageControls.svelte';
  import { API_REST } from '$lib/core';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import Card, { Content } from '@smui/card';
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
  import Button from '@smui/button';

  // TODO Selectable
  const perPage = 20;

  const versions = operationStore(GetUnapprovedVersionsDocument, {
    filter: {
      offset: 0,
      limit: perPage
    }
  });

  const page = writable(1);
  let totalVersions: number;

  page.subscribe((p) => ($versions.variables.filter.offset = (p - 1) * perPage));

  $: totalVersions = $versions?.data?.getUnapprovedVersions?.count;

  const approveVersionMut = mutation({
    query: ApproveVersionDocument
  });

  const approveVersion = (versionId: string) => {
    approveVersionMut({ versionId }).then(() => {
      versions.reexecute();
    });
  };

  const denyVersionMut = mutation({
    query: DenyVersionDocument
  });

  const denyVersion = (versionId: string) => {
    denyVersionMut({ versionId }).then(() => {
      versions.reexecute();
    });
  };

  query(versions);
</script>

<svelte:head>
  <MetaDescriptors description="Unapproved mod versions" title="Admin: Unapproved Versions" />
</svelte:head>

{#if totalVersions}
  <div class="mb-5 ml-auto flex justify-end">
    <div>
      <PageControls totalPages={Math.ceil(totalVersions / perPage)} currentPage={page} />
    </div>
  </div>
{/if}

<Card>
  {#if $versions.fetching}
    <Content>Loading...</Content>
  {:else if $versions.error}
    <Content>Oh no... {$versions.error.message}</Content>
  {:else}
    <DataTable table$aria-label="People list" style="max-width: 100%;">
      <Head>
        <Row>
          <Cell>Mod</Cell>
          <Cell>Version</Cell>
          <Cell>Release Date</Cell>
          <Cell><!-- Buttons --></Cell>
        </Row>
      </Head>
      <Body>
        {#each $versions.data.getUnapprovedVersions.versions as version}
          <Row>
            <Cell>{version.mod.name}</Cell>
            <Cell>{version.version}</Cell>
            <!-- TODO Pretty Date -->
            <Cell>{version.created_at}</Cell>
            <Cell>
              <div class="grid grid-flow-col gap-4">
                <Button variant="outlined" on:click={() => approveVersion(version.id)}>Approve</Button>
                <Button variant="outlined" on:click={() => denyVersion(version.id)}>Deny</Button>
                <Button
                  variant="outlined"
                  href={API_REST + '/mod/' + version.mod_id + '/versions/' + version.id + '/download'}
                >
                  Download
                </Button>
                <Button variant="outlined" href={base + '/mod/' + version.mod_id + '/version/' + version.id}>
                  View
                </Button>
              </div>
            </Cell>
          </Row>
        {/each}
      </Body>
    </DataTable>
  {/if}
</Card>

{#if totalVersions}
  <div class="mt-5 ml-auto flex justify-end">
    <PageControls totalPages={Math.ceil(totalVersions / perPage)} currentPage={page} />
  </div>
{/if}
