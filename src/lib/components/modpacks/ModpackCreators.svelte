<script lang="ts">
  // import type { User, UserMod } from '$lib/generated';
  // import { assets, base } from '$app/paths';
  import { getTranslate } from '@tolgee/svelte';
    import ModpackAuthor from './ModpackAuthor.svelte';

  export let creator: string;

  export let remix: string;



  export const { t } = getTranslate();
</script>

<div class="card p-4">
  <section>
    <div class="grid grid-flow-row gap-y-2">
      {#if remix}
            <h3 class="my-4 text-2xl font-bold">{$t('modpack.remixed.creators')}</h3>
      {:else}
            <h3 class="my-4 text-2xl font-bold">{$t('modpack.original.creators')}</h3>
      {/if}

      <div class="grid auto-rows-min gap-y-4 text-lg">
        {#if remix}
          <ModpackAuthor creator={creator} role={$t("modpack.remixed.remix-creator")}></ModpackAuthor>
          <ModpackAuthor creator={remix} role={$t("modpack.remixed.original-creator")}></ModpackAuthor>
        {:else}
          <ModpackAuthor creator={creator} role={$t("modpack.original.original-creator")}></ModpackAuthor>
        {/if}
        <!-- {#each creators as author}
          <div class="grid auto-cols-max grid-flow-col gap-x-4">
            <div
              class="h-14 w-14 rounded-full bg-cover"
              style={`background-image: url("${author.user.avatar || assets + '/images/no_image.webp'}")`} />
            <div class="grid grid-flow-row">
              <a href="{base}/user/{author.user.id}/" class="text-yellow-500 underline">{author.user.username}</a>
              <div>{$t(`role.${author.role.toLowerCase()}`)}</div>
            </div>
          </div>
        {/each} -->
      </div>
    </div>
  </section>
</div>
