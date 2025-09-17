<script lang="ts">
  import { base } from '$app/paths';
  import type { VersionDependency } from '$lib/generated';

  interface Props {
    dependency: Pick<VersionDependency, 'mod_id' | 'optional' | 'condition'>;
  }

  let { dependency }: Props = $props();
</script>

<tr class="rounded border !border-surface-500">
  <td>
    <a title="Click to view mod page" href={`${base}/mod/${dependency.mod_id}`} class="text-yellow-500">
      <u>{dependency.mod_id}</u>
    </a>
  </td>
  <td><div class="text-center">{dependency.condition}</div></td>
</tr>
