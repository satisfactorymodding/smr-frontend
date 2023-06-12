<script lang="ts">
  import type { Version, VersionTarget } from '$lib/generated';
  import { base } from '$app/paths';
  import Card, { Content } from '@smui/card';
  import { Icon } from '@smui/common';
  import 'iconify-icon'
  import { prettyDate } from '$lib/utils/formatting';
  import { installMod } from '$lib/stores/launcher';
  import DataTable, { Body, Row, Cell } from '@smui/data-table';

  type IVersion = Pick<Version, 'id' | 'link' | 'version' | 'created_at'> & {
    targets?: Pick<VersionTarget, 'targetName' | 'size' | 'hash'>[];
  };

  type ILatestVersions = {
    alpha?: IVersion;
    beta?: IVersion;
    release?: IVersion;
  };
 
  function checkTarget(targets, selectedTarget: string) {
    let found = false
    if (targets.length != 0){ //support for pre-dedi
      targets.forEach((target) => {
        if (target.targetName === selectedTarget) { 
          found = true
        };
      });
    } else {
      if ((selectedTarget === 'WindowsNoEditor') || (selectedTarget === 'Windows')) {
        found = true
      };
    };
    if (!found) {
      return 'cancel'
    };
    return 'checkmark' 
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
          <script>
            let targetCheck = latestVersions[stability].targets
          </script>          

          <div class="version">
            <div class="text-4xl w-14 h-14 p-2.5" title={`Latest ${stability} release`}>
              <Icon class="material-icons">{stabilities[stability]}</Icon>
            </div>
            <div class="grid grid-flow-row">
              <a href="{base}/mod/{modId}/version/{latestVersions[stability].id}/" class="text-yellow-500 underline"
                >Version {latestVersions[stability].version} ({stability})</a>
              <div>{prettyDate(latestVersions[stability].created_at)}</div>
            </div>
            <div class="text-3xl w-14 h-14 p-2.5">
              <a
                href="#top"
                on:click={() => installMod(modId)}
                title="Install via Satisfactory Mod Manager"
                class="text-yellow-500 underline">
                <Icon class="material-icons">download</Icon>
              </a>
            </div>
          </div>
          <div class="col-span-1">
            <DataTable table$aria-label="Available Releases" style="max-width: 100%; table-layout: fixed;">
              <Body>
                <Row>
                  <Cell class="center" style="width: 33%;"></Cell>
                  <Cell class="center" style="width: 33%;">Client</Cell>
                  <Cell class="center" style="width: 34%;">Server</Cell>
                </Row>
                <Row>
                  <Cell class="center" style="width: 33%;">Windows</Cell>
                  <Cell class="center" style="width: 33%;"><Icon class="material-icons">{checkTarget(latestVersions[stability].targets, 'WindowsNoEditor')}</Icon></Cell>
                  <Cell class="center" style="width: 34%;"><Icon class="material-icons">{checkTarget(latestVersions[stability].targets, 'WindowsServer')}</Icon></Cell>
                </Row>
                <Row>
                  <Cell class="center" style="width: 33%;">Linux</Cell>
                  <Cell class="center" style="width: 33%;">N/A</Cell>
                  <Cell class="center" style="width: 34%;"><Icon class="material-icons">{checkTarget(latestVersions[stability].targets, 'LinuxServer')}</Icon></Cell>
                </Row>
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
