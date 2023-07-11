<script lang="ts">
  import { DeleteSmlVersionDocument, GetSmlVersionsAdminDocument } from '$lib/generated';
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

  $: versions = queryStore({
    query: GetSmlVersionsAdminDocument,
    client,
    variables: {
      filter: {
        offset: (page - 1) * perPage,
        limit: perPage
      }
    }
  });

  $: totalVersions = $versions?.data?.getSMLVersions?.count;

  const deleteVersion = (smlVersionID: string) => {
    client
      .mutation(DeleteSmlVersionDocument, { smlVersionID })
      .toPromise()
      .then(() => {
        versions.pause();
        versions.resume();
      });
  };
</script>

<svelte:head>
  <MetaDescriptors description="SML Versions" title="Admin: SML Versions" />
</svelte:head>

<div class="mb-5 ml-auto flex justify-between">
  <Button variant="outlined" href="{base}/admin/sml-versions/new">New SML Version</Button>

  {#if totalVersions}
    <div>
      <PageControls totalPages={Math.ceil(totalVersions / perPage)} bind:currentPage={page} />
    </div>
  {/if}
</div>

<Card>
  {#if $versions.fetching}
    <Content>Loading...</Content>
  {:else if $versions.error}
    <Content>Oh no... {$versions.error.message}</Content>
  {:else}
    <DataTable class="max-w-full">
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
            <Cell>{prettyDate(version.created_at)}</Cell>
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
      <PageControls totalPages={Math.ceil(totalVersions / perPage)} bind:currentPage={page} />
    </div>
  </div>
{/if}
