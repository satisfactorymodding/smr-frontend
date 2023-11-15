<script lang="ts">
  import { base } from '$app/paths';
  import type { VersionDependency } from '$lib/generated';

  export let dependencies!: Pick<VersionDependency, 'mod_id' | 'condition'>[];
</script>

<div class="grid grid-flow-row">
  <table
    aria-label="Mod Dependency"
    class="table table-hover max-w-auto !overflow-visible">
    <tbody>
      <tr class="border rounded !border-surface-500">
        <td>Mod Dependency</td>
        <td><div class="text-center">Version Range</div></td>
      </tr>
      {#if dependencies?.length === 0}
        <tr class="border rounded !border-surface-500">
          <td><div class="text-center">None</div></td>
          <td><div class="text-center">N/A</div></td>
        </tr>
      {:else}
        {#each dependencies as dependency}
          <tr class="border rounded !border-surface-500">
            <td>
              <a
                title="Click to view mod page"
                href={dependency.mod_id === 'SML' ? `${base}/sml-versions` : `${base}/mod/${dependency.mod_id}`}
                class="text-yellow-500"><u>{dependency.mod_id}</u></a>
            </td>
            <td><div class="text-center">{dependency.condition}</div></td>
          </tr>
        {/each}
      {/if}
    </tbody>
  </table>
</div>
