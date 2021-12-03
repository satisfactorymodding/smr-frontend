<script lang="ts">
  import type { User, UserMod } from '$lib/generated';
  import { assets, base } from '$app/paths';

  export let authors: Array<
    Pick<UserMod, 'role'> & {
      user: Pick<User, 'id' | 'username' | 'avatar'>;
    }
  >;
</script>

<div class="grid grid-flow-row gap-y-6">
  <h3 class="text-2xl my-4 font-bold">Authors</h3>

  <div class="grid auto-rows-min text-lg gap-y-4">
    {#each authors as author}
      <div class="grid grid-flow-col auto-cols-max gap-x-4">
        <div
          class="rounded-full bg-cover w-14 h-14"
          style={`background-image: url("${author.user.avatar || assets + '/images/no_image.png'}")`}
        />
        <div class="grid grid-flow-row">
          <a href="{base}/user/{author.user.id}/" class="text-yellow-500 underline">{author.user.username}</a>
          <div>{author.role.charAt(0).toUpperCase() + author.role.slice(1).toLowerCase()}</div>
        </div>
      </div>
    {/each}
  </div>
</div>
