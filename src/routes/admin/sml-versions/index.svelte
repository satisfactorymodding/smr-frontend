<script lang="ts">
  import { DeleteSmlVersionDocument, GetSmlVersionsAdminDocument } from '$lib/generated';
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

  const versions = operationStore(GetSmlVersionsAdminDocument, {
    filter: {
      offset: 0,
      limit: perPage
    }
  });

  const page = writable(1);
  let totalVersions: number;

  page.subscribe((p) => ($versions.variables.filter.offset = (p - 1) * perPage));

  $: totalVersions = $versions?.data?.getSMLVersions?.count;

  const deleteVersionMut = mutation({
    query: DeleteSmlVersionDocument
  });

  const deleteVersion = (smlVersionID: string) => {
    deleteVersionMut({ smlVersionID }).then(() => {
      versions.reexecute();
    });
  };

  query(versions);
</script>

<svelte:head>
  <MetaDescriptors description="SML Versions" title="Admin: SML Versions" />
</svelte:head>

<div class="mb-5 ml-auto flex justify-between">
  <Button variant="outlined" href="{base}/admin/sml-versions/new">New SML Version</Button>

  {#if totalVersions}
    <div>
      <PageControls totalPages={Math.ceil(totalVersions / perPage)} currentPage={page} />
    </div>
  {/if}
</div>

<Card>
  {#if $versions.fetching}
    <Content>Loading...</Content>
  {:else if $versions.error}
    <Content>Oh no... {$versions.error.message}</Content>
  {:else}
    <DataTable table$aria-label="People list" style="max-width: 100%;">
      <Head>
        <Row>
          <Cell>Version</Cell>
          <Cell>Stability</Cell>
          <Cell>Satisfactory Version</Cell>
          <Cell>Bootstrap Version</Cell>
          <Cell>Release Date</Cell>
          <Cell><!-- Buttons --></Cell>
        </Row>
      </Head>
      <Body>
        {#each $versions.data.getSMLVersions.sml_versions as version}
          <Row>
            <Cell>{version.version}</Cell>
            <Cell>{version.stability}</Cell>
            <Cell>{version.satisfactory_version}</Cell>
            <Cell>{version.bootstrap_version}</Cell>
            <!-- TODO Pretty Date -->
            <Cell>{version.created_at}</Cell>
            <Cell>
              <div class="grid grid-flow-col gap-4">
                <Button variant="outlined" on:click={() => deleteVersion(version.id)}>Delete</Button>
                <Button variant="outlined" href={base + '/admin/sml-versions/' + version.id + '/edit'}>Edit</Button>
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
    <div>
      <PageControls totalPages={Math.ceil(totalVersions / perPage)} currentPage={page} />
    </div>
  </div>
{/if}
