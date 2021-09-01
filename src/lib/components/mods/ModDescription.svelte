<script lang="ts">
  import type { Mod } from '$lib/generated';
  import { markdown } from '$lib/utils/markdown';

  export let mod!: Pick<Mod, 'full_description' | 'short_description'>;

  $: description = mod.full_description ? markdown(mod.full_description) : mod.short_description;
</script>

<div class="markdown-content">
  {#await description then descriptionRendered}
    <p>{@html descriptionRendered}</p>
  {/await}
</div>
