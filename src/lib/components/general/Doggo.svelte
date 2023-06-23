<script lang="ts">
  import { spring } from 'svelte/motion';
  import { assets } from '$app/paths';
  import { writable } from 'svelte/store';

  export let dogVisible = writable<boolean>(false);

  const x = spring<number>(-2000, { stiffness: 0.004, damping: 0.25, precision: 1 });
  const y = spring<number>(-1000, { stiffness: 0.004, damping: 0.25, precision: 1 });
  let sprite = assets + '/images/dog_stand.gif';

  let last_mouse = { clientX: -1000, clientY: 0 };
  let patting = false;

  $: actual_mouse_x = last_mouse.clientX - 350;
  $: actual_mouse_y = last_mouse.clientY - 100;
  $: dx = Math.abs($x - actual_mouse_x);
  $: dy = Math.abs($y - actual_mouse_y);
  $: isClose = dx < 80 && dy < 40;
  $: isLookingRight = $x < actual_mouse_x;
  $: sprite = assets + ('/images/dog_' + (isClose ? 'stand.gif' : 'boing.gif'));
  $: head_offset = isLookingRight ? -70 : 50;
  $: x.set(actual_mouse_x + head_offset);
  $: y.set(actual_mouse_y);

  function update_pos(event: MouseEvent) {
    if (!patting && dogVisible) {
      last_mouse = event;
    }
  }

  function pat() {
    sprite = assets + '/images/dog_aw_yis_pats.gif';
    patting = true;
  }

  function try_pat() {
    isClose ? pat() : null;
  }

  async function end_pat() {
    if (patting) {
      sprite = assets + '/images/dog_boing.gif';
      actual_mouse_x = 3000;
      setTimeout(() => {
        $dogVisible = false;
        $x = -2000;
        $y = -1000;
        patting = false;
      }, 700);
    }
  }
</script>

<svelte:window on:mousedown={try_pat} on:mousemove={update_pos} on:mouseup={end_pat} />

{#if $dogVisible}
  <img
    class={'h-full doggo-flipper' + (isLookingRight ? '-R' : '-L')}
    src={sprite}
    alt="Doggo!"
    title="Click and hold to pat doggo!
Release to run doggo off!
Art by Zago#5322 (discord)/ZagoTheSpider (youtube)"
    style="width: 200px;
                      height: auto;
                      position: absolute;
                        top: {$y}px;
                        left: {$x}px;
                        z-index: 69;
                      " />
{/if}

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
