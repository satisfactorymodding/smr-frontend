<script lang="ts">
  import type {User} from "$lib/generated";

  export let author: Pick<User, 'id' | 'username' | 'avatar'>;
</script>

<div class="grid grid-flow-row gap-y-6">
  <h3 class="text-2xl my-4 font-bold">Author</h3>

  <div class="grid auto-rows-min text-lg gap-y-4">
    <div class="grid grid-flow-col auto-cols-min gap-x-4">
      <div class="rounded-full bg-cover w-14 h-14" style={`background-image: url("${author.avatar}")`}></div>
      <div class="grid grid-flow-row">
        <a href="/user/{author.id}/" class="text-yellow-500 underline">{author.username}</a>
        <div>Writer</div>
      </div>
    </div>
  </div>
</div>
