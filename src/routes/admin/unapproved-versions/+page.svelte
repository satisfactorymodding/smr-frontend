<script lang="ts">
  import { ApproveVersionDocument, DenyVersionDocument, GetUnapprovedVersionsDocument } from '$lib/generated';
  import { getContextClient, queryStore } from '@urql/svelte';
  import PageControls from '$lib/components/utils/PageControls.svelte';
  import { API_REST } from '$lib/core';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import Card, { Content } from '@smui/card';
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
  import Button from '@smui/button';
  import { prettyDate } from '$lib/utils/formatting';

  const client = getContextClient();

  // TODO Selectable
  const perPage = 20;

  let page = 1;

  $: versions = queryStore({
    query: GetUnapprovedVersionsDocument,
    client,
    variables: {
      filter: {
        offset: (page - 1) * perPage,
        limit: perPage
      }
    }
  });

  let totalVersions = 0;
  $: if ($versions?.data?.getUnapprovedVersions?.count) {
    totalVersions = $versions.data.getUnapprovedVersions.count;
  }

  const approveVersion = (versionId: string) => {
    client
      .mutation(ApproveVersionDocument, { versionId })
      .toPromise()
      .then(() => {
        versions.pause();
        versions.resume();
      });
  };

  const denyVersion = (versionId: string) => {
    client
      .mutation(DenyVersionDocument, { versionId })
      .toPromise()
      .then(() => {
        versions.pause();
        versions.resume();
      });
  };
</script>

<svelte:head>
  <MetaDescriptors description="Unapproved mod versions" title="Admin: Unapproved Versions" />
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
            <Cell>{prettyDate(version.created_at)}</Cell>
            <Cell>
              <div class="grid grid-flow-col gap-4">
                <Button variant="outlined" on:click={() => approveVersion(version.id)}>Approve</Button>
                <Button variant="outlined" on:click={() => denyVersion(version.id)}>Deny</Button>
                <Button
                  variant="outlined"
                  href={API_REST + '/mod/' + version.mod_id + '/versions/' + version.id + '/download'}>
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
    <PageControls totalPages={Math.ceil(totalVersions / perPage)} bind:currentPage={page} />
  </div>
{/if}
