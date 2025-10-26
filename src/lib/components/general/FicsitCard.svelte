<script lang="ts">
  import { assets } from '$app/paths';
  import { goto, preloadData } from '$app/navigation';
  import { thumbHashToDataURL } from 'thumbhash';
  import { fade } from 'svelte/transition';

  interface Props {
    name?: string;
    logo?: string;
    description?: string;
    link?: string;
    fake?: boolean;
    thumbhash?: string;
    stats?: import('svelte').Snippet;
    tags?: import('svelte').Snippet;
    actions?: import('svelte').Snippet;
    outer?: import('svelte').Snippet;
  }

  let {
    name = '',
    logo = assets + '/images/no_image.webp',
    description = '',
    link = '/',
    fake = false,
    thumbhash = '',
    stats,
    tags,
    actions,
    outer
  }: Props = $props();

  let renderedLogo = $derived(logo || assets + '/images/no_image.webp');
  let renderedName = $derived(name || (fake && 'Card Name'));
  let renderedDescription = $derived(description || (fake && 'Short card description'));
  let renderedThumbhash = $derived(thumbhash || '2/eFDQIsFmh9h4BreKeAeQqYBxd3d3J4Jw');
  let thumbHashData = $derived(
    (() => {
      try {
        return thumbHashToDataURL(
          new Uint8Array(
            atob(renderedThumbhash)
              .split('')
              .map((x) => x.charCodeAt(0))
          )
        );
      } catch (e) {
        console.error(e);
      }
    })()
  );

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

  let actionButtons: HTMLElement = $state();

  let imageLoaded = $state(false);
  let thumbnailLoaded = $state(false);
</script>

<div
  class="relative h-full overflow-hidden card preset-filled-surface-100-900"
  onmouseover={onOver}
  onmouseout={onOut}
  onfocus={onOver}
  onblur={onOut}
  role="none">
  <div
    class:text-neutral-500={fake}
    class:font-flow={fake}
    class="grid-max-auto grid grid-cols-1 justify-items-center sm:grid-cols-2">
    <div class="card-image-container cursor-pointer">
      <a
        href={link}
        onkeypress={() => goto(link)}
        tabindex="0"
        class="relative block max-h-full min-h-full max-w-full min-w-full">
        {#if fake}
          <div class="logo max-h-full min-h-full max-w-full min-w-full bg-neutral-500"></div>
        {:else}
          <img
            class="logo absolute max-h-full min-h-full max-w-full min-w-full object-contain transition-opacity delay-100 duration-200 ease-linear"
            class:invisible={!imageLoaded}
            class:opacity-0={!imageLoaded}
            src={renderedLogo}
            alt="{renderedName} Logo"
            onload={() => (imageLoaded = true)} />
          {#if !imageLoaded && thumbHashData}
            <img
              class="logo absolute max-h-full min-h-full max-w-full min-w-full"
              class:invisible={!thumbnailLoaded}
              src={thumbHashData}
              alt="{renderedName} Logo"
              onload={() => (thumbnailLoaded = true)}
              in:fade={{ duration: 200 }}
              out:fade={{ duration: 200, delay: 100 }} />
          {/if}
        {/if}
      </a>
    </div>
    <div class="relative flex w-full flex-col justify-between">
      <div class="flex flex-col px-3 py-2 pb-0">
        <div class="mb-1.5">
          <a href={link} class="text-white">
            <span class="text-xl break-words">{renderedName}</span>
          </a>

          <h5 class="m-0 text-sm">
            {#if stats}{@render stats()}{:else if fake}
              <span class="font-flow">Card stats</span>
            {/if}
          </h5>

          {@render tags?.()}
        </div>

        <div class:font-flow={fake} style="word-wrap: anywhere">
          {renderedDescription}

          <div
            class="float-right"
            style="width: {(actionButtons?.clientWidth || 0) - 8}px; height: {(actionButtons?.clientHeight || 0) -
              8}px">
            <!-- Placeholder for action buttons -->
          </div>
        </div>
      </div>

      <div
        class="absolute right-0 bottom-0 flex flex-row items-center gap-1 self-end px-2 py-2 text-lg"
        bind:this={actionButtons}>
        {#if !fake}
          <a
            href={link}
            class="btn preset-tonal-surface btn-sm"
            aria-label="View {renderedName}"
            title="View {renderedName}">
            <span class="material-icons">info</span>
          </a>
          {@render actions?.()}
        {/if}
      </div>
    </div>
  </div>

  {@render outer?.()}
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
