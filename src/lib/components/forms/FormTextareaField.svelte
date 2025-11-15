<script lang="ts">
  import { ValidationMessage } from '@felte/reporter-svelte';

  interface Props {
    label: string;
    name: string;
    value: string;
    required?: boolean;
    rows?: number;
  }

  let { label, name, value = $bindable(''), required = false, rows = 10 }: Props = $props();
</script>

<div class="grid grid-flow-row gap-2">
  <label class="label">
    <span
      >{label}{#if required}
        *{/if}</span>
    <textarea class="vertical-textarea textarea p-2" bind:value {required} {rows}></textarea>
  </label>
  <ValidationMessage for={name}>
    {#snippet children({ messages: message })}
      <span class="validation-message">{message || ''}</span>
    {/snippet}
  </ValidationMessage>
</div>
