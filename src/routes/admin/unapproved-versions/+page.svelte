<script lang="ts">
  import { ApproveVersionDocument, DenyVersionDocument, GetUnapprovedVersionsDocument } from '$lib/generated';
  import { getContextClient, queryStore } from '@urql/svelte';
  import { API_REST } from '$lib/core';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import { prettyDate } from '$lib/utils/formatting';
  import { type PaginationSettings, Paginator } from '@skeletonlabs/skeleton';

  const client = getContextClient();

  let perPage = 20;
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

  $: totalVersions = $versions?.data?.getUnapprovedVersions?.count;

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

  $: paginationSettings = {
    page: page,
    limit: perPage,
    size: totalVersions,
    amounts: [5, 10, 20, 50, 100]
  } satisfies PaginationSettings;
</script>

<svelte:head>
  <MetaDescriptors description="Unapproved mod versions" title="Admin: Unapproved Versions" />
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
          <th>Mod</th>
          <th>Version</th>
          <th>Release Date</th>
          <th><!-- Buttons --></th>
        </tr>
      </thead>
      <tbody>
        {#each $versions.data.getUnapprovedVersions.versions as version}
          <tr>
            <td>{version.mod.name}</td>
            <td>{version.version}</td>
            <td>{prettyDate(version.created_at)}</td>
            <td class="!p-2.5">
              <div class="grid grid-flow-col gap-4">
                <button class="variant-ghost-primary btn" on:click={() => approveVersion(version.id)}>Approve</button>
                <button class="variant-ghost-primary btn" on:click={() => denyVersion(version.id)}>Deny</button>
                <a
                  class="variant-ghost-primary btn"
                  href={API_REST + '/mod/' + version.mod_id + '/versions/' + version.id + '/download'}>
                  Download
                </a>
                <a class="variant-ghost-primary btn" href={base + '/mod/' + version.mod_id + '/version/' + version.id}>
                  View
                </a>
              </div>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}
</div>

{#if totalVersions}
  <div class="ml-auto mt-5 flex justify-end">
    <Paginator
      bind:settings={paginationSettings}
      showFirstLastButtons={true}
      showPreviousNextButtons={true}
      on:page={(p) => (page = p.detail)}
      on:amount={(p) => (perPage = p.detail)}
      controlVariant="variant-filled-surface" />
  </div>
{/if}
