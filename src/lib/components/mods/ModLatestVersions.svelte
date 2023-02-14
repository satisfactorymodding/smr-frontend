<script lang="ts">
  import type { Version } from '$lib/generated';
  import { API_REST } from '$lib/core';
  import { base } from '$app/paths';
  import Card, { Content } from '@smui/card';
  import { Icon } from '@smui/common';
  import { prettyArch, prettyBytes, prettyDate } from '$lib/utils/formatting';

  type ILatestVersions = {
    alpha?: Pick<Version, 'id' | 'link' | 'version' | 'created_at' | 'arch'>;
    beta?: Pick<Version, 'id' | 'link' | 'version' | 'created_at' | 'arch'>;
    release?: Pick<Version, 'id' | 'link' | 'version' | 'created_at' | 'arch'>;
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
            <div class="text-4xl w-14 h-14 p-2.5">
              <Icon class="material-icons">{stabilities[stability]}</Icon>
            </div>
            <div class="grid grid-flow-row">
              <a href="{base}/mod/{modId}/version/{latestVersions[stability].id}/" class="text-yellow-500 underline"
                >Version {latestVersions[stability].version}</a>
              <div>{prettyDate(latestVersions[stability].created_at)}</div>
              {#if latestVersions[stability].arch.length != 0}
                <div class="text-2xl text-lg break-words">
                  {#each latestVersions[stability].arch as arch, _}
                    <div>
                      <a
                        href={API_REST +
                          '/mod/' +
                          modId +
                          '/versions/' +
                          latestVersions[stability].id +
                          '/platform/' +
                          arch.platform +
                          '/download'}
                        class="text-yellow-500 underline"
                        ><Icon class="material-icons" style="height:5px;">download</Icon></a>
                      {prettyArch(arch.platform)} - {prettyBytes(arch.size)}
                    </div>
                  {/each}
                </div>
              {:else}
                <a
                  href={API_REST + '/mod/' + modId + '/versions/' + latestVersions[stability].id + '/download'}
                  class="text-yellow-500 underline">
                  <Icon class="material-icons">download</Icon>
                </a>
              {/if}
            </div>
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
