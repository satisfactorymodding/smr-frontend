<script lang="ts">
  import BaseModal from '$lib/components/general/BaseModal.svelte';

  interface Props {
    title: string;
    buttonTextCancel: string;
    buttonTextConfirm: string;
    body: string;
    open: boolean;
    confirm: () => void;
  }

  let { title, buttonTextCancel, buttonTextConfirm, body, open = $bindable(), confirm }: Props = $props();

  const onConfirm = () => {
    open = false;
    confirm();
  };
</script>

<BaseModal bind:open innerGap="gap-8">
  <h2 class="text-2xl">{title}</h2>
  <div>{body}</div>
  <div class="flex justify-end gap-2">
    <button class="btn preset-outlined-surface-500" onclick={() => (open = false)}>{buttonTextCancel}</button>
    <button class="btn preset-filled-surface-900-100" onclick={onConfirm}>{buttonTextConfirm}</button>
  </div>
</BaseModal>
