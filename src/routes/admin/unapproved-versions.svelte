<script lang="ts">
  import { ApproveVersionDocument, DenyVersionDocument, GetUnapprovedVersionsDocument } from '$lib/generated';
  import { mutation, operationStore, query } from '@urql/svelte';
  import { writable } from 'svelte/store';
  import PageControls from '$lib/components/utils/PageControls.svelte';
  import { API_REST } from '$lib/core';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';

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
  <div class="mt-5 ml-auto flex justify-end">
    <PageControls totalPages={Math.ceil(totalVersions / perPage)} currentPage={page} />
  </div>
{/if}

{#if $versions.fetching}
  <p>Loading...</p>
{:else if $versions.error}
  <p>Oh no... {$versions.error.message}</p>
{:else}
  <div class="grid grid-cols-6 itemList">
    <!-- Header -->
    <div>Mod</div>
    <div>Version</div>
    <div>Release Date</div>
    <div><!-- Buttons --></div>

    {#each $versions.data.getUnapprovedVersions.versions as version}
      <div class="contents itemHeader">
        <div>{version.mod.name}</div>
        <div>{version.version}</div>
        <!-- TODO Pretty Date -->
        <div>{version.created_at}</div>
        <div class="grid grid-flow-col gap-4">
          <button
            class="py-1 px-4 rounded text-base bg-green-600 text-center cursor-pointer"
            on:click={() => approveVersion(version.id)}
          >
            Approve
          </button>
          <button
            class="py-1 px-4 rounded text-base bg-red-600 text-center cursor-pointer"
            on:click={() => denyVersion(version.id)}
          >
            Deny
          </button>
          <a
            href={API_REST + '/mod/' + version.mod_id + '/versions/' + version.id + '/download'}
            class="py-1 px-4 rounded text-base bg-yellow-600 text-center cursor-pointer">Download</a
          >
          <a
            href={base + '/mod/' + version.mod_id + '/version/' + version.id}
            class="py-1 px-4 rounded text-base bg-blue-500 text-center cursor-pointer">View</a
          >
        </div>
      </div>
    {/each}
  </div>
{/if}

{#if totalVersions}
  <div class="mt-5 ml-auto flex justify-end">
    <PageControls totalPages={Math.ceil(totalVersions / perPage)} currentPage={page} />
  </div>
{/if}

<style lang="postcss">
  .itemList {
    grid-template-columns: auto auto max-content auto;

    & .itemHeader {
      & > div {
        @apply border-t-2 border-white p-4;
      }

      &:hover > div {
        background: rgba(255, 255, 255, 0.25);
      }
    }
  }
</style>
