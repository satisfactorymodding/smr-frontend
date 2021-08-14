<script lang="ts">
  import {fade} from "svelte/transition";
  import {quadIn, quadOut} from "svelte/easing";

  export let open = false;
  export let closeOnOutClick = true;

  const closeDialog = (event: MouseEvent) => {
    if (event.target === event.currentTarget && closeOnOutClick) {
      open = false;
    }
  }
</script>

{#if open}
  <div
    class="fixed w-full h-full top-0 left-0 z-30">
    <div class="dialog-container text-white fixed w-full h-full flex items-center justify-center"
         on:click={closeDialog}
         in:fade={{duration: 100, easing: quadIn}}
         out:fade={{duration: 100, easing: quadOut}}>
      <div class="dialog bg-gray-700 absolute py-4 px-6 z-30 mb-4 mx-auto rounded">
        <slot/>
      </div>
    </div>
  </div>
{/if}

<style lang="postcss">
  .dialog-container {
    background: rgba(0, 0, 0, .32);
  }

  .dialog {
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
  }
</style>
