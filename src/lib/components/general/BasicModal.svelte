<script lang="ts">
  import { onMount } from 'svelte';

  interface Props {
    title: string;
    buttonTextCancel: string;
    buttonTextConfirm: string;
    body: string;
    open: boolean;
    confirm: () => void;
  }

  let { title, buttonTextCancel, buttonTextConfirm, body, open = $bindable(), confirm }: Props = $props();

  let self = $state<HTMLDialogElement>();

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

  const onConfirm = () => {
    open = false;
    confirm();
  };
</script>

<dialog
  data-dialog
  bind:this={self}
  onclick={() => (open = false)}
  class="top-1/2 left-1/2 z-10 max-w-[640px] -translate-1/2 space-y-4 rounded-container bg-surface-100-900 p-4 text-inherit backdrop:bg-surface-50/75 dark:backdrop:bg-surface-950/75">
  <div
    onclick={(e) => e.stopPropagation()}
    role="none"
    class="flex flex-col gap-8 card preset-filled-surface-100-900 p-4">
    <h2 class="text-2xl">{title}</h2>
    <div>{body}</div>
    <div class="flex justify-end gap-2">
      <button class="btn preset-outlined-surface-500" onclick={() => (open = false)}>{buttonTextCancel}</button>
      <button class="btn preset-filled-surface-900-100" onclick={onConfirm}>{buttonTextConfirm}</button>
    </div>
  </div>
</dialog>
