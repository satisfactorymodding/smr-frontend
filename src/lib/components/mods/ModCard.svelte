<script lang="ts">
  import type { Mod, Maybe, Version } from '$lib/generated';
  import { assets, base } from '$app/paths';
  import Card, { Content, Actions } from '@smui/card';
  import IconButton, { Icon } from '@smui/icon-button';
  import { goto } from '$app/navigation';

  export let mod: Pick<Mod, 'id' | 'name' | 'logo' | 'views' | 'downloads' | 'short_description'> & {
    latestVersions: {
      alpha?: Maybe<Pick<Version, 'id'>>;
      beta?: Maybe<Pick<Version, 'id'>>;
      release?: Maybe<Pick<Version, 'id'>>;
    };
  };

  /* eslint-disable @typescript-eslint/no-unused-vars */
  $: logo = mod.logo || assets + '/images/no_image.png';

  $: installable =
    'latestVersions' in mod ? mod.latestVersions.alpha || mod.latestVersions.beta || mod.latestVersions.release : false;
</script>

<Card class="h-full">
  <div class="grid sm:grid-cols-2 grid-cols-1 justify-items-center">
    <div class="cursor-pointer card-image-container" on:click={() => goto(base + `/mod/${mod.id}/`)}>
      <img crossorigin="anonymous" src={logo} alt="{mod.name} Logo" class="logo max-w-full max-h-full" />
    </div>
    <div class="w-full flex flex-col justify-between">
      <Content class="flex flex-col pb-0">
        <div class="mb-2">
          <a href="{base}/mod/{mod.id}/">
            <span class="text-xl text-gray-50 break-words">{mod.name}</span>
          </a>

          <h5 class="text-sm m-0">
            <span><Icon class="material-icons align-middle text-sm">visibility</Icon>{mod.views}</span>
            <span><Icon class="material-icons align-middle text-sm">download</Icon>{mod.downloads}</span>
          </h5>
        </div>

        <div class="break-words">
          {mod.short_description}
        </div>
      </Content>

      <Actions class="self-end">
        <IconButton href="{base}/mod/{mod.id}/" aria-label="Go to mod page" title="Go to mod page">
          <Icon class="material-icons">info</Icon>
        </IconButton>
        {#if installable}
          <!-- TODO SMM Button -->
          <IconButton class="material-icons" title="Install">download</IconButton>
        {/if}
      </Actions>
    </div>
  </div>
</Card>

<style lang="postcss">
  .logo {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
</style>
