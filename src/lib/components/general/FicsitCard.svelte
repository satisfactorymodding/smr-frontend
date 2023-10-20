<script lang="ts">
  import { assets } from '$app/paths';
  import { goto, preloadData } from '$app/navigation';

  export let name = '';
  export let logo = assets + '/images/no_image.webp';
  export let description = '';
  export let link = '/';
  export let fake = false;

  $: renderedLogo = logo || assets + '/images/no_image.webp';
  $: renderedName = name || (fake && 'Card Name');
  $: renderedDescription = description || (fake && 'Short card description');

  let preloaded = false;
  let timeoutHandle: number;
  const onOver = () => {
    if (preloaded) {
      return;
    }

    timeoutHandle = setTimeout(() => {
      preloaded = true;
      preloadData(link);
    }, 250) as unknown as number;
  };

  const onOut = () => {
    if (preloaded) {
      return;
    }

    clearTimeout(timeoutHandle);
  };

  let actionButtons: HTMLElement;
</script>

<div
  class="card h-full overflow-hidden relative"
  on:mouseover={onOver}
  on:mouseout={onOut}
  on:focus={onOver}
  on:blur={onOut}
  role="none">
  <div
    class:text-gray-500={fake}
    class:font-flow={fake}
    class="grid grid-max-auto sm:grid-cols-2 grid-cols-1 justify-items-center">
    <div
      class="cursor-pointer card-image-container"
      >
      <a href={link}
      on:keypress={() => goto(link)}
      role="link"
      tabindex="0">
        {#if fake}
          <div class="bg-gray-500 logo min-w-full min-h-full max-w-full max-h-full" />
        {:else}
          <img src={renderedLogo} alt="{renderedName} Logo" class="logo max-w-full max-h-full" />
        {/if}
      </a>
    </div>
    <div class="w-full flex flex-col justify-between relative">
      <div class="flex flex-col px-3 py-2 pb-0">
        <div class="mb-1.5">
          <a href={link} class="text-white">
            <span class="text-xl break-words">{renderedName}</span>
          </a>

          <h5 class="text-sm m-0">
            <slot name="stats">
              {#if fake}
                <span class="font-flow">Card stats</span>
              {/if}
            </slot>
          </h5>

          <slot name="tags" />
        </div>

        <div class:font-flow={fake} style="word-wrap: anywhere">
          {renderedDescription}

          <div class="float-right"
               style="width: {(actionButtons?.clientWidth || 0) - 8}px; height: {(actionButtons?.clientHeight || 0) - 8}px">
            <!-- Placeholder for action buttons -->
          </div>
        </div>
      </div>

      <div class="self-end py-2 px-2 flex flex-row items-center text-lg gap-1 absolute bottom-0 right-0" bind:this={actionButtons}>
        {#if !fake}
          <a
            href={link}
            class="btn btn-sm variant-soft-surface"
            aria-label="View {renderedName}"
            title="View {renderedName}">
            <span class="material-icons">info</span>
          </a>
          <slot name="actions" />
        {/if}
      </div>
    </div>
  </div>

  <slot name="outer" />
</div>

<style lang="postcss">
  .logo {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  @media (min-width: 1024px) {
    .grid-max-auto {
      grid-template-columns: max-content auto;
    }
  }
</style>
