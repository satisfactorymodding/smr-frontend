<script lang="ts">
  import { ValidationMessage } from '@felte/reporter-svelte';
  import { markdown } from '$lib/utils/markdown';
  import { getTranslate } from '@tolgee/svelte';

  const { t } = getTranslate();

  interface Props {
    label: string;
    name: string;
    value: string;
    required?: boolean;
    rows?: number;
  }

  let { label, name, value = $bindable(''), required = false, rows = 10 }: Props = $props();

  let preview = $derived(value || '');
</script>

<div class="split grid gap-6">
  <div class="grid grid-flow-row auto-rows-max gap-2">
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
  <div class="grid grid-flow-row auto-rows-max gap-2">
    <span>{$t('preview')}:</span>
    {#await markdown(preview) then previewRendered}
      <!-- eslint-disable -->
      <div class="markdown-content right">{@html previewRendered}</div>
    {/await}
  </div>
</div>

<style lang="postcss">
  .split {
    grid-template-columns: 50% 50%;

    & .right {
      max-height: 75vh;
      overflow: auto;
    }
  }
</style>
