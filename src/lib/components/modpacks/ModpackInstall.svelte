<script lang="ts">
  import type { Modpack } from '$lib/generated';
  import { installModpack } from '$lib/stores/launcher';
  import { getTranslate } from '@tolgee/svelte';

  export let modpack!: Pick<Modpack, 'id'>;

  export const { t } = getTranslate();
</script>

<div class="card p-4">
  <section>
    <div class="flex justify-center">
      <button class="variant-ghost-primary btn" on:click={() => installModpack(modpack.id)}>
        <span class="material-icons pr-2">download</span>
        {$t('modpack.install')}
      </button>
    </div>
  </section>
</div>
