<script lang="ts">
  import type {Mod} from "../../generated";
  import downloadIcon from '@iconify/icons-mdi/download.js';
  import eyeIcon from '@iconify/icons-mdi/eye.js';
  import openInNewIcon from '@iconify/icons-mdi/open-in-new.js';
  import {assets} from '$app/paths';
  import Icon from "../utils/iconify/Icon.svelte";

  export let mod: Pick<Mod, 'id' | 'name' | 'logo' | 'views' | 'downloads' | 'short_description'>;
  export let expanded = false;

  /* eslint-disable @typescript-eslint/no-unused-vars */
  $: logo = mod.logo || assets + '/images/no_image.png'
</script>

<div class="mod-card shadowed h-64 grid grid-flow-row p-3 bg-gray-700 gap-2">
  <div class="top grid grid-flow-col gap-4">
    <div class="mod-logo shadowed">
      <img src={logo} alt="{mod.name} Logo">
    </div>
    <div>
      <div><span class="text-xl">{mod.name}</span></div>
      <div class="text-sm text-gray-300">
        <span><Icon icon={eyeIcon} inline={true} class="inline-block"/> {mod.views}</span>
        <span><Icon icon={downloadIcon} inline={true} class="inline-block"/> {mod.downloads}</span>
      </div>
    </div>
  </div>
  {#if expanded}
    <div class="expanded grid grid-flow-row content-between">
      <div><span class="text-base">{mod.short_description}</span></div>
      <div class="grid grid-flow-col justify-between">
        <button class="shadowed py-1 px-4 rounded text-base bg-lime-600">
          <span>Install <Icon icon={downloadIcon} inline={true} class="inline-block"/></span>
        </button>
        <button class="shadowed py-1 px-4 rounded text-base bg-blue-500">
          <span>More info <Icon icon={openInNewIcon} inline={true} class="inline-block"/></span>
        </button>
      </div>
    </div>
  {/if}
</div>

<style lang="postcss">
  .shadowed {
    box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 1);
  }

  .mod-card {
    grid-template-rows: min-content auto;

    & .top {
      grid-template-columns: 25% auto;
    }
  }
</style>
