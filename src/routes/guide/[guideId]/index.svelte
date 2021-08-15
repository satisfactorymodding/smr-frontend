<script lang="ts" context="module">
  import {paramsToProps} from "$lib/utils/routing";

  export const load = paramsToProps();
</script>

<script lang="ts">
  import {mutation, operationStore, query} from "@urql/svelte";
  import {DeleteGuideDocument, GetGuideDocument} from "$lib/generated";
  import GuideInfo from "$lib/components/guides/GuideInfo.svelte";
  import GuideAuthor from "$lib/components/guides/GuideAuthor.svelte";
  import {user} from "$lib/stores/user";
  import {goto} from "$app/navigation";
  import {writable} from "svelte/store";
  import Dialog from "$lib/components/general/Dialog.svelte";
  import Toast from "$lib/components/general/Toast.svelte";
  import {markdown} from '$lib/utils/markdown';
  import {base} from "$app/paths";

  export let guideId!: string;

  let errorMessage = '';
  let errorToast = false;

  const guide = operationStore(
    GetGuideDocument,
    {guide: guideId}
  );

  const deleteGuide = mutation({
    query: DeleteGuideDocument
  });

  $: canUserEdit = $user?.roles?.deleteContent || $user?.id === $guide?.data?.getGuide?.user?.id;

  const deleteDialogOpen = writable<boolean>(false);

  const deleteGuideFn = () => {
    deleteGuide({guideId}).then(value => {
      if (value.error) {
        console.error(value.error.message);
        errorMessage = 'Error deleting guide: ' + value.error.message;
        errorToast = true;
      } else {
        // TODO Toast or something
        goto(base + '/guides');
      }
    });
  };

  $: if (!errorToast) errorMessage = '';

  query(guide);
</script>

{#if $guide.fetching}
  <p>Loading...</p>
{:else if $guide.error}
  <p>Oh no... {$guide.error.message}</p>
{:else}
  {#if $guide.data.getGuide}
    <div class="grid gap-8 grid-auto-max">
      <div class="grid grid-cols-1 auto-rows-min gap-8">
        <div class="grid grid-flow-col grid-auto-max h-auto gap-4 items-center">
          <h1 class="text-4xl my-4 font-bold">{ $guide.data.getGuide.name }</h1>

          {#if canUserEdit}
            <button class="py-2 px-4 rounded text-base bg-yellow-600"
                    on:click={() => goto(base + '/guide/' + guideId + '/edit')}>
              Edit
            </button>
            <button class="py-2 px-4 rounded text-base bg-red-500"
                    on:click={() => deleteDialogOpen.set(true)}>
              Delete
            </button>
          {/if}
        </div>
        <div class="markdown-content">
          {#await markdown($guide.data.getGuide.guide) then guideRendered}
            <p>{ @html guideRendered }</p>
          {/await}
        </div>
      </div>
      <div class="grid grid-cols-1 auto-rows-min gap-8">
        <GuideInfo guide={$guide.data.getGuide}/>
        <GuideAuthor author={$guide.data.getGuide.user}/>
      </div>
    </div>

    <Dialog bind:open={$deleteDialogOpen}>
      <div class="grid grid-flow-row gap-4">
        <h3 class="text-2xl font-bold">Delete Guide?</h3>

        <span>Are you sure you wish to delete this guide</span>

        <button class="py-1 px-4 rounded text-base bg-yellow-600" on:click={() => deleteDialogOpen.set(false)}>
          Cancel
        </button>
        <button class="py-1 px-4 rounded text-base bg-red-500" on:click={() => deleteGuideFn()}>
          Delete
        </button>
      </div>
    </Dialog>

    <Toast bind:running={errorToast}>
      <span>{errorMessage}</span>
    </Toast>
  {:else }
    <!-- TODO Better 404 -->
    404
  {/if}
{/if}

<style lang="postcss">
  .grid-auto-max {
    grid-template-columns: auto max-content max-content;
  }
</style>
