<script lang="ts">
  import { API_GRAPHQL, API_GRAPHQL_PLAYGROUND, API_REST, API_REST_DOCS } from '$lib/core';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import Card, { Content } from '@smui/card';
</script>

<svelte:head>
  <MetaDescriptors description="API documentation for the Satisfactory Mod Repository" title="API Docs" />
</svelte:head>

<h1>API Docs</h1>
<Card>
  <Content>
    <div>
      <h2>GraphQL API</h2>
      <p>
        The GraphQL API is available at the endpoint <code>{API_GRAPHQL}</code> with a playground available at
        <code>{API_GRAPHQL_PLAYGROUND}</code>
      </p>
    </div>
    <div>
      <h2>REST API</h2>
      <p>
        The GraphQL API is available at the endpoint <code>{API_REST}</code> with docs available at
        <code>{API_REST_DOCS}</code>
      </p>
      <p>It is recommended that you use the GraphQL API as the REST API is not feature complete by design.</p>
    </div>
  </Content>
</Card>

<style lang="postcss">
  p {
    @apply text-base my-5;
  }

  h1 {
    @apply text-4xl my-4 font-bold;
  }

  h2 {
    @apply text-3xl my-4 font-bold;
  }
</style>
