<script lang="ts">
  import { assets } from '$app/paths';
  import type { Tool } from '$lib/models/tools';
  import Card, { Content, Actions } from '@smui/card';
  import IconButton, { Icon } from '@smui/icon-button';
  import { goto } from '$app/navigation';

  export let tool: Tool;

  $: logo = tool.logo || assets + '/images/no_image.png';
</script>

<Card class="h-full">
  <div class="grid sm:grid-cols-2 grid-cols-1 justify-items-center">
    <div class="cursor-pointer card-image-container" on:click={() => goto(tool.link)}>
      <img crossorigin="anonymous" src={logo} alt="{tool.name} Logo" class="logo max-w-full max-h-full" />
    </div>
    <div class="w-full flex flex-col justify-between">
      <Content class="flex flex-col pb-0">
        <div class="mb-2">
          <a href={tool.link}>
            <span class="text-xl text-gray-50 break-all">{tool.name}</span>
          </a>

          <h5 class="text-sm m-0">
            <span>{tool.author}</span>
          </h5>
        </div>

        <div>
          {tool.description}
        </div>
      </Content>

      <Actions class="self-end">
        <IconButton href={tool.link} aria-label="Go to tool page" title="Go to tool page">
          <Icon class="material-icons">info</Icon>
        </IconButton>
      </Actions>
    </div>
  </div>
</Card>
