<script lang="ts">
  import type { User, UserMod } from '$lib/generated';
  import { assets, base } from '$app/paths';
  import Card, { Content } from '@smui/card';
  import { getTranslate } from "@tolgee/svelte";

  export let authors: Array<
    Pick<UserMod, 'role'> & {
      user?: Pick<User, 'id' | 'username' | 'avatar'>;
    }
  >;

  export const { t } = getTranslate();
</script>

<Card>
  <Content>
    <div class="grid grid-flow-row gap-y-2">
      <h3 class="text-2xl my-4 font-bold">{ $t('authors') }</h3>

      <div class="grid auto-rows-min text-lg gap-y-4">
        {#each authors as author}
          <div class="grid grid-flow-col auto-cols-max gap-x-4">
            <div
              class="rounded-full bg-cover w-14 h-14"
              style={`background-image: url("${author.user.avatar || assets + '/images/no_image.webp'}")`} />
            <div class="grid grid-flow-row">
              <a href="{base}/user/{author.user.id}/" class="text-yellow-500 underline">{author.user.username}</a>
              <div>{ $t(`role.${author.role.toLowerCase()}`) }</div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </Content>
</Card>
