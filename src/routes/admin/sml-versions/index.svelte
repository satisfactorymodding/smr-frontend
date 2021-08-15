<script lang="ts">
  import {DeleteSmlVersionDocument, GetSmlVersionsAdminDocument,} from "$lib/generated";
  import {mutation, operationStore, query} from "@urql/svelte";
  import {writable} from "svelte/store";
  import PageControls from "$lib/components/utils/PageControls.svelte";
  import {base} from "$app/paths";

  // TODO Selectable
  const perPage = 20;

  const versions = operationStore(
    GetSmlVersionsAdminDocument,
    {
      filter: {
        offset: 0,
        limit: perPage
      }
    }
  );

  const page = writable(1);
  let totalVersions: number;

  page.subscribe(p => $versions.variables.filter.offset = (p - 1) * perPage);

  $: totalVersions = $versions?.data?.getSMLVersions?.count;

  const deleteVersionMut = mutation({
    query: DeleteSmlVersionDocument
  });

  const deleteVersion = (smlVersionID: string) => {
    deleteVersionMut({smlVersionID}).then(() => {
      versions.reexecute();
    });
  }

  query(versions);
</script>

<div class="flex justify-between items-center">
  <h1 class="text-4xl my-4 font-bold">SML Versions</h1>
  <a href="{base}/admin/sml-versions/new" class="rounded text-base bg-blue-500 py-2 px-4 h-fit">New SML Version</a>
</div>

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
  <div class="grid grid-cols-6 itemList">
    <!-- Header -->
    <div>Version</div>
    <div>Stability</div>
    <div>Satisfactory Version</div>
    <div>Bootstrap Version</div>
    <div>Release Date</div>
    <div><!-- Buttons --></div>

    {#each $versions.data.getSMLVersions.sml_versions as version}
      <div class="contents itemHeader">
        <div>{version.version}</div>
        <div>{version.stability}</div>
        <div>{version.satisfactory_version}</div>
        <div>{version.bootstrap_version}</div>
        <!-- TODO Pretty Date -->
        <div>{version.created_at}</div>
        <div class="grid grid-flow-col gap-4">
          <button class="py-1 px-4 rounded text-base bg-red-600 text-center cursor-pointer"
                  on:click={() => deleteVersion(version.id)}>
            Delete
          </button>
          <a href={base +'/admin/sml-versions/' + version.id + '/edit'} class="py-1 px-4 rounded text-base bg-blue-500 text-center cursor-pointer">Edit</a>
        </div>
      </div>
    {/each}
  </div>
{/if}

{#if totalVersions}
  <div class="mt-5 ml-auto flex justify-end">
    <PageControls totalPages={Math.ceil(totalVersions / perPage)} currentPage={page}/>
  </div>
{/if}

<style lang="postcss">
  .itemList {
    grid-template-columns: auto auto auto auto max-content auto;

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
