<script lang="ts">
  import { fade, scale } from 'svelte/transition';
  import { quadIn, quadOut } from 'svelte/easing';

  export let timeout = 5000;
  export let running = false;
  export let background = 'bg-red-800';

  let currentTimeout: undefined | ReturnType<typeof setTimeout>;

  $: {
    if (currentTimeout) {
      clearTimeout(currentTimeout);
    }

    if (running) {
      currentTimeout = setTimeout(() => {
        running = false;
      }, timeout);
    }
  }
</script>

{#if running}
  <div class="fixed w-full h-full top-0 left-0 z-30 pointer-events-none">
    <div class="text-white fixed w-full h-full flex items-center justify-center pointer-events-none">
      <div
        class="{background} bottom-0 pointer-events-auto flex absolute py-2 px-4 z-30 mb-4 content-between mx-auto rounded items-center shadow-sm h-12"
        in:scale={{ duration: 100, easing: quadIn }}
        out:fade={{ duration: 100, easing: quadOut, delay: 150 }}>
        <slot />
      </div>
    </div>
  </div>
{/if}
