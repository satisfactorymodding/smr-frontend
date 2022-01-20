<script lang="ts" context="module">
  import type { LoadInput } from '@sveltejs/kit/types/page';

  export async function load(input: LoadInput) {
    return {
      status: 302,
      redirect: '/mod/' + input.params.modId + '/version/' + input.params.versionId
    };
  }
</script>
