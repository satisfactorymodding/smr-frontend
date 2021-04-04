<script lang="ts">
  import type {Mod} from "../../generated";
  import Icon from "@iconify/svelte";
  import downloadIcon from '@iconify/icons-mdi/download.js';
  import eyeIcon from '@iconify/icons-mdi/eye.js';

  export let mod: Pick<Mod, 'id' | 'name' | 'logo' | 'views' | 'downloads' | 'short_description'>;

  /* eslint-disable @typescript-eslint/no-unused-vars */
  $: logo = mod.logo || '/images/no_image.png'
</script>

<div class="max-w-none bg-gray-800 rounded-lg flex items-center">
  <div class="flex-shrink-0">
    <img class="h-max min-w-full rounded-l-lg mod-logo" src={logo} alt="ChitChat Logo">
  </div>
  <div class="px-4 py-3 flex flex-col flex-grow justify-between h-full">
    <div>
      <div class="text-xl font-medium text-white">{mod.name}</div>
      <div class="text-sm text-gray-400">
        <span><Icon icon={eyeIcon} inline={true} class="inline-block" /> {mod.views}</span>
        <span><Icon icon={downloadIcon} inline={true} class="inline-block" /> {mod.downloads}</span>
      </div>
    </div>
    <div>
      <div class="text-sm">{mod.short_description}</div>
    </div>
    <div class="ml-auto">
      <div>
        <button class="py-1 px-4 rounded border border-gray-500 mr-2">View</button>
        <button class="py-1 px-4 rounded border border-gray-500">Install</button>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .mod-logo {
    max-height: 200px;
    max-width: 200px;
    min-height: 200px;
  }
</style>
