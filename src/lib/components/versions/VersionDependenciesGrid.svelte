<script lang="ts">
  import type { IVersion } from '$lib/models/versions';
  import DataTable, { Body, Row, Cell } from '@smui/data-table';

  export let version!: IVersion;
  console.log(version);
</script>

<div class="grid grid-flow-row">
  <DataTable
    table$aria-label="Mod Dependency"
    class="max-w-auto"
    container$class="!overflow-visible"
    table$class="!overflow-visible">
    <Body>
      <Row>
        <Cell>Mod Dependency</Cell>
        <Cell><div class="text-center">Version Range</div></Cell>
      </Row>
      {#if version?.dependencies?.length === 0}
        <Row>
          <Cell><div class="text-center">None</div></Cell>
          <Cell><div class="text-center">N/A</div></Cell>
        </Row>
      {:else}
        TODO implement getVersion returns dependencies
        <!-- {#each version?.dependencies as dependency}
          <Row>
            <Cell>
              <a
                title="Click to view mod page"
                href={dependency.mod_id === 'SML' ? `${base}/sml-versions` : `${base}/mod/${dependency.mod_id}`}
                class="text-yellow-500"><u>{dependency.mod_id}</u></a>
            </Cell>
            <Cell><div class="text-center">{dependency.condition}</div></Cell>
          </Row>
        {/each} -->
      {/if}
    </Body>
  </DataTable>
</div>
