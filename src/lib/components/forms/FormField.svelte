<script lang="ts">
  import { ValidationMessage } from '@felte/reporter-svelte';

  interface Props {
    label: string;
    name: string;
    value: string;
    type?: string;
    required?: boolean;
    disabled?: boolean;
    helperText?: string;
  }

  let {
    label,
    name,
    value = $bindable(''),
    type = 'text',
    required = false,
    disabled = false,
    helperText
  }: Props = $props();
</script>

<div class="grid grid-flow-row gap-2">
  <label class="label">
    <span
      >{label}{#if required}
        *{/if}</span>
    <input {type} bind:value {required} {disabled} class="input p-2" />
    {#if helperText}
      <span>{helperText}</span>
    {/if}
  </label>
  <ValidationMessage for={name}>
    {#snippet children({ messages: message })}
      <span class="validation-message">{message || ''}</span>
    {/snippet}
  </ValidationMessage>
</div>
