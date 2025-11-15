<script lang="ts">
  import { getTranslate } from '@tolgee/svelte';
  import type { Snippet } from 'svelte';

  const { t } = getTranslate();

  interface Props {
    title?: string;
    children: Snippet;
  }

  let { title, children }: Props = $props();

  let displayTitle = $derived(title ?? $t('entry.info'));
</script>

<div class="card preset-filled-surface-100-900 p-4">
  <section>
    <div class="text-lg break-words">
      <h3 class="my-4 text-2xl font-bold">{displayTitle}</h3>
      {@render children()}
    </div>
  </section>
</div>
