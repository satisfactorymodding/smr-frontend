<script lang="ts">
  import DependencyRow from './DependencyRow.svelte';

  import type { VersionDependency } from '$lib/generated';

  interface Props {
    dependencies: Pick<VersionDependency, 'mod_id' | 'optional' | 'condition'>[];
  }

  let { dependencies }: Props = $props();

  let requiredDependencies = $derived(dependencies.filter((d) => !d.optional));
  let optionalDependencies = $derived(dependencies.filter((d) => d.optional));
</script>

<div class="grid grid-flow-row">
  <table aria-label="Required Mod Dependencies" class="max-w-auto table !overflow-visible">
    <tbody>
      <tr class="!border-surface-500 rounded border">
        <td
          class="underline decoration-dotted"
          title="Other mods that must be installed for this mod to function. The Mod Manager will automatically install these for you."
          >Required Dependencies</td>
        <td><div class="text-center">Version Range</div></td>
      </tr>
      {#if requiredDependencies?.length === 0}
        <!-- A mod *not* having required dependencies is rare, so point it out when this is the case -->
        <tr class="!border-surface-500 rounded border">
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

<!-- Optional dependencies are uncommon as of now, so don't spend UI space on them unless there are any -->
{#if optionalDependencies?.length !== 0}
  <div class="grid grid-flow-row">
    <table aria-label="Optional Mod Dependencies" class="max-w-auto table !overflow-visible">
      <tbody>
        <tr class="!border-surface-500 rounded border">
          <td
            class="underline decoration-dotted"
            title="Other mods that don't need to be installed for this mod to function, but may unlock additional functionality when present. You must chose to install them in the Mod Manager if you wish to use them."
            >Optional Dependencies</td>
          <td><div class="text-center">Version Range</div></td>
        </tr>
        {#each optionalDependencies as dependency}
          <DependencyRow {dependency} />
        {/each}
      </tbody>
    </table>
  </div>
{/if}
