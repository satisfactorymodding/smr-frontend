<script lang="ts">
  import DependencyRow from './DependencyRow.svelte';

  import type { VersionDependency } from '$lib/generated';

  export let dependencies!: Pick<VersionDependency, 'mod_id' | 'optional' | 'condition'>[];

  const requiredDependencies: Pick<VersionDependency, 'mod_id' | 'optional' | 'condition'>[] = [];
  const optionalDependencies: Pick<VersionDependency, 'mod_id' | 'optional' | 'condition'>[] = [];
  dependencies.forEach((dependency) => {
    if (dependency.optional) {
      optionalDependencies.push(dependency);
    } else {
      requiredDependencies.push(dependency);
    }
  });
</script>

<div class="grid grid-flow-row">
  <table aria-label="Mod Dependencies" class="max-w-auto table table-hover !overflow-visible">
    <tbody>
      <tr class="rounded border !border-surface-500">
        <td
          class="underline decoration-dotted"
          title="Other mods that must be installed for this mod to function. The Mod Manager will automatically install these for you."
          >Required Dependencies</td>
        <td><div class="text-center">Version Range</div></td>
      </tr>
      {#if requiredDependencies?.length === 0}
        <tr class="rounded border !border-surface-500">
          <td><div class="text-center">None</div></td>
          <td><div class="text-center">N/A</div></td>
        </tr>
      {:else}
        {#each requiredDependencies as dependency}
          <DependencyRow {dependency} />
        {/each}
      {/if}
    </tbody>
  </table>
</div>

<div class="grid grid-flow-row">
  <table aria-label="Mod Dependencies" class="max-w-auto table table-hover !overflow-visible">
    <tbody>
      <tr class="rounded border !border-surface-500">
        <td
            class="underline decoration-dotted"
          title="Other mods that don't need to be installed for this mod to function, but may unlock additional functionality when present. You must chose to install them in the Mod Manager if you wish to use them."
          >Optional Dependencies</td>
        <td><div class="text-center">Version Range</div></td>
      </tr>
      {#if optionalDependencies?.length === 0}
        <tr class="rounded border !border-surface-500">
          <td><div class="text-center">None</div></td>
          <td><div class="text-center">N/A</div></td>
        </tr>
      {:else}
        {#each optionalDependencies as dependency}
          <DependencyRow {dependency} />
        {/each}
      {/if}
    </tbody>
  </table>
</div>
