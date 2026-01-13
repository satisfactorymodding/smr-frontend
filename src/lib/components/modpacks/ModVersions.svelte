<script lang="ts">
  import { GetModVersionsDocument } from '$lib/generated';
  import { queryStore, getContextClient } from '@urql/svelte';
  import { API_REST } from '$lib/core';
  import { markdown } from '$lib/utils/markdown';
  import { base } from '$app/paths';
  import { installMod } from '$lib/stores/launcher';
  import { prettyDate, prettyNumber, prettyBytes, prettyTarget } from '$lib/utils/formatting';
  import { getTranslate } from '@tolgee/svelte';
  import { popup } from '@skeletonlabs/skeleton';

  export let modId!: string;

  export const { t } = getTranslate();

  const client = getContextClient();

  let expandedVersions = new Set<string>();

  // TODO Pagination
  const versions = queryStore({
    query: GetModVersionsDocument,
    client,
    variables: {
      mod: modId,
      limit: 100,
      offset: 0
    }
  });

  const toggleRow = (versionId: string) => {
    if (expandedVersions.has(versionId)) {
      expandedVersions.delete(versionId);
    } else {
      expandedVersions.add(versionId);
    }
    expandedVersions = expandedVersions;
  };
</script>

<div class="card h-fit">
  {#if $versions.fetching}
    <section class="p-4">{$t('loading')}...</section>
  {:else if $versions.error}
    <section class="p-4">{$t('error.oh-no')} {$versions.error.message}</section>
  {:else}
    <div class="table-container">
      <table class="table table-hover max-w-full">
        <thead>
          <tr>
            <th>{$t('version')}</th>
            <th>{$t('game-versions')}</th>
            <th>{$t('downloads')}</th>
            <th>{$t('upload-date')}</th>
            <th><!-- Buttons --></th>
          </tr>
        </thead>
        <tbody>
          {#each $versions.data.getMod.versions as version}
            <tr on:click={() => toggleRow(version.id)}>
              <td>{version.version}</td>
              <td>{version.game_version}</td>
              <td>{prettyNumber(version.downloads)}</td>
              <td>{prettyDate(version.created_at)}</td>
              <td class="!overflow-visible !p-2">
                <div
                  role="none"
                  class="grid grid-flow-col gap-4"
                  on:click|stopPropagation={() => {
                    /*block table row expansion*/
                  }}
                  on:keypress|stopPropagation={() => {
                    /*a11y-click-events-have-key-events*/
                  }}>
                  <a class="variant-ghost-primary btn btn-sm" href={base + '/mod/' + modId + '/version/' + version.id}
                    >{$t('view')}</a>
                  {#if version.targets.length !== 0}
                    <button
                      class="variant-ghost-primary btn btn-sm"
                      style="padding: 0; min-width: 36px;"
                      use:popup={{
                        event: 'focus-click',
                        target: 'versionArchDropdown_' + version.version,
                        placement: 'bottom',
                        closeQuery: 'a'
                      }}>
                      <span>{$t('download')}...</span>
                      <span class="material-icons" style="margin: 0;">arrow_drop_down</span>
                    </button>

                    <div class="card w-72 shadow-xl" data-popup="versionArchDropdown_{version.version}">
                      <nav class="list-nav">
                        <ul>
                          <li>
                            <a href={API_REST + '/mod/' + modId + '/versions/' + version.id + '/download'}>
                              <span class="material-icons">polyline</span>
                              <span>{$t('version.download-multi-target')}</span>
                            </a>
                          </li>
                          {#each version.targets as target, _}
                            <li>
                              <a
                                class="w-full"
                                href={API_REST +
                                  '/mod/' +
                                  modId +
                                  '/versions/' +
                                  version.id +
                                  '/' +
                                  target.targetName +
                                  '/download'}>
                                <span>{$t('download')} {prettyTarget(target.targetName)}</span>
                              </a>
                            </li>
                          {/each}
                        </ul>
                      </nav>
                    </div>
                  {:else}
                    <a
                      class="variant-ghost-primary btn btn-sm"
                      href={API_REST + '/mod/' + modId + '/versions/' + version.id + '/download'}>
                      {$t('download')}
                    </a>
                  {/if}

                  <button
                    class="variant-ghost-primary btn btn-sm"
                    title="Install via Satisfactory Mod Manager"
                    on:click={() => installMod($versions.data.getMod.mod_reference)}>
                    <span class="material-icons">download</span>
                    <span>{$t('install')}</span>
                  </button>
                </div>
              </td>
            </tr>

            {#if expandedVersions.has(version.id)}
              <tr>
                <td colspan={6}>
                  <div class="col-span-3 p-2">{$t('size')}: {prettyBytes(version.size)}</div>
                  <div class="col-span-3 p-2">{$t('hash')}: {version.hash}</div>

                  <div class="markdown-content col-span-6 p-2">
                    {#await markdown(version.changelog) then changelogRendered}
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
  {/if}
</div>
