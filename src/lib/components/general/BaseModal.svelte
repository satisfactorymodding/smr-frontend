<script lang="ts">
  import { onMount } from 'svelte';
  import type { Snippet } from 'svelte';

  interface Props {
    open?: boolean;
    closeOnBackdropClick?: boolean;
    maxWidth?: string;
    innerGap?: string;
    children: Snippet;
  }

  let {
    open = $bindable(false),
    closeOnBackdropClick = true,
    maxWidth = '640px',
    innerGap = 'gap-2',
    children
  }: Props = $props();

  let self: HTMLDialogElement;

  export { self as dialog };

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

  const handleBackdropClick = () => {
    if (closeOnBackdropClick) {
      open = false;
    }
  };
</script>

<dialog
  data-dialog
  bind:this={self}
  onclick={handleBackdropClick}
  class="top-1/2 left-1/2 z-10 -translate-1/2 space-y-4 rounded-container bg-surface-100-900 p-4 text-inherit backdrop:bg-surface-50/75 dark:backdrop:bg-surface-950/75"
  style="max-width: {maxWidth}">
  <div
    onclick={(e) => e.stopPropagation()}
    role="none"
    class="flex flex-col card preset-filled-surface-100-900 p-4 {innerGap}">
    {@render children()}
  </div>
</dialog>
