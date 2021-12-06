<script lang="ts">
  import type { Guide } from '$lib/generated';
  import { assets, base } from '$app/paths';
  import Card, { Content, Actions } from '@smui/card';
  import IconButton, { Icon } from '@smui/icon-button';
  import { goto } from '$app/navigation';

  export let guide: Pick<Guide, 'id' | 'name' | 'views' | 'short_description'>;
  export let logo = assets + '/images/no_image.png';
</script>

<Card style="height: 100%; min-width: 450px">
  <div style="display: flex; height: 100%;">
    <div
      style="max-width: 200px; max-height: 200px; cursor: pointer"
      on:click={() => goto(base + `/guide/${guide.id}/`)}
    >
      <img
        crossorigin="anonymous"
        src={logo}
        alt="{guide.name} Logo"
        style="max-width: 100%; max-height: 100%; min-width: 200px; min-height: 200px;"
        class="logo"
      />
    </div>
    <div style="display: flex; flex-direction: column; justify-content: space-between; width: 100%">
      <Content style="display: flex; flex-direction: column; padding-bottom: 0;">
        <div style="margin-bottom: 10px">
          <a href="{base}/guide/{guide.id}/">
            <span class="text-xl text-gray-50">{guide.name}</span>
          </a>

          <h5 class="text-sm" style="margin: 0;">
            <span
              ><Icon class="material-icons" style="font-size: inherit; vertical-align: middle;">visibility</Icon>
              {guide.views}</span
            >
          </h5>
        </div>

        <div>
          {guide.short_description}
        </div>
      </Content>

      <Actions style="align-self: end;">
        <IconButton href="{base}/guide/{guide.id}/" aria-label="Go to guide page" title="Go to guide page">
          <Icon class="material-icons">info</Icon>
        </IconButton>
      </Actions>
    </div>
  </div>
</Card>
