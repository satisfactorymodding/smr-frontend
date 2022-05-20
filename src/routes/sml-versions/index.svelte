<script lang="ts">
  import { GetSmlVersionsDocument } from '$lib/generated';
  import { operationStore, query } from '@urql/svelte';
  import { writable } from 'svelte/store';
  import PageControls from '$lib/components/utils/PageControls.svelte';
  import { markdown } from '$lib/utils/markdown';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import Card, { Content } from '@smui/card';
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
  import Button from '@smui/button';
  import { prettyDate } from '$lib/utils/formatting';

  let expandedVersions = new Set<string>();

  // TODO Selectable
  const perPage = 20;

  // TODO Pagination
  const versions = operationStore(GetSmlVersionsDocument, { offset: 0, limit: perPage });

  const page = writable(1);
  let totalVersions: number;

  page.subscribe((p) => {
    $versions.variables.offset = (p - 1) * perPage;
    $versions.reexecute();
  });

  $: totalVersions = $versions?.data?.getSMLVersions?.count;

  query(versions);

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
                {#each version.links as smllinks}
                  <Button variant="outlined" href={smllinks.link}>{smllinks.platform} {smllinks.side}</Button>
                {/each}
                <!--<Button variant="outlined" href={version.link}>View</Button>-->
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
      <PageControls totalPages={Math.ceil(totalVersions / perPage)} currentPage={page} />
    </div>
  </div>
{/if}
