<script lang="ts">
  import type { Guide } from '$lib/generated';
  import { assets, base } from '$app/paths';
  import Card, { Content, Actions } from '@smui/card';
  import IconButton, { Icon } from '@smui/icon-button';
  import { goto } from '$app/navigation';

  export let guide: Pick<Guide, 'id' | 'name' | 'views' | 'short_description'>;
  export let logo = assets + '/images/no_image.png';
</script>

<Card class="h-full">
  <div class="grid grid-max-auto sm:grid-cols-2 grid-cols-1 justify-items-center">
    <div class="cursor-pointer card-image-container" on:click={() => goto(base + `/guide/${guide.id}/`)}>
      <img crossorigin="anonymous" src={logo} alt="{guide.name} Logo" class="logo max-w-full max-h-full" />
    </div>
    <div class="w-full flex flex-col justify-between">
      <Content class="flex flex-col pb-0">
        <div class="mb-2">
          <a href="{base}/guide/{guide.id}/">
            <span class="text-xl text-gray-50">{guide.name}</span>
          </a>

          <h5 class="text-sm m-0">
            <span><Icon class="material-icons align-middle text-sm">visibility</Icon>{guide.views}</span>
          </h5>
        </div>

        <div>
          {guide.short_description}
        </div>
      </Content>

      <Actions class="self-end">
        <IconButton href="{base}/guide/{guide.id}/" aria-label="Go to guide page" title="Go to guide page">
          <Icon class="material-icons">info</Icon>
        </IconButton>
      </Actions>
    </div>
  </div>
</Card>

<style lang="postcss">
  .logo {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  @media (min-width: 1279px) {
    .grid-max-auto {
      grid-template-columns: max-content auto;
    }
  }
</style>
