<script lang="ts">
  import { createBubbler } from 'svelte/legacy';

  const bubble = createBubbler();
  import { type Tag } from '$lib/generated';
  import { popup, type PopupSettings } from '@skeletonlabs/skeleton';
  interface Props {
    tag: Tag;
    asButton?: boolean;
    selected?: boolean;
    popupTriggerEvent?: PopupSettings['event'] | null;
  }

  let { tag, asButton = false, selected = false, popupTriggerEvent = 'click' }: Props = $props();

  let popupHover = $derived({
    event: popupTriggerEvent,
    target: `popupHoverFor${tag.id}`,
    placement: 'bottom-start'
  } satisfies PopupSettings);
</script>

<button
  class={asButton ? 'chip hover:variant-filled-surface [&:not(:hover)]:variant-soft' : ''}
  class:selected
  use:popup={popupHover}
  onclick={bubble('click')}>
  <div
    class="lowercase text-neutral-300 [&>*]:pointer-events-none"
    title={popupTriggerEvent === 'click' ? 'Click for tag information' : ''}>
    <span class="text-orange-500">#</span>{tag.name}
  </div>
</button>

<!-- Must use high z-index to ensure it draws on top of things like striped compatibility overlays in mod cards -->
<!-- For some reason this still isn't able to draw over the ModGrid paginator-->
<!-- https://floating-ui.com/docs/misc#z-index-stacking -->
<div class="card variant-filled-surface p-4" data-popup={`popupHoverFor${tag.id}`} style="z-index: 1000">
  <p>{tag.description}</p>
</div>

<style lang="postcss">
  .selected {
    @apply variant-ghost-primary hover:variant-ringed-primary;
  }
</style>
