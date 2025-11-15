<script lang="ts">
  import { ValidationMessage } from '@felte/reporter-svelte';

  interface Props {
    label: string;
    name: string;
    id: string;
    accept?: string;
    placeholder?: string;
  }

  let { label, name, id, accept, placeholder }: Props = $props();
</script>

<div class="grid grid-flow-row gap-2">
  <label for={id}>{label}</label>
  <input {id} class="base-input" {name} type="file" {accept} {placeholder} />
  <ValidationMessage for={name}>
    {#snippet children({ messages: message })}
      <span class="validation-message">{message || ''}</span>
    {/snippet}
  </ValidationMessage>
</div>
