<script lang="ts">
  import { spring } from 'svelte/motion';
  import { assets } from '$app/paths';

  export let dogVisible = false;

  const x = spring<number>(-2000, { stiffness: 0.004, damping: 0.25, precision: 1 });
  const y = spring<number>(-1000, { stiffness: 0.004, damping: 0.25, precision: 1 });

  let last_mouse = { x: -1000, y: 0 };

  $: actual_mouse_x = last_mouse.x - 350;
  $: actual_mouse_y = last_mouse.y - 100;
  $: dx = Math.abs($x - actual_mouse_x);
  $: dy = Math.abs($y - actual_mouse_y);
  $: isClose = dx < 80 && dy < 40;
  $: isLookingRight = $x < actual_mouse_x;
  $: sprite = assets + ('/images/dog_' + (isClose ? 'stand.gif' : 'boing.gif'));
  $: head_offset = isLookingRight ? -70 : 50;
  $: x.set(actual_mouse_x + head_offset);
  $: y.set(actual_mouse_y);

  function update_pos(event: MouseEvent) {
    last_mouse = event;
  }

  function pat() {
    sprite = assets + '/images/dog_aw_yis_pats.gif';
  }

  function try_pat() {
    isClose ? pat() : null;
  }

  function end_pat() {
    sprite = assets + '/images/dog_stand.gif';
  }
</script>

<svelte:window on:mousedown={try_pat} on:mousemove={update_pos} on:mouseup={end_pat} />

<div class="h-full w-full overflow-hidden top-0" style="position: absolute; z-index: 69 ">
  {#if dogVisible}
    <img
      class={'h-full doggo-flipper' + (isLookingRight ? '-R' : '-L')}
      src={sprite}
      alt="Doggo!"
      style="width: 200px;
                height: auto;
                position: absolute;
                offset-position: center left;
                translate: {$x}px {$y}px;"
    />
  {/if}
</div>

<style lang="postcss">
  .doggo-flipper-L {
    animation: 0.1s linear 0s 1 alternate flip-L both;
  }

  .doggo-flipper-R {
    animation: 0.1s linear 0s 1 alternate flip-R both;
  }

  @keyframes flip-R {
    from {
      transform: scaleX(1);
    }
    to {
      transform: scaleX(-1);
    }
  }

  @keyframes flip-L {
    from {
      transform: scaleX(-1);
    }
    to {
      transform: scaleX(1);
    }
  }
</style>
