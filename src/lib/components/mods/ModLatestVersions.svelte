<script lang="ts">
  import type { Version, VersionDependency, VersionTarget } from '$lib/generated';
  import { base } from '$app/paths';
  import Card, { Content } from '@smui/card';
  import { Icon } from '@smui/common';
  import 'iconify-icon';
  import { prettyDate } from '$lib/utils/formatting';
  import { installMod } from '$lib/stores/launcher';
  import DataTable, { Body, Row, Cell } from '@smui/data-table';

  type IVersion = Pick<Version, 'id' | 'link' | 'version' | 'created_at'> & {
    targets?: Pick<VersionTarget, 'targetName' | 'size' | 'hash'>[];
  } & { dependencies?: Pick<VersionDependency, 'mod_id' | 'condition'>[] };

  type ILatestVersions = {
    alpha?: IVersion;
    beta?: IVersion;
    release?: IVersion;
  };

  function checkTarget(targets: VersionTarget[], selectedTarget: string) {
    let found = false;

    const fromBeforeDedicatedServerSupport = targets.length == 0;
    if (fromBeforeDedicatedServerSupport) {
      found = ['WindowsNoEditor', 'Windows'].includes(selectedTarget);
    } else {
      found = targets.some((target) => target.targetName === selectedTarget);
    }

    return found ? 'checkmark' : 'cancel';
  }

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
            <div class="text-1xl w-auto h-auto p-2.5">
              <a
                href="#top"
                on:click={() => installMod(modId)}
                title="Install via Satisfactory Mod Manager"
                class="text-yellow-500">
                <Icon class="material-icons" style="font-size: 118x;">download</Icon> <u>Download</u>
              </a>
            </div>
          </div>
          <DataTable
            table$aria-label="Available Releases"
            class="max-w-auto align-self-center"
            container$class="!overflow-visible"
            table$class="!overflow-visible">
            <Body>
              <Row>
                <Cell style="width: 33%;" />
                <Cell style="width: 33%;">Client</Cell>
                <Cell style="width: 34%;">Server</Cell>
              </Row>
              <Row>
                <Cell>Windows</Cell>
                <Cell
                  ><Icon class="material-icons"
                    >{checkTarget(latestVersions[stability].targets, 'WindowsNoEditor')}</Icon
                  ></Cell>
                <Cell
                  ><Icon class="material-icons">{checkTarget(latestVersions[stability].targets, 'WindowsServer')}</Icon
                  ></Cell>
              </Row>
              <Row>
                <Cell>Linux</Cell>
                <Cell>N/A</Cell>
                <Cell
                  ><Icon class="material-icons">{checkTarget(latestVersions[stability].targets, 'LinuxServer')}</Icon
                  ></Cell>
              </Row>
            </Body>
          </DataTable>
          <DataTable
            table$aria-label="Mod Dependency"
            class="max-w-auto align-self-center"
            container$class="!overflow-visible"
            table$class="!overflow-visible">
            <Body>
              <Row>
                <Cell>Mod Dependency:</Cell>
                <Cell>Version Range</Cell>
              </Row>
              {#each latestVersions[stability].dependencies as dependency}
                <Row>
                  <Cell>
                    {#if dependency.mod_id === 'SML'}
                      <a href="{base}/sml-versions" class="text-yellow-500"><u>{dependency.mod_id}</u></a>
                    {:else}
                      <a href="{base}/mod/{dependency.mod_id}" class="text-yellow-500"><u>{dependency.mod_id}</u></a>
                    {/if}
                  </Cell>
                  <Cell>{dependency.condition}</Cell>
                </Row>
              {/each}
            </Body>
          </DataTable>
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
