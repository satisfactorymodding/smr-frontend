<script lang="ts">
  import { DeleteVersionDocument } from '$lib/generated';
  import VersionDescription from '$lib/components/versions/VersionDescription.svelte';
  import VersionInfo from '$lib/components/versions/VersionInfo.svelte';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import { API_REST } from '$lib/core';
  import Toast from '$lib/components/general/Toast.svelte';
  import { writable } from 'svelte/store';
  import { goto } from '$app/navigation';
  import { user } from '$lib/stores/user';
  import { base } from '$app/paths';
  import Button, { Label, Icon } from '@smui/button';
  import Dialog, { Title, Content as DialogContent } from '@smui/dialog';
  import Menu from '@smui/menu';
  import List, { Item } from '@smui/list';
  import { installMod } from '$lib/stores/launcher';
  import { prettyTarget } from '$lib/utils/formatting';
  import VersionTargetSupportGrid from '$lib/components/versions/VersionTargetSupportGrid.svelte';
  import VersionDependenciesGrid from '$lib/components/versions/VersionDependenciesGrid.svelte';
  import { getContextClient } from '@urql/svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  const { modId, versionId, version } = data;

  const client = getContextClient();

  let errorMessage = '';
  let errorToast = false;
  let menu: Menu;

  $: canUserEdit =
    $user?.roles?.deleteContent ||
    $version?.data?.getVersion.mod?.authors?.findIndex((author) => author.user_id == $user?.id) >= 0;

  const deleteDialogOpen = writable<boolean>(false);

  const deleteVersionFn = () => {
    client
      .mutation(DeleteVersionDocument, { versionId })
      .toPromise()
      .then((value) => {
        if (value.error) {
          console.error(value.error.message);
          errorMessage = 'Error deleting version: ' + value.error.message;
          errorToast = true;
        } else {
          // TODO Toast or something
          goto(base + '/mod/' + modId);
        }
      });
  };
</script>

<svelte:head>
  {#if !$version.fetching && !$version.error && $version.data.getVersion}
    <MetaDescriptors
      description="Information for mod version {$version.data.getVersion.mod.name} {$version.data.getVersion.version}"
      title="Mod version {$version.data.getVersion.mod.name} {$version.data.getVersion.version}" />
  {/if}
</svelte:head>

{#if $version.fetching}
  <p>Loading...</p>
{:else if $version.error}
  <p>Oh no... {$version.error.message}</p>
{:else if $version.data.getVersion}
  <div class="grid gap-6 xlx:grid-flow-row">
    <div class="flex flex-wrap h-auto justify-between items-center">
      <h1 class="text-4xl font-bold">
        {$version.data.getVersion.mod.name}
        Version {$version.data.getVersion.version}
      </h1>

      <div class="grid grid-flow-col gap-4">
        {#if canUserEdit}
          <Button variant="outlined" on:click={() => goto(base + '/mod/' + modId + '/version/' + versionId + '/edit')}>
            Edit
          </Button>
          <Button variant="outlined" on:click={() => deleteDialogOpen.set(true)}>Delete</Button>
        {/if}
        {#if $version.data.getVersion.targets.length != 0}
          <Button variant="outlined" on:click={() => menu.setOpen(true)}>
            <Label>Download</Label>
            <Icon class="material-icons" style="margin: 0;">arrow_drop_down</Icon>
          </Button>
          <Menu bind:this={menu} anchorCorner="BOTTOM_LEFT">
            <List>
              {#each $version.data.getVersion.targets as target}
                <Item>
                  <Button
                    variant="outlined"
                    class="w-full"
                    href={API_REST + '/mod/' + modId + '/versions/' + versionId + '/' + target.targetName + '/download'}
                    >Download {prettyTarget(target.targetName)}</Button>
                </Item>
              {/each}
            </List>
          </Menu>
        {:else}
          <Button variant="outlined" href={base + '/mod/' + modId + '/version/' + versionId}>View</Button>
          <Button variant="outlined" href={API_REST + '/mod/' + modId + '/versions/' + versionId + '/download'}
            >Download</Button>
        {/if}
        <Button variant="outlined" on:click={() => installMod($version.data.getVersion.mod.mod_reference)}>
          <Label>Install</Label>
          <Icon class="material-icons">download</Icon>
        </Button>

        <Button variant="outlined" href={base + '/mod/' + modId}>
          <Label>Mod</Label>
          <Icon class="material-icons">extension</Icon>
        </Button>
      </div>
    </div>
    <div class="grid grid-auto-max auto-cols-fr gap-4">
      <VersionDescription changelog={$version.data.getVersion.changelog} />
      <div class="grid grid-cols-1 auto-rows-min gap-8">
        <VersionInfo version={$version.data.getVersion} />
        <VersionTargetSupportGrid targets={$version.data.getVersion.targets} />
        <VersionDependenciesGrid dependencies={$version.data.getVersion.dependencies} />
      </div>
    </div>
  </div>

  {#if canUserEdit}
    <Dialog bind:open={$deleteDialogOpen}>
      <Title id="simple-title">Delete Version?</Title>
      <DialogContent>
        <div class="grid grid-flow-row gap-4">
          <span>Are you sure you wish to delete this version</span>

          <Button variant="outlined" on:click={() => deleteDialogOpen.set(false)}>Cancel</Button>
          <Button variant="outlined" on:click={() => deleteVersionFn()}>Delete</Button>
        </div>
      </DialogContent>
    </Dialog>
  {/if}

  <Toast bind:running={errorToast}>
    <span>{errorMessage}</span>
  </Toast>
{:else}
  <!-- TODO Better 404 -->
  404
{/if}