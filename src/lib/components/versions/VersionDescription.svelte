<script lang="ts">
  import { markdown } from '$lib/utils/markdown';

  export let changelog!: string;
</script>

<div class="h-fit card p-4">
  <section>
    <div class="markdown-content">
      {#await markdown(changelog) then changelogRendered}
        <p>{@html changelogRendered}</p>
      {/await}
    </div>
  </section>
</div>
