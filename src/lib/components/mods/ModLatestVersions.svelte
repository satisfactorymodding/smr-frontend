<script lang="ts">
  import { base } from '$app/paths';
  import { prettyDate } from '$lib/utils/formatting';
  import { getTranslate } from '@tolgee/svelte';
  import { installMod } from '$lib/stores/launcher';
  import VersionTargetSupportGrid from '$lib/components/versions/VersionTargetSupportGrid.svelte';
  import VersionDependenciesGrid from '$lib/components/versions/VersionDependenciesGrid.svelte';
  import type { Version, VersionDependency, VersionTarget } from '$lib/generated';
  import { T } from '@tolgee/svelte';

  type IVersion = Pick<Version, 'id' | 'link' | 'version' | 'created_at'> & {
    targets?: Pick<VersionTarget, 'targetName' | 'size' | 'hash'>[];
  } & { dependencies?: Pick<VersionDependency, 'mod_id' | 'optional' | 'condition'>[] };

  type ILatestVersions = {
    alpha?: IVersion;
    beta?: IVersion;
    release?: IVersion;
  };

  const stabilities = {
    release: 'new_releases'
  };

  export let latestVersions!: ILatestVersions;
  export let modId!: string;
  export let modReference!: string;

  export const { t } = getTranslate();
</script>

<div class="card p-4">
  <section>
    <div class="grid grid-flow-row gap-y-2">
      <h3 class="my-4 text-2xl font-bold"><T keyName="mod.latest-versions" defaultValue="Latest Versions" /></h3>

      {#if !latestVersions.release && !latestVersions.alpha && !latestVersions.beta}
        <div class="text-lg">
          <T keyName="mod.no-versions" defaultValue="No versions of this mod exist." />
        </div>
      {/if}

      {#each Object.keys(stabilities) as stability}
        {#if latestVersions[stability]}
          <div class="version">
            <div class="h-14 w-14 p-2.5 text-4xl" title={`Latest ${stability} release`}>
              <span class="material-icons">{stabilities[stability]}</span>
            </div>
            <div class="grid grid-flow-row">
              <a
                href="{base}/mod/{modId}/version/{latestVersions[stability].id}/"
                class="text-yellow-500 underline"
                title={$t('version.version-number.tooltip', 'Click to view patch notes for this version')}>
                <T
                  keyName="version.version-number"
                  defaultValue={'Version {versionNumber}'}
                  params={{ versionNumber: latestVersions[stability].version }} /></a>
              <div>{prettyDate(latestVersions[stability].created_at)}</div>
            </div>
            <div class="text-1xl col-span-3 h-auto w-auto p-2.5">
              <a
                href="#top"
                on:click={() => installMod(modReference)}
                title={$t('version.install.tooltip', 'Install via Satisfactory Mod Manager')}
                class="text-yellow-500">
                <span class="material-icons align-middle" style="font-size: 118x;">download</span>
                <u><T keyName="version.install" defaultValue="Install" /></u>
              </a>
            </div>
          </div>
          <VersionTargetSupportGrid targets={latestVersions[stability].targets} />
          <VersionDependenciesGrid dependencies={latestVersions[stability].dependencies} />
        {/if}
      {/each}
    </div>
  </section>
</div>

<style lang="postcss">
  .version {
    @apply grid grid-flow-col gap-x-4 text-lg;
    grid-template-columns: max-content auto max-content;
  }
</style>
