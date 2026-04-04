<script lang="ts">
  // import type { Modpack } from '$lib/generated';
  import { getTranslate } from '@tolgee/svelte';

  //   export let modpack!: Pick<
  //     Modpack,
  //     'mods'
  //   >;

  export const { t } = getTranslate();
</script>

<div class="card p-4">
  <section>
    <div class="break-words text-lg">
      <!-- {modpack.mods.length > 0}
            <h3 class="my-4 text-2xl font-bold">{$t('modpack.mod-list')}</h3>
            <ul class="list-disc list-inside">
              {#each modpack.mods as mod}
                <li>{mod.mod_id}</li>
              {/each}
            </ul>
        : <p>{$t('modpack.no-mods')}</p> -->
    </div>
  </section>
</div>
