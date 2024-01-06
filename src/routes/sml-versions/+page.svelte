<script lang="ts">
  import { GetSmlVersionsDocument } from '$lib/generated';
  import { getContextClient, queryStore } from '@urql/svelte';
  import { markdown } from '$lib/utils/markdown';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import { prettyDate } from '$lib/utils/formatting';
  import { type PaginationSettings, Paginator } from '@skeletonlabs/skeleton';

  const client = getContextClient();

  let expandedVersions = new Set<string>();

  let perPage = 20;
  let page = 0;

  $: versions = queryStore({
    query: GetSmlVersionsDocument,
    client,
    variables: {
      offset: page * perPage,
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

  $: paginationSettings = {
    page: page,
    limit: perPage,
    size: totalVersions,
    amounts: [5, 10, 20, 50, 100]
  } satisfies PaginationSettings;
</script>

<svelte:head>
  <title>SML Versions - SMR</title>
  <MetaDescriptors description="Versions of the Satisfactory Mod Loader" title="Satisfactory Mod Loader versions" />
</svelte:head>

{#if totalVersions}
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
  {#if $versions.fetching}
    <section class="p-4">Loading...</section>
  {:else if $versions.error}
    <section class="p-4">Oh no... {$versions.error.message}</section>
  {:else}
    <table class="table table-hover max-w-full">
      <thead>
        <tr>
          <th>Version</th>
          <th>Stability</th>
          <th>Game Version</th>
          <th>Release Date</th>
          <th><!-- Buttons --></th>
        </tr>
      </thead>
      <tbody>
        {#each $versions.data.getSMLVersions.sml_versions as version}
          <tr on:click={() => toggleRow(version.id)}>
            <td>{version.version}</td>
            <td>{version.stability}</td>
            <td>{version.satisfactory_version}</td>
            <td>{prettyDate(version.date)}</td>
            <td class="!p-2.5">
              <div class="grid grid-flow-col gap-4">
                <a class="variant-ghost-primary btn btn-sm" href={version.link}>View</a>
              </div>
            </td>
          </tr>

          {#if expandedVersions.has(version.id)}
            <tr>
              <td colspan={5} class="markdown-content p-2">
                {#await markdown(version.changelog) then changelogRendered}
                  <!-- eslint-disable -->
                  {@html changelogRendered}
                {/await}
              </td>
            </tr>
          {/if}
        {/each}
      </tbody>
    </table>
  {/if}
</div>

{#if totalVersions}
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
