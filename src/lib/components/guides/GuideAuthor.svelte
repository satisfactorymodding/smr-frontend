<script lang="ts">
  import type { User } from '$lib/generated';
  import { base } from '$app/paths';
  import Card, { Content } from '@smui/card';

  export let author: Pick<User, 'id' | 'username' | 'avatar'>;
</script>

<Card>
  <Content>
    <div class="grid grid-flow-row gap-y-2">
      <h3 class="text-2xl my-4 font-bold">Author</h3>

      <div class="grid auto-rows-min text-lg gap-y-4">
        <div class="grid grid-flow-col auto-cols-min gap-x-4">
          <div class="rounded-full bg-cover w-14 h-14" style={`background-image: url("${author.avatar}")`} />
          <div class="grid grid-flow-row">
            <a href="{base}/user/{author.id}/" class="text-yellow-500 underline">{author.username}</a>
            <div>Writer</div>
          </div>
        </div>
      </div>
    </div>
  </Content>
</Card>
