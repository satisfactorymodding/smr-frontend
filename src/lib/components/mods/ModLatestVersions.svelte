<script lang="ts">
  import { base } from '$app/paths';
  import Card, { Content } from '@smui/card';
  import { Icon } from '@smui/common';
  import { prettyDate } from '$lib/utils/formatting';
  import { installMod } from '$lib/stores/launcher';
  import DataTable, { Body, Row, Cell } from '@smui/data-table';
  import VersionTargetSupportGrid from '../versions/VersionTargetSupportGrid.svelte';
  import type { IVersion } from '$lib/models/versions';

  type ILatestVersions = {
    alpha?: IVersion;
    beta?: IVersion;
    release?: IVersion;
  };

  const stabilities = {
    release: 'new_releases',
    beta: 'warning',
    alpha: 'report'
  };

  export let latestVersions!: ILatestVersions;
  export let modId!: string;
</script>

<Card>
  <Content>
    <div class="grid grid-flow-row gap-y-2">
      <h3 class="text-2xl my-4 font-bold">Latest Versions</h3>

      {#each Object.keys(stabilities) as stability}
        {#if latestVersions[stability]}
          <div class="version">
            <div class="text-4xl w-14 h-14 p-2.5" title={`Latest ${stability} release`}>
              <Icon class="material-icons">{stabilities[stability]}</Icon>
            </div>
            <div class="grid grid-flow-row">
              <a href="{base}/mod/{modId}/version/{latestVersions[stability].id}/" class="text-yellow-500 underline"
                >Version {latestVersions[stability].version} ({stability})</a>
              <div>{prettyDate(latestVersions[stability].created_at)}</div>
            </div>
            <div class="text-1xl col-span-3 w-auto h-auto p-2.5">
              <a
                href="#top"
                on:click={() => installMod(modId)}
                title="Install via Satisfactory Mod Manager"
                class="text-yellow-500">
                <Icon class="material-icons align-middle" style="font-size: 118x;">download</Icon> <u>Download</u>
              </a>
            </div>
          </div>
          <VersionTargetSupportGrid version={latestVersions[stability]} />
          <div class="grid grid-flow-row">
            <DataTable
              table$aria-label="Mod Dependency"
              class="max-w-auto"
              container$class="!overflow-visible"
              table$class="!overflow-visible">
              <Body>
                <Row>
                  <Cell>Mod Dependency</Cell>
                  <Cell><div class="text-center">Version Range</div></Cell>
                </Row>
                {#each latestVersions[stability].dependencies as dependency}
                  <Row>
                    <Cell>
                      <a
                        title="Click to view mod page"
                        href={dependency.mod_id === 'SML' ? `${base}/sml-versions` : `${base}/mod/${dependency.mod_id}`}
                        class="text-yellow-500"><u>{dependency.mod_id}</u></a>
                    </Cell>
                    <Cell><div class="text-center">{dependency.condition}</div></Cell>
                  </Row>
                {/each}
              </Body>
            </DataTable>
          </div>
        {/if}
      {/each}
    </div>
  </Content>
</Card>

<style lang="postcss">
  .version {
    @apply grid grid-flow-col text-lg gap-x-4;
    grid-template-columns: max-content auto max-content;
  }
</style>
