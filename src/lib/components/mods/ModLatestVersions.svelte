<script lang="ts">
  import { base } from '$app/paths';
  import { prettyDate } from '$lib/utils/formatting';
  import { getTranslate } from '@tolgee/svelte';
  import { installMod } from '$lib/stores/launcher';
  import VersionTargetSupportGrid from '$lib/components/versions/VersionTargetSupportGrid.svelte';
  import VersionDependenciesGrid from '$lib/components/versions/VersionDependenciesGrid.svelte';
  import type { Version, VersionDependency, VersionTarget } from '$lib/generated';

  type IVersion = Pick<Version, 'id' | 'link' | 'version' | 'created_at'> & {
    targets?: Pick<VersionTarget, 'targetName' | 'size' | 'hash'>[];
  } & { dependencies?: Pick<VersionDependency, 'mod_id' | 'condition'>[] };

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

  export const { t } = getTranslate();
</script>

<div class="card p-4">
  <section>
    <div class="grid grid-flow-row gap-y-2">
      <h3 class="text-2xl my-4 font-bold">{$t('mod.latest-versions')}</h3>

      {#each Object.keys(stabilities) as stability}
        {#if latestVersions[stability]}
          <div class="version">
            <div class="text-4xl w-14 h-14 p-2.5" title={`Latest ${stability} release`}>
              <span class="material-icons">{stabilities[stability]}</span>
            </div>
            <div class="grid grid-flow-row">
              <a
                href="{base}/mod/{modId}/version/{latestVersions[stability].id}/"
                class="text-yellow-500 underline"
                title="Click to view patch notes for this version"
                >Version {latestVersions[stability].version} ({stability})</a>
              <div>{prettyDate(latestVersions[stability].created_at)}</div>
            </div>
            <div class="text-1xl col-span-3 w-auto h-auto p-2.5">
              <a
                href="#top"
                on:click={() => installMod(modId)}
                title="Install via Satisfactory Mod Manager"
                class="text-yellow-500">
                <span class="material-icons align-middle" style="font-size: 118x;">download</span> <u>Install</u>
              </a>
            </div>
          </div>
          {#if latestVersions[stability].targets.length > 1}
            <VersionTargetSupportGrid targets={latestVersions[stability].targets} />
          {/if}
          <VersionDependenciesGrid dependencies={latestVersions[stability].dependencies} />
        {/if}
      {/each}
    </div>
  </section>
</div>

<style lang="postcss">
  .version {
    @apply grid grid-flow-col text-lg gap-x-4;
    grid-template-columns: max-content auto max-content;
  }
</style>
