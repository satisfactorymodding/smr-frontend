<script lang="ts">
  import type { Tool } from '$lib/models/tools';
  import FicsitCard from '$lib/components/general/FicsitCard.svelte';

  interface Props {
    tool: Tool;
  }

  let { tool }: Props = $props();
</script>

<FicsitCard name={tool.name} link={tool.link} logo={tool.logo} description={tool.description}>
  {#snippet stats()}
    <div>
      <span>{tool.author}</span>
    </div>
  {/snippet}
</FicsitCard>
