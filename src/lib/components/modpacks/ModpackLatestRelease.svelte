<script lang="ts">
  import { base } from '$app/paths';
  import { prettyDate } from '$lib/utils/formatting';
  import { getTranslate } from '@tolgee/svelte';
  import { installModpack } from '$lib/stores/launcher';
  import { T } from '@tolgee/svelte';
  import ReleaseTargetSupportGrid from '../releases/ReleaseTargetSupportGrid.svelte';

  const stabilities = {
    release: 'new_releases'
  };

  export let modpackId!: string;
  export let release:
    | {
        id: string;
        version: string;
        created_at: string;
        targets: { id: string; release_id: string; target_name: string }[];
      }
    | undefined = undefined;

  export const { t } = getTranslate();
</script>

<div class="card p-4">
  <section>
    <div class="grid grid-flow-row gap-y-2">
      <h3 class="my-4 text-2xl font-bold"><T keyName="mod.latest-versions" defaultValue="Latest Versions" /></h3>

      {#if !release}
        <p>{$t('mod.no-versions', { defaultValue: 'No releases yet' })}</p>
      {:else}
        {#each Object.keys(stabilities) as stability}
          <div class="version">
            <div class="h-14 w-14 p-2.5 text-4xl" title={`Latest ${stability} release`}>
              <span class="material-icons">{stabilities[stability]}</span>
            </div>
            <div class="grid grid-flow-row">
              <a
                class="text-yellow-500 underline"
                href="{base}/modpack/{modpackId}/release/{release.id}/"
                title={$t('version.version-number.tooltip', 'Click to view patch notes for this release')}>
                <T
                  keyName="version.version-number"
                  defaultValue={'Release {versionNumber}'}
                  params={{ versionNumber: release.version }} />
              </a>
              <div>{prettyDate(release.created_at)}</div>
            </div>
            <div class="text-1xl col-span-3 h-auto w-auto p-2.5">
              <a
                href="#top"
                on:click={() => installModpack(modpackId, release?.version || '')}
                title={$t('version.install.tooltip', 'Install via Satisfactory Mod Manager')}
                class="text-yellow-500">
                <span class="material-icons align-middle" style="font-size: 118x;">download</span>
                <u><T keyName="version.install" defaultValue="Install" /></u>
              </a>
            </div>
          </div>
          <ReleaseTargetSupportGrid targets={release.targets} />
        {/each}
      {/if}
    </div>
  </section>
</div>

<style lang="postcss">
  .version {
    @apply grid grid-flow-col gap-x-4 text-lg;
    grid-template-columns: max-content auto max-content;
  }
</style>
