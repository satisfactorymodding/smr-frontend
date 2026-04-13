<script lang="ts">
  import { GetModDocument, GetModVersionsDocument, type ModpackModEntry } from '$lib/generated';
  import { getTranslate } from '@tolgee/svelte';
  import { getContextClient, queryStore } from '@urql/svelte';
  import { derived } from 'svelte/store';

  export let modsInput: ModpackModEntry[];
  const client = getContextClient();

  $: modsQueries = modsInput.map((m) =>
    queryStore({
      query: GetModDocument,
      client,
      variables: { mod: m.mod_id },
      requestPolicy: 'network-only'
    })
  );

  $: versionQueries = modsInput.map((m) =>
    queryStore({
      query: GetModVersionsDocument,
      client,
      variables: { mod: m.mod_id, limit: 100, offset: 0 },
      requestPolicy: 'network-only'
    })
  );

  $: versionStores = derived(versionQueries, (queries) => queries.map((q) => q.data?.getMod.versions || []));

  $: versions = $versionStores;

  $: modStores = derived(modsQueries, (queries) => queries.map((q) => q.data?.mod));

  $: mods = $modStores;

  function getVersion(index, versionConstraint): string {
    return versions[index].find((v) => v.version === versionConstraint)?.id || '';
  }

  const { t } = getTranslate();
</script>

<div class="card h-fit">
  <div class="table-container">
    <table class="table table-hover max-w-full">
      <thead>
        <tr>
          <th>{$t('mod')}</th>
          <th>{$t('version')}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {#each mods as mod, index}
          <tr>
            <td>{mod?.name || modsInput[index].mod_id}</td>
            <td>{modsInput[index].version_constraint || $t('unknown')}</td>
            <td class="text-right">
              {#if mod}
                <a class="variant-ghost-primary btn btn-sm" href={'/mod/' + modsInput[index].mod_id}>
                  <span class="material-icons pr-2">extension</span>
                  {$t('view-mod')}</a>
              {:else}
                {$t('unknown')}
              {/if}
              {#if mod}
                <a
                  class="variant-ghost-primary btn btn-sm ms-2"
                  href={'/mod/' +
                    modsInput[index].mod_id +
                    '/version/' +
                    getVersion(index, modsInput[index].version_constraint)}>
                  <span class="material-icons pr-2">file_open</span>
                  {$t('view-version')}</a>
              {:else}
                {$t('unknown')}
              {/if}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
