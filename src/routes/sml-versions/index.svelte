<svelte:head>
  <title>SML Versions - SMR</title>
</svelte:head>

<script lang="ts">
  import {GetSmlVersionsDocument} from "$lib/generated";
  import {operationStore, query} from "@urql/svelte";
  import {writable} from "svelte/store";
  import PageControls from "$lib/components/utils/PageControls.svelte";
  import {markdown} from '$lib/utils/markdown';

  let expandedVersions = new Set<string>();

  // TODO Selectable
  const perPage = 20;

  // TODO Pagination
  const versions = operationStore(
    GetSmlVersionsDocument,
    {offset: 0, limit: perPage}
  );

  const page = writable(1);
  let totalVersions: number;

  page.subscribe(p => $versions.variables.offset = (p - 1) * perPage);

  $: totalVersions = $versions?.data?.getSMLVersions?.count;

  query(versions);

  const toggleRow = (versionId: string) => {
    if (expandedVersions.has(versionId)) {
      expandedVersions.delete(versionId);
    } else {
      expandedVersions.add(versionId);
    }
    expandedVersions = expandedVersions;
  }
</script>

{#if totalVersions}
  <div class="mt-5 ml-auto flex justify-end">
    <PageControls totalPages={Math.ceil(totalVersions / perPage)} currentPage={page}/>
  </div>
{/if}

{#if $versions.fetching}
  <p>Loading...</p>
{:else if $versions.error}
  <p>Oh no... {$versions.error.message}</p>
{:else}
  <div class="grid grid-cols-6 versions">
    <!-- Header -->
    <div>Version</div>
    <div>Stability</div>
    <div>Game Version</div>
    <div>Release Date</div>
    <div><!-- Buttons --></div>

    {#each $versions.data.getSMLVersions.sml_versions as version}
      <div class="contents version-header" on:click={() => toggleRow(version.id)}>
        <div>{version.version}</div>
        <div>{version.stability}</div>
        <div>{version.satisfactory_version}</div>
        <!-- TODO Pretty Date -->
        <div>{version.date}</div>
        <div class="grid grid-flow-col gap-4">
          <a href={version.link} class="py-1 px-4 rounded text-base bg-blue-500 text-center">View</a>
        </div>
      </div>

      {#if expandedVersions.has(version.id)}
        <div class="col-span-5 p-2 markdown-content">
          {#await markdown(version.changelog) then changelogRendered}
            { @html changelogRendered }
          {/await}
        </div>
      {/if}
    {/each}
  </div>
{/if}

{#if totalVersions}
  <div class="mt-5 ml-auto flex justify-end">
    <PageControls totalPages={Math.ceil(totalVersions / perPage)} currentPage={page}/>
  </div>
{/if}

<style lang="postcss">
  .versions {
    grid-template-columns: auto auto auto max-content auto;

    & .version-header {
      & > div {
        @apply border-t-2 border-white p-4;
      }

      &:hover > div {
        @apply cursor-pointer;
        background: rgba(255, 255, 255, 0.25);
      }
    }
  }
</style>
