<script context="module">
  export async function load(input) {
    return {
      status: 302,
      redirect: '/mod/' + input.params.modId + '/version/' + input.params.versionId
    };
  }
</script>
