<script lang="ts">
  import type { Tool } from '$lib/models/tools';
  import FicsitCard from '$lib/components/general/FicsitCard.svelte';

  export let tool: Tool;
</script>

<FicsitCard name={tool.name} link={tool.link} logo={tool.logo} description={tool.description}>
  <div slot="stats">
    <span>{tool.author}</span>
  </div>
</FicsitCard>
