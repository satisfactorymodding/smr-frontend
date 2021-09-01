<script lang="ts">
  import type { Mod } from '$lib/generated';
  import downloadIcon from '@iconify/icons-mdi/download.js';
  import eyeIcon from '@iconify/icons-mdi/eye.js';
  import openInNewIcon from '@iconify/icons-mdi/open-in-new.js';
  import { assets, base } from '$app/paths';
  import Icon from '@iconify/svelte';
  import { getImageCornerColors } from '$lib/utils/image';

  export let mod: Pick<Mod, 'id' | 'name' | 'logo' | 'views' | 'downloads' | 'short_description'>;
  export let expanded = false;

  /* eslint-disable @typescript-eslint/no-unused-vars */
  $: logo = mod.logo || assets + '/images/no_image.png';

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
    class="mod-card shadowed grid grid-flow-row p-3 bg-gray-700 gap-3 relative min-h-full overflow-hidden"
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
        <img bind:this={logoElement} crossorigin="anonymous" src={logo} alt="{mod.name} Logo" />
      </div>
      <div>
        <div>
          <span class:text-gray-50={!light} class:text-gray-800={light && shouldExpand} class="text-xl"
            >{mod.name}</span>
        </div>
        <div class:text-gray-50={!light} class:text-gray-800={light && shouldExpand} class="text-sm">
          <span><Icon icon={eyeIcon} inline={true} class="inline-block" /> {mod.views}</span>
          <span><Icon icon={downloadIcon} inline={true} class="inline-block" /> {mod.downloads}</span>
        </div>
      </div>
    </div>
    {#if shouldExpand}
      <div class="expanded grid grid-flow-row content-between gap-3">
        <div>
          <span class:text-gray-50={!light} class:text-gray-800={light && shouldExpand} class="text-base"
            >{mod.short_description}</span>
        </div>
        <div class="grid grid-flow-col gap-4">
          <a href="{base}/mod/{mod.id}/">
            <button class="shadowed py-1 px-4 rounded text-base bg-blue-500">
              <span>More info <Icon icon={openInNewIcon} inline={true} class="inline-block" /></span>
            </button>
          </a>
          <!-- TODO SMM Button -->
          <button class="shadowed py-1 px-4 rounded text-base bg-lime-600">
            <span>Install <Icon icon={downloadIcon} inline={true} class="inline-block" /></span>
          </button>
        </div>
      </div>
    {/if}
  </div>
</div>

<style lang="postcss">
  .shadowed {
    box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 1);
  }

  .mod-card {
    grid-template-rows: min-content auto;

    & .top {
      grid-template-columns: 30% auto;
    }
  }
</style>
