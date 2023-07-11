<script lang="ts">
  import { GetSmlVersionsDocument } from '$lib/generated';
  import { getContextClient, queryStore } from '@urql/svelte';
  import PageControls from '$lib/components/utils/PageControls.svelte';
  import { markdown } from '$lib/utils/markdown';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import Card, { Content } from '@smui/card';
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
  import Button from '@smui/button';
  import { prettyDate } from '$lib/utils/formatting';

  const client = getContextClient();

  let expandedVersions = new Set<string>();

  // TODO Selectable
  const perPage = 20;

  const page = 1;

  // TODO Pagination
  $: versions = queryStore({
    query: GetSmlVersionsDocument,
    client,
    variables: {
      offset: (page - 1) * perPage,
      limit: perPage
    }
  });

  $: totalVersions = $versions?.data?.getSMLVersions?.count;

  const toggleRow = (versionId: string) => {
    if (expandedVersions.has(versionId)) {
      expandedVersions.delete(versionId);
    } else {
      expandedVersions.add(versionId);
    }
    expandedVersions = expandedVersions;
  };
</script>

<svelte:head>
  <title>SML Versions - SMR</title>
  <MetaDescriptors description="Versions of the Satisfactory Mod Loader" title="Satisfactory Mod Loader versions" />
</svelte:head>

{#if totalVersions}
  <div class="mb-5 ml-auto flex justify-end">
    <div>
      <PageControls totalPages={Math.ceil(totalVersions / perPage)} bind:currentPage={page} />
    </div>
  </div>
{/if}

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
          <Cell>Game Version</Cell>
          <Cell>Release Date</Cell>
          <Cell><!-- Buttons --></Cell>
        </Row>
      </Head>
      <Body>
        {#each $versions.data.getSMLVersions.sml_versions as version}
          <Row on:click={() => toggleRow(version.id)}>
            <Cell>{version.version}</Cell>
            <Cell>{version.stability}</Cell>
            <Cell>{version.satisfactory_version}</Cell>
            <Cell>{prettyDate(version.date)}</Cell>
            <Cell>
              <div class="grid grid-flow-col gap-4">
                <Button variant="outlined" href={version.link}>View</Button>
              </div>
            </Cell>
          </Row>

          {#if expandedVersions.has(version.id)}
            <Row>
              <Cell colspan={5} class="p-2 markdown-content">
                {#await markdown(version.changelog) then changelogRendered}
                  {@html changelogRendered}
                {/await}
              </Cell>
            </Row>
          {/if}
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
