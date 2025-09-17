<script lang="ts">
  import { createBubbler } from 'svelte/legacy';

  const bubble = createBubbler();
  import { type Tag } from '$lib/generated';
  import { type PopupSettings } from '@skeletonlabs/skeleton-svelte';
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
  class={asButton ? 'chip hover:preset-filled-surface-500 [&:not(:hover)]:preset-tonal' : ''}
  class:selected
  use:popup={popupHover}
  onclick={bubble('click')}>
  <div
    class="text-neutral-300 lowercase [&>*]:pointer-events-none"
    title={popupTriggerEvent === 'click' ? 'Click for tag information' : ''}>
    <span class="text-orange-500">#</span>{tag.name}
  </div>
</button>

<!-- Must use high z-index to ensure it draws on top of things like striped compatibility overlays in mod cards -->
<!-- For some reason this still isn't able to draw over the ModGrid paginator-->
<!-- https://floating-ui.com/docs/misc#z-index-stacking -->
<div class="card preset-filled-surface-500 p-4" data-popup={`popupHoverFor${tag.id}`} style="z-index: 1000">
  <p>{tag.description}</p>
</div>

<style lang="postcss">
  @reference "../../../app.css";

  .selected {
    @apply preset-tonal-primary border-primary-500 hover:preset-outlined-primary-500 border;
  }
</style>
