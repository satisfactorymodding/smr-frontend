<script lang="ts" context="module">
  import type { LoadEvent } from '@sveltejs/kit';

  export async function load(input: LoadEvent) {
    return {
      status: 302,
      redirect: '/mod/' + input.params.modId + '/version/' + input.params.versionId
    };
  }
</script>
