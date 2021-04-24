<script lang="ts">
  import type {Mod} from "../../generated";
  import downloadIcon from '@iconify/icons-mdi/download.js';
  import eyeIcon from '@iconify/icons-mdi/eye.js';
  import openInNewIcon from '@iconify/icons-mdi/open-in-new.js';
  import {assets} from '$app/paths';
  import Icon from "../utils/iconify/Icon.svelte";
  import FastAverageColor from 'fast-average-color';

  export let mod: Pick<Mod, 'id' | 'name' | 'logo' | 'views' | 'downloads' | 'short_description'>;
  export let expanded = false;

  const fac = new FastAverageColor();

  /* eslint-disable @typescript-eslint/no-unused-vars */
  $: logo = mod.logo || assets + '/images/no_image.png'

  let hovering = false;

  $: shouldExpand = expanded || hovering;

  let logoElement: HTMLImageElement;
  let activeBackground: string | undefined;
  let light = false;

  function luminance(r: number, g: number, b: number) {
    const a = [r, g, b].map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }

  async function getImageCornerColors(element: HTMLImageElement): Promise<{ background: string, light: boolean }> {
    const halfWidth = element.naturalWidth / 2;
    const halfHeight = element.naturalHeight / 2;

    // TODO Cleanup
    return Promise.all([
      // Top Left
      new Promise(resolve => {
        fac.getColorAsync(element, {width: halfWidth, height: halfHeight}).then(color => {
          if (color && 'hex' in color) {
            resolve(color.hex);
          }
        });
      }),
      // Top Right
      new Promise(resolve => {
        fac.getColorAsync(element, {width: halfWidth, height: halfHeight, left: halfWidth}).then(color => {
          if (color && 'hex' in color) {
            resolve(color.hex);
          }
        });
      }),
      // Bottom Left
      new Promise(resolve => {
        fac.getColorAsync(element, {width: halfWidth, height: halfHeight, top: halfHeight}).then(color => {
          if (color && 'hex' in color) {
            resolve(color.hex);
          }
        });
      }),
      // Bottom Right
      new Promise(resolve => {
        fac.getColorAsync(element, {
          width: halfWidth,
          height: halfHeight,
          left: halfWidth,
          top: halfHeight
        }).then(color => {
          if (color && 'hex' in color) {
            resolve(color.hex);
          }
        });
      }),
      // Lightness
      new Promise(resolve => {
        fac.getColorAsync(element).then(color => {
          if (color && 'value' in color) {
            resolve(color.value);
          }
        });
      })
    ]).then(colors => {
      console.log(colors);
      let result = '';
      result += `linear-gradient(to bottom right, ${colors[0]}, 35%, transparent),`;
      result += `linear-gradient(to bottom left, ${colors[1]}, 35%, transparent),`;
      result += `linear-gradient(to top right, ${colors[2]}, 35%, transparent),`;
      result += `linear-gradient(to top left, ${colors[3]}, 35%, transparent),`;
      result += `linear-gradient(rgb(64, 64, 64), rgb(64, 64, 64));`;
      return {
        background: result,
        light: luminance(colors[4][0] as number, colors[4][1] as number, colors[4][2] as number) > 0.4
      };
    })
  }

  let loading = false;
  $: {
    if (shouldExpand && logoElement && !loading) {
      loading = true;
      if (logoElement.naturalWidth != 0 && logoElement.naturalHeight != 0) {
        getImageCornerColors(logoElement).then(color => {
          activeBackground = color.background;
          light = color.light;
        });
      } else {
        logoElement.onload = () => getImageCornerColors(logoElement).then(color => {
          activeBackground = color.background;
          light = color.light;
        });
      }
    }
  }
</script>

<div class:h-36={!expanded} class="h-36 relative">
  <div class="mod-card shadowed grid grid-flow-row p-3 bg-gray-700 gap-3 relative min-h-full"
       style={shouldExpand && activeBackground ? 'background:' + activeBackground : undefined}
       class:max-h-72={shouldExpand} class:max-h-36={!shouldExpand} class:z-10={shouldExpand}
       on:mouseover={() => hovering = true}
       on:mouseleave={() => hovering = false}>
    <div class="top grid grid-flow-col gap-4">
      <div class="shadowed">
        <img bind:this={logoElement} crossorigin="anonymous" src={logo} alt="{mod.name} Logo">
      </div>
      <div>
        <div><span class:text-gray-50={!light} class:text-gray-800={light && shouldExpand}
                   class="text-xl">{mod.name}</span></div>
        <div class:text-gray-50={!light} class:text-gray-800={light && shouldExpand} class="text-sm">
          <span><Icon icon={eyeIcon} inline={true} class="inline-block"/> {mod.views}</span>
          <span><Icon icon={downloadIcon} inline={true} class="inline-block"/> {mod.downloads}</span>
        </div>
      </div>
    </div>
    {#if shouldExpand}
      <div class="expanded grid grid-flow-row content-between gap-3">
        <div><span class:text-gray-50={!light} class:text-gray-800={light && shouldExpand}
                   class="text-base">{mod.short_description}</span></div>
        <div class="grid grid-flow-col gap-4">
          <button class="shadowed py-1 px-4 rounded text-base bg-blue-500">
            <span>More info <Icon icon={openInNewIcon} inline={true} class="inline-block"/></span>
          </button>
          <button class="shadowed py-1 px-4 rounded text-base bg-lime-600">
            <span>Install <Icon icon={downloadIcon} inline={true} class="inline-block"/></span>
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
