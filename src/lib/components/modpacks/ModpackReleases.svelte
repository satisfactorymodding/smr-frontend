<script lang="ts">
  import { markdown } from '$lib/utils/markdown';
  import { base } from '$app/paths';
  import { prettyDate } from '$lib/utils/formatting';
  import { getTranslate } from '@tolgee/svelte';
  import ReleaseTargetSupportGrid from '../releases/ReleaseTargetSupportGrid.svelte';
  import { page } from '$app/stores';

  export let releases: Array<{
    id: string;
    version: string;
    created_at: string;
    changelog: string;
    targets: Array<{ id: string; release_id: string; target_name: string }>;
  }>;

  export const { t } = getTranslate();

  $: modpackId = $page.params.modpackId;

  let expandedReleases = new Set<string>();

  const toggleRow = (releaseId: string) => {
    if (expandedReleases.has(releaseId)) {
      expandedReleases.delete(releaseId);
    } else {
      expandedReleases.add(releaseId);
    }
    expandedReleases = expandedReleases;
  };
</script>

<div class="card h-fit">
  <div class="table-container">
    <table class="table table-hover max-w-full">
      <thead>
        <tr>
          <th>{$t('version')}</th>
          <th>{$t('upload-date')}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {#each releases as release}
          <tr on:click={() => toggleRow(release.id)}>
            <td>{release.version}</td>
            <td>{prettyDate(release.created_at)}</td>
            <td class="!overflow-visible !p-2">
              <div
                role="none"
                class="grid grid-flow-col gap-4"
                on:click|stopPropagation={() => {}}
                on:keypress|stopPropagation={() => {}}>
                <a
                  class="variant-ghost-primary btn btn-sm"
                  href={base + '/modpack/' + modpackId + '/release/' + release.id}>{$t('view')}</a>
              </div>
            </td>
          </tr>

          {#if expandedReleases.has(release.id)}
            <tr>
              <td colspan={3}>
                {#if release.targets && release.targets.length > 0}
                  <div class="p-2">
                    <ReleaseTargetSupportGrid targets={release.targets} />
                  </div>
                {/if}

                <div class="markdown-content p-2">
                  {#await markdown(release.changelog) then changelogRendered}
                    <!-- eslint-disable -->
                    {@html changelogRendered}
                  {/await}
                </div>
              </td>
            </tr>
          {/if}
        {/each}
      </tbody>
    </table>
  </div>
</div>
