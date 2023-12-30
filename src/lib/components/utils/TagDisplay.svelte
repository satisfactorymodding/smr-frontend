<script lang="ts">
  import { type Tag } from '$lib/generated';
  export let tag: Tag;
</script>

<div class="lowercase text-neutral-300" title="TODO Tag description on hover">
  <span class="text-orange-500">#</span>{tag.name}
</div>
