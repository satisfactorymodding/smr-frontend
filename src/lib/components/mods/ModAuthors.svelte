<script lang="ts">
  import type { User, UserMod } from '$lib/generated';
  import { assets, base } from '$app/paths';
  import { getTranslate } from '@tolgee/svelte';

  interface Props {
    authors: Array<
      Pick<UserMod, 'role'> & {
        user?: Pick<User, 'id' | 'username' | 'avatar'>;
      }
    >;
  }

  let { authors }: Props = $props();

  export const { t } = getTranslate();
</script>

<div class="card preset-filled-surface-100-900 p-4">
  <section>
    <div class="grid grid-flow-row gap-y-2">
      <h3 class="my-4 text-2xl font-bold">{$t('authors')}</h3>

      <div class="grid auto-rows-min gap-y-4 text-lg">
        {#each authors as author (author.user.id)}
          <div class="grid auto-cols-max grid-flow-col gap-x-4">
            <div
              class="h-14 w-14 rounded-full bg-cover"
              style={`background-image: url("${author.user.avatar || assets + '/images/no_image.webp'}")`}>
            </div>
            <div class="grid grid-flow-row">
              <a href="{base}/user/{author.user.id}/" class="text-yellow-500 underline">{author.user.username}</a>
              <div>{$t(`role.${author.role.toLowerCase()}`)}</div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
</div>
