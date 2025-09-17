<script lang="ts">
  import { getContextClient, queryStore } from '@urql/svelte';
  import {
    CreateSatisfactoryVersionDocument,
    DeleteSatisfactoryVersionDocument,
    GetSatisfactoryVersionsDocument,
    UpdateSatisfactoryVersionDocument,
    type GetSatisfactoryVersionsQuery
  } from '$lib/generated';
  import { Accordion, AccordionItem, getToastStore } from '@skeletonlabs/skeleton';

  type SatisfactoryVersion = GetSatisfactoryVersionsQuery['getSatisfactoryVersions'][number];

  const client = getContextClient();

  const panels = {};
  const versionFields = $state({});

  const satisfactoryVersionsQuery = queryStore({
    query: GetSatisfactoryVersionsDocument,
    client
  });

  let satisfactoryVersions = $derived($satisfactoryVersionsQuery.data?.getSatisfactoryVersions || []);

  const toastStore = getToastStore();

  function newSatisfactoryVersion() {
    if (!satisfactoryVersions.find((satisfactoryVersion) => satisfactoryVersion.id < 0)) {
      const satisfactoryVersion = { id: -1, version: 0, engine_version: '4.26' } as SatisfactoryVersion;
      satisfactoryVersions.push(satisfactoryVersion);
      satisfactoryVersions = satisfactoryVersions;
      setTimeout(() => {
        panels[satisfactoryVersion.id].setOpen(true);
        const field = versionFields[satisfactoryVersion.id];
        field.focus();
        const input = field.getElement().querySelectorAll('input')[0] as HTMLInputElement;
        input.select();
      }, 0);
    } else {
      panels[satisfactoryVersions[satisfactoryVersions.length - 1].id].setOpen(true);
      versionFields[satisfactoryVersions[satisfactoryVersions.length - 1].id].focus();
    }
  }

  async function satisfactoryVersionChange(satisfactoryVersion: SatisfactoryVersion) {
    if (satisfactoryVersion.version === 0) {
      return;
    }

    console.log(satisfactoryVersion);

    let success = false;
    if (satisfactoryVersion.id < 0) {
      // Create new satisfactory version & update satisfactoryVersion.id with new DB id or re-fetch all satisfactory versions
      try {
        const result = await client
          .mutation(CreateSatisfactoryVersionDocument, {
            satisfactoryVersion: {
              version: satisfactoryVersion.version,
              engine_version: satisfactoryVersion.engine_version
            }
          })
          .toPromise();
        if (result.data) {
          satisfactoryVersion.id = result.data.createSatisfactoryVersion.id;
          success = true;
        }
      } catch (err) {
        console.log(err);
      }
      if (!success) {
        toastStore.trigger({
          message: `Failed to create Satisfactory version '${satisfactoryVersion.version}'!`,
          background: 'variant-filled-error',
          timeout: 2000
        });
        return;
      }
    } else {
      // Update existing satisfactory version
      try {
        success =
          (
            await client
              .mutation(UpdateSatisfactoryVersionDocument, {
                id: satisfactoryVersion.id,
                satisfactoryVersion: {
                  version: satisfactoryVersion.version,
                  engine_version: satisfactoryVersion.engine_version
                }
              })
              .toPromise()
          ).data.updateSatisfactoryVersion != null;
      } catch {
        // nothing
      }
      if (!success) {
        toastStore.trigger({
          message: `Failed to update Satisfactory version '${satisfactoryVersion.version}'!`,
          background: 'variant-filled-error',
          timeout: 2000
        });
        return;
      }
    }

    toastStore.trigger({
      message: `Satisfactory version '${satisfactoryVersion.version}' saved!`,
      background: 'variant-filled-success',
      timeout: 2000
    });
  }

  async function deleteSatisfactoryVersion(satisfactoryVersion: SatisfactoryVersion) {
    if (!(satisfactoryVersion.id < 0)) {
      // Remove satisfactory version
      let success = false;
      try {
        const result = await client
          .mutation(DeleteSatisfactoryVersionDocument, { satisfactoryVersionID: satisfactoryVersion.id })
          .toPromise();
        success = result.data.deleteSatisfactoryVersion;
        if (success) {
          satisfactoryVersions = satisfactoryVersions.filter((version) => version.id !== satisfactoryVersion.id);
        }
      } catch {
        success = false;
      }
      if (!success) {
        toastStore.trigger({
          message: `Failed to remove Satisfactory version '${satisfactoryVersion.version}'!`,
          background: 'variant-filled-error',
          timeout: 2000
        });
        return;
      }
    }

    toastStore.trigger({
      message: `Satisfactory version '${satisfactoryVersion.version}' removed!`,
      background: 'variant-filled-success',
      timeout: 2000
    });
  }

  function onDeleteClick(e: Event, satisfactoryVersion: SatisfactoryVersion) {
    e.stopPropagation();
    deleteSatisfactoryVersion(satisfactoryVersion);
  }
</script>

<h1>Satisfactory Versions</h1>

<div class="card">
  {#if $satisfactoryVersionsQuery.fetching}
    <h1>Loading satisfactory versions...</h1>
  {:else if $satisfactoryVersionsQuery.error}
    <h1>Failed to load satisfactory versions: {$satisfactoryVersionsQuery.error.message}</h1>
  {:else}
    <Accordion>
      {#each satisfactoryVersions as satisfactoryVersion}
        <AccordionItem>
          {#snippet summary()}
            {satisfactoryVersion.version}
          {/snippet}
          {#snippet content()}
            <div>
              <div>Game CL#</div>
              <input
                type="text"
                class="input p-2"
                bind:value={satisfactoryVersion.version}
                placeholder="Version"
                bind:this={versionFields[satisfactoryVersion.id]}
                onchange={() => satisfactoryVersionChange(satisfactoryVersion)} />
              <div>Engine Version</div>
              <input
                type="text"
                class="input p-2"
                bind:value={satisfactoryVersion.engine_version}
                placeholder="Engine version"
                onchange={() => satisfactoryVersionChange(satisfactoryVersion)} />
            </div>

            <button class="variant-ghost-error btn" onclick={(e) => onDeleteClick(e, satisfactoryVersion)}>
              <span>Delete</span>
            </button>
          {/snippet}
        </AccordionItem>
      {/each}
    </Accordion>

    <section class="p-4">
      <button class="variant-ghost-primary btn" onclick={newSatisfactoryVersion}>
        <span>Add new Satisfactory version</span>
        <span class="material-icons">add</span>
      </button>
    </section>
  {/if}
</div>

<style lang="postcss">
  h1 {
    @apply my-4 text-4xl font-bold;
  }
</style>
