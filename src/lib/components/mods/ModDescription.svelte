<script lang="ts">
  import type { Mod } from '$lib/generated';
  import { markdown } from '$lib/utils/markdown';
  import Card, { Content } from '@smui/card';

  export let mod!: Pick<Mod, 'full_description' | 'short_description'>;

  $: description = mod.full_description ? markdown(mod.full_description) : mod.short_description;
</script>

<Card>
  <Content>
    <div class="markdown-content break-words">
      {#await description then descriptionRendered}
        <p>{@html descriptionRendered}</p>
      {/await}
    </div>
  </Content>
</Card>
