<svelte:head>
  <MetaDescriptors 
    description="Unapproved mods" 
    title="Admin: Unapproved Mods" 
  />
</svelte:head>

<script lang="ts">
  import {ApproveModDocument, DenyModDocument, GetUnapprovedModsDocument} from "$lib/generated";
  import {mutation, operationStore, query} from "@urql/svelte";
  import {writable} from "svelte/store";
  import PageControls from "$lib/components/utils/PageControls.svelte";
  import {base} from "$app/paths";
  import MetaDescriptors from "$lib/components/utils/MetaDescriptors.svelte";

  // TODO Selectable
  const perPage = 20;

  const mods = operationStore(
    GetUnapprovedModsDocument,
    {
      filter: {
        offset: 0,
        limit: perPage
      }
    }
  );

  const page = writable(1);
  let totalMods: number;

  page.subscribe(p => $mods.variables.filter.offset = (p - 1) * perPage);

  $: totalMods = $mods?.data?.getUnapprovedMods?.count;

  const approveModMut = mutation({
    query: ApproveModDocument
  });

  const approveMod = (modId: string) => {
    approveModMut({modId}).then(() => {
      mods.reexecute();
    });
  }

  const denyModMut = mutation({
    query: DenyModDocument
  });

  const denyMod = (modId: string) => {
    denyModMut({modId}).then(() => {
      mods.reexecute();
    });
  }

  query(mods);
</script>

{#if totalMods}
  <div class="mt-5 ml-auto flex justify-end">
    <PageControls totalPages={Math.ceil(totalMods / perPage)} currentPage={page}/>
  </div>
{/if}

{#if $mods.fetching}
  <p>Loading...</p>
{:else if $mods.error}
  <p>Oh no... {$mods.error.message}</p>
{:else}
  <div class="grid grid-cols-6 itemList">
    <!-- Header -->
    <div>Mod</div>
    <div>Description</div>
    <div>Release Date</div>
    <div><!-- Buttons --></div>

    {#each $mods.data.getUnapprovedMods.mods as mod}
      <div class="contents itemHeader">
        <div>{mod.name}</div>
        <div>{mod.short_description}</div>
        <!-- TODO Pretty Date -->
        <div>{mod.created_at}</div>
        <div class="grid grid-flow-col gap-4">
          <button class="py-1 px-4 rounded text-base bg-green-600 text-center cursor-pointer"
                  on:click={() => approveMod(mod.id)}>
            Approve
          </button>
          <button class="py-1 px-4 rounded text-base bg-red-600 text-center cursor-pointer"
                  on:click={() => denyMod(mod.id)}>
            Deny
          </button>
          <a href={base +'/mod/' + mod.id} class="py-1 px-4 rounded text-base bg-blue-500 text-center cursor-pointer">View</a>
        </div>
      </div>
    {/each}
  </div>
{/if}

{#if totalMods}
  <div class="mt-5 ml-auto flex justify-end">
    <PageControls totalPages={Math.ceil(totalMods / perPage)} currentPage={page}/>
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
