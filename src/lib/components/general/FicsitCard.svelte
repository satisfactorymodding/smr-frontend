<script lang="ts">
  import { assets } from '$app/paths';
  import Card, { Content, Actions } from '@smui/card';
  import IconButton, { Icon } from '@smui/icon-button';
  import { goto } from '$app/navigation';

  export let name = '';
  export let logo = assets + '/images/no_image.png';
  export let description = '';
  export let link = '/';
  export let fake = false;

  $: renderedLogo = logo || assets + '/images/no_image.png';
  $: renderedName = name || (fake && 'Card Name');
  $: renderedDescription = description || (fake && 'Short card description');
</script>

<Card class="h-full">
  <div
    class:text-gray-500={fake}
    class:font-flow={fake}
    class="grid grid-max-auto sm:grid-cols-2 grid-cols-1 justify-items-center"
  >
    <div class="cursor-pointer card-image-container" on:click={() => goto(link)}>
      {#if fake}
        <div class="bg-gray-500 logo min-w-full min-h-full max-w-full max-h-full" />
      {:else}
        <img crossorigin="anonymous" src={renderedLogo} alt="{renderedName} Logo" class="logo max-w-full max-h-full" />
      {/if}
    </div>
    <div class="w-full flex flex-col justify-between">
      <Content class="flex flex-col pb-0">
        <div class="mb-2">
          <a href="{link}/" class="text-white">
            <span class="text-xl break-words">{renderedName}</span>
          </a>

          <h5 class="text-sm m-0">
            <slot name="stats">
              {#if fake}
                <span class="font-flow">Card stats</span>
              {/if}
            </slot>
          </h5>
        </div>

        <div class:font-flow={fake} class="break-words">
          {renderedDescription}
        </div>
      </Content>

      <Actions class="self-end">
        {#if !fake}
          <IconButton href={link} aria-label="View {renderedName}" title="View {renderedName}">
            <Icon class="material-icons">info</Icon>
          </IconButton>
          <slot name="actions" />
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

  @media (min-width: 1279px) {
    .grid-max-auto {
      grid-template-columns: max-content auto;
    }
  }
</style>