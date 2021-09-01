<script lang="ts">
  import type { Guide } from '$lib/generated';
  import eyeIcon from '@iconify/icons-mdi/eye.js';
  import openInNewIcon from '@iconify/icons-mdi/open-in-new.js';
  import { assets, base } from '$app/paths';
  import Icon from '@iconify/svelte';
  import { getImageCornerColors } from '$lib/utils/image';

  export let guide: Pick<Guide, 'id' | 'name' | 'views' | 'short_description'>;
  export let expanded = false;
  export let logo = assets + '/images/no_image.png';

  let hovering = false;

  $: shouldExpand = expanded || hovering;

  let logoElement: HTMLImageElement;
  let activeBackground: string | undefined;
  let light = false;

  let loading = false;
  $: {
    if (shouldExpand && logoElement && !loading) {
      loading = true;
      if (logoElement.naturalWidth != 0 && logoElement.naturalHeight != 0) {
        getImageCornerColors(logoElement).then((color) => {
          activeBackground = color.background;
          light = color.light;
        });
      } else {
        logoElement.onload = () =>
          getImageCornerColors(logoElement).then((color) => {
            activeBackground = color.background;
            light = color.light;
          });
      }
    }
  }
</script>

<div class:h-36={!expanded} class="relative">
  <div
    class="guide-card shadowed grid grid-flow-row p-3 bg-gray-700 gap-3 relative min-h-full"
    style={shouldExpand && activeBackground ? 'background:' + activeBackground : undefined}
    class:max-h-72={shouldExpand}
    class:max-h-36={!shouldExpand}
    class:z-10={shouldExpand}
    on:mouseover={() => (hovering = true)}
    on:mouseleave={() => (hovering = false)}
    on:focus={() => (hovering = true)}
    on:focusout={() => (hovering = false)}>
    <div class="top grid grid-flow-col gap-4">
      <div class="shadowed">
        <img bind:this={logoElement} crossorigin="anonymous" src={logo} alt="{guide.name} Logo" />
      </div>
      <div>
        <div>
          <span class:text-gray-50={!light} class:text-gray-800={light && shouldExpand} class="text-xl"
            >{guide.name}</span>
        </div>
        <div class:text-gray-50={!light} class:text-gray-800={light && shouldExpand} class="text-sm">
          <span><Icon icon={eyeIcon} inline={true} class="inline-block" /> {guide.views}</span>
        </div>
      </div>
    </div>
    {#if shouldExpand}
      <div class="expanded grid grid-flow-row content-between gap-3">
        <div>
          <span class:text-gray-50={!light} class:text-gray-800={light && shouldExpand} class="text-base"
            >{guide.short_description}</span>
        </div>
        <div class="grid grid-flow-col gap-4">
          <a href="{base}/guide/{guide.id}/">
            <button class="shadowed py-1 px-4 rounded text-base bg-blue-500">
              <span>View <Icon icon={openInNewIcon} inline={true} class="inline-block" /></span>
            </button>
          </a>
        </div>
      </div>
    {/if}
  </div>
</div>

<style lang="postcss">
  .shadowed {
    box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 1);
  }

  .guide-card {
    grid-template-rows: min-content auto;

    & .top {
      grid-template-columns: 30% auto;
    }
  }
</style>
