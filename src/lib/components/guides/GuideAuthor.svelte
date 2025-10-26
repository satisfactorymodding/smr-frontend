<script lang="ts">
  import type { User } from '$lib/generated';
  import { base } from '$app/paths';
  import { getTranslate } from '@tolgee/svelte';

  interface Props {
    author: Pick<User, 'id' | 'username' | 'avatar'>;
  }

  let { author }: Props = $props();

  export const { t } = getTranslate();
</script>

<div class="card preset-filled-surface-100-900 p-4">
  <section>
    <div class="grid grid-flow-row gap-y-2">
      <h3 class="my-4 text-2xl font-bold">{$t('author')}</h3>

      <div class="grid auto-rows-min gap-y-4 text-lg">
        <div class="grid auto-cols-min grid-flow-col gap-x-4">
          <div class="h-14 w-14 rounded-full bg-cover" style={`background-image: url("${author.avatar}")`}></div>
          <div class="grid grid-flow-row">
            <a href="{base}/user/{author.id}/" class="text-yellow-500 underline">{author.username}</a>
            <div>{$t('role.writer')}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
