<script lang="ts">
  import { assets } from '$app/paths';
  import type { Tool } from '$lib/models/tools';
  import Card, { Content, Actions } from '@smui/card';
  import IconButton, { Icon } from '@smui/icon-button';
  import { goto } from '$app/navigation';

  export let tool: Tool;

  $: logo = tool.logo || assets + '/images/no_image.png';
</script>

<Card style="height: 100%; min-width: 450px">
  <div style="display: flex; height: 100%;">
    <div style="max-width: 200px; max-height: 200px; cursor: pointer" on:click={() => goto(tool.link)}>
      <img
        crossorigin="anonymous"
        src={logo}
        alt="{tool.name} Logo"
        style="max-width: 100%; max-height: 100%; min-width: 200px; min-height: 200px;"
        class="logo"
      />
    </div>
    <div style="display: flex; flex-direction: column; justify-content: space-between; width: 100%">
      <Content style="display: flex; flex-direction: column; padding-bottom: 0;">
        <div style="margin-bottom: 10px">
          <a href={tool.link}>
            <span class="text-xl text-gray-50">{tool.name}</span>
          </a>

          <h5 class="text-sm" style="margin: 0;">
            <span>{tool.author}</span>
          </h5>
        </div>

        <div>
          {tool.description}
        </div>
      </Content>

      <Actions style="align-self: end;">
        <IconButton href={tool.link} aria-label="Go to tool page" title="Go to tool page">
          <Icon class="material-icons">info</Icon>
        </IconButton>
      </Actions>
    </div>
  </div>
</Card>
