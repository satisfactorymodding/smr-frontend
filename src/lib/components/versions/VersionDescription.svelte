<script lang="ts">
  import { markdown } from '$lib/utils/markdown';
  import Card, { Content } from '@smui/card';

  export let changelog!: string;
</script>

<Card>
  <Content>
    <div class="markdown-content">
      {#await markdown(changelog) then changelogRendered}
        <p>{@html changelogRendered}</p>
      {/await}
    </div>
  </Content>
</Card>
