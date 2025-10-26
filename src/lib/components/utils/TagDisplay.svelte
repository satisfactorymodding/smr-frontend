<script lang="ts">
  import { type Tag } from '$lib/generated';
  import { Portal, Tooltip } from '@skeletonlabs/skeleton-svelte';

  interface Props {
    tag: Tag;
    selected?: boolean;
    onclick?: () => void;
  }

  let { tag, selected, onclick }: Props = $props();
</script>

<Tooltip>
  <Tooltip.Trigger
    class={selected ? 'selected-tag' : ''}
    onclick={(e) => {
      e.preventDefault();
      onclick?.();
    }}>
    <span class="text-orange-500">#</span>
    <span class="text-neutral-300 lowercase">{tag.name}</span>
  </Tooltip.Trigger>
  <Portal>
    <Tooltip.Positioner>
      <Tooltip.Content class="max-w-md card preset-filled-surface-100-900 bg-surface-100-900 p-2 shadow-xl">
        {tag.description}
        <Tooltip.Arrow
          style="--arrow-size: calc(var(--spacing) * 2); --arrow-background: var(--color-surface-100-900);">
          <Tooltip.ArrowTip />
        </Tooltip.Arrow>
      </Tooltip.Content>
    </Tooltip.Positioner>
  </Portal>
</Tooltip>
