<script lang="ts">
  import { ApproveVersionDocument, DenyVersionDocument, GetUnapprovedVersionsDocument } from '$lib/generated';
  import { getContextClient, queryStore } from '@urql/svelte';
  import { API_REST } from '$lib/core';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import { prettyDate } from '$lib/utils/formatting';
  import Pager from '$lib/components/general/Pager.svelte';

  const client = getContextClient();

  let perPage = $state(20);
  let page = $state(1);

  let versions = $derived(
    queryStore({
      query: GetUnapprovedVersionsDocument,
      client,
      variables: {
        filter: {
          offset: (page - 1) * perPage,
          limit: perPage
        }
      }
    })
  );

  let totalVersions = $derived($versions?.data?.getUnapprovedVersions?.count);

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

<h1>Unapproved Versions</h1>

{#if totalVersions}
  <div class="mb-5 ml-auto flex justify-end">
    <div>
      <Pager bind:page bind:perPage total={totalVersions} />
    </div>
  </div>
{/if}

<div class="card preset-filled-surface-100-900">
  {#if $versions.fetching}
    <section class="p-4">Loading...</section>
  {:else if $versions.error}
    <section class="p-4">Oh no... {$versions.error.message}</section>
  {:else}
    <table class="table max-w-full">
      <thead>
        <tr>
          <th>Mod</th>
          <th>Version</th>
          <th>Release Date</th>
          <th><!-- Buttons --></th>
        </tr>
      </thead>
      <tbody>
        {#each $versions.data.getUnapprovedVersions.versions as version (version.id)}
          <tr>
            <td>{version.mod.name}</td>
            <td>{version.version}</td>
            <td>{prettyDate(version.created_at)}</td>
            <td class="!p-2.5">
              <div class="grid grid-flow-col gap-4">
                <button
                  class="btn border border-primary-500 preset-tonal-primary"
                  onclick={() => approveVersion(version.id)}>Approve</button>
                <button
                  class="btn border border-primary-500 preset-tonal-primary"
                  onclick={() => denyVersion(version.id)}>Deny</button>
                <a
                  class="btn border border-primary-500 preset-tonal-primary"
                  href={API_REST + '/mod/' + version.mod_id + '/versions/' + version.id + '/download'}>
                  Download
                </a>
                <a
                  class="btn border border-primary-500 preset-tonal-primary"
                  href={base + '/mod/' + version.mod_id + '/version/' + version.id}>
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
  <div class="mt-5 ml-auto flex justify-end">
    <Pager bind:page bind:perPage total={totalVersions} />
  </div>
{/if}

<style lang="postcss">
  @reference "../../../app.css";

  h1 {
    @apply my-4 text-4xl font-bold;
  }
</style>
