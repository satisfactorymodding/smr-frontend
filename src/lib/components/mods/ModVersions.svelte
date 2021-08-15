<script lang="ts">
  import {GetModVersionsDocument} from "$lib/generated";
  import {operationStore, query} from "@urql/svelte";
  import Icon from "@iconify/svelte";
  import downloadIcon from '@iconify/icons-mdi/download.js';
  import {API_REST} from "$lib/core";
  import {markdown} from '$lib/utils/markdown';
  import {base} from "$app/paths";

  export let modId!: string;

  let expandedVersions = new Set<string>();

  // TODO Pagination
  const versions = operationStore(
    GetModVersionsDocument,
    {
      mod: modId,
      limit: 100,
      offset: 0
    }
  );

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

{#if $versions.fetching}
  <p>Loading...</p>
{:else if $versions.error}
  <p>Oh no... {$versions.error.message}</p>
{:else}
  <div class="grid grid-cols-6 versions">
    <!-- Header -->
    <div>Version</div>
    <div>Stability</div>
    <div>SML Version</div>
    <div>Downloads</div>
    <div>Upload Date</div>
    <div><!-- Buttons --></div>

    {#each $versions.data.getMod.versions as version}
      <div class="contents version-header" on:click={() => toggleRow(version.id)}>
        <div>{version.version}</div>
        <div>{version.stability}</div>
        <div>{version.sml_version}</div>
        <div>{version.downloads}</div>
        <!-- TODO Pretty Date -->
        <div>{version.created_at}</div>
        <div class="grid grid-flow-col gap-4">
          <a href={'/mod/' + modId + '/version/' + version.id}
             class="py-1 px-4 rounded text-base bg-blue-500 text-center">View</a>
          <a href={API_REST + '/mod/' + modId + '/versions/' + version.id + '/download'}
             class="py-1 px-4 rounded text-base bg-green-600 text-center">Download</a>
          <!-- TODO SMM -->
          <a href="{base}" class="py-1 px-4 rounded text-base bg-yellow-600 text-center">
            <span>Install</span>
            <Icon icon={downloadIcon} inline={true} class="inline-block"/>
          </a>
        </div>
      </div>

      {#if expandedVersions.has(version.id)}
        <!-- TODO Pretty Bytes -->
        <div class="col-span-3 p-2">Size: {version.size}</div>
        <div class="col-span-3 p-2">Hash: {version.hash}</div>

        <div class="col-span-6 p-2 markdown-content">
          {#await markdown(version.changelog) then changelogRendered}
            { @html changelogRendered }
          {/await}
        </div>
      {/if}
    {/each}
  </div>
{/if}

<style lang="postcss">
  .versions {
    grid-template-columns: auto auto auto auto max-content auto;

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
