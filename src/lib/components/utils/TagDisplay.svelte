<script lang="ts">
  import { type Tag } from '$lib/generated';
  import { popup, type PopupSettings } from '@skeletonlabs/skeleton';
  export let tag: Tag;
  export let popupTriggerEvent: PopupSettings['event'] | null = 'click';

  $: popupHover = {
    event: popupTriggerEvent,
    target: `popupHoverFor${tag.name}`,
    placement: 'bottom-start'
  } satisfies PopupSettings;
</script>

<div
  class="lowercase text-neutral-300 [&>*]:pointer-events-none"
  use:popup={popupHover}
  title="Click for tag information">
  <span class="text-orange-500">#</span>{tag.name}
</div>

<!-- Must use high z-index to ensure it draws on top of things like striped compatibility overlays in mod cards -->
<!-- https://floating-ui.com/docs/misc#z-index-stacking -->
<div class="card variant-filled-surface p-4" data-popup={`popupHoverFor${tag.name}`} style="z-index: 1000">
  <p>TODO Tag information will appear here.</p>
  <br />
  <p>Use Mod Tags to filter your searches and quickly find similar mods.</p>
  <div class="variant-filled-surface arrow" />
</div>
