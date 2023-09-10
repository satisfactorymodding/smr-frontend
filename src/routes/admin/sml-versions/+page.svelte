<script lang="ts">
  import { DeleteSmlVersionDocument, GetSmlVersionsAdminDocument } from '$lib/generated';
  import { getContextClient, queryStore } from '@urql/svelte';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import { prettyDate } from '$lib/utils/formatting';
  import { type PaginationSettings, Paginator } from '@skeletonlabs/skeleton';

  const client = getContextClient();

  let perPage = 20;
  let page = 0;

  $: versions = queryStore({
    query: GetSmlVersionsAdminDocument,
    client,
    variables: {
      filter: {
        offset: page * perPage,
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

  $: paginationSettings = {
    page: page,
    limit: perPage,
    size: totalVersions,
    amounts: [5, 10, 20, 50, 100]
  } satisfies PaginationSettings;
</script>

<svelte:head>
  <MetaDescriptors description="SML Versions" title="Admin: SML Versions" />
</svelte:head>

<div class="mb-5 ml-auto flex justify-between">
  <a class="btn variant-ghost-primary" href="{base}/admin/sml-versions/new">New SML Version</a>

  {#if totalVersions}
    <div>
      <Paginator
        bind:settings={paginationSettings}
        showFirstLastButtons={true}
        showPreviousNextButtons={true}
        on:page={(p) => (page = p.detail)}
        on:amount={(p) => (perPage = p.detail)}
        controlVariant="variant-filled-surface" />
    </div>
  {/if}
</div>

<div class="card">
  {#if $versions.fetching}
    <section class="p-4">Loading...</section>
  {:else if $versions.error}
    <section class="p-4">Oh no... {$versions.error.message}</section>
  {:else}
    <table class="max-w-full table table-hover">
      <thead>
        <tr>
          <th>Version</th>
          <th>Stability</th>
          <th>Satisfactory Version</th>
          <th>Bootstrap Version</th>
          <th>Release Date</th>
          <th><!-- Buttons --></th>
        </tr>
      </thead>
      <tbody>
        {#each $versions.data.getSMLVersions.sml_versions as version}
          <tr>
            <td>{version.version}</td>
            <td>{version.stability}</td>
            <td>{version.satisfactory_version}</td>
            <td>{version.bootstrap_version}</td>
            <td>{prettyDate(version.created_at)}</td>
            <td>
              <div class="grid grid-flow-col gap-4">
                <button class="btn btn-sm variant-ghost-primary" on:click={() => deleteVersion(version.id)}
                  >Delete</button>
                <a class="btn btn-sm variant-ghost-primary" href={base + '/admin/sml-versions/' + version.id + '/edit'}
                  >Edit</a>
              </div>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}
</div>

{#if totalVersions}
  <div class="mt-5 ml-auto flex justify-end">
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
