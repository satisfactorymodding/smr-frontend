<script lang="ts">
  import CompatibilityInfo from '$lib/components/mods/compatibility/CompatibilityInfo.svelte';
  import type { CompatibilityInfoInput } from '$lib/generated';
  import { getTranslate } from '@tolgee/svelte';
  import { onMount } from 'svelte';

  interface Props {
    compatibility: CompatibilityInfoInput;
    open?: boolean;
  }

  let { compatibility, open = $bindable(false) }: Props = $props();

  export const { t } = getTranslate();

  let self: HTMLDialogElement;

  onMount(() => {
    if (open) {
      self.showModal();
    }
  });

  $effect(() => {
    if (open) {
      self.showModal();
    } else {
      self.close();
    }
  });
</script>

<dialog
  data-dialog
  bind:this={self}
  onclick={() => (open = false)}
  class="top-1/2 left-1/2 z-10 max-w-[640px] -translate-1/2 space-y-4 rounded-container bg-surface-100-900 p-4 text-inherit backdrop:bg-surface-50/75 dark:backdrop:bg-surface-950/75">
  <div
    onclick={(e) => e.stopPropagation()}
    role="none"
    class="flex flex-col gap-2 card preset-filled-surface-100-900 p-4">
    <h2 class="text-2xl">{$t('compatibility-info')}</h2>
    <div>
      <CompatibilityInfo {compatibility} />
    </div>
  </div>
</dialog>
