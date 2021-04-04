<svelte:head>
  <title>SMR</title>
</svelte:head>

<script lang="ts">
  import './_global.postcss';
  import {initializeGraphQLClient} from "../core";

  initializeGraphQLClient();
</script>

<main>
  <slot/>
</main>
