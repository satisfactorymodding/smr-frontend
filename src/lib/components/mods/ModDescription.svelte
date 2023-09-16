<script lang="ts">
  import type { Mod } from '$lib/generated';
  import { markdown } from '$lib/utils/markdown';

  export let mod!: Pick<Mod, 'full_description' | 'short_description'>;

  $: description = mod.full_description ? markdown(mod.full_description) : mod.short_description;
</script>

<div class="h-fit card p-4">
  <section>
    <div class="markdown-content break-words">
      {#await description then descriptionRendered}
        <!-- eslint-disable -->
        <p>{@html descriptionRendered}</p>
      {/await}
    </div>
  </section>
</div>
