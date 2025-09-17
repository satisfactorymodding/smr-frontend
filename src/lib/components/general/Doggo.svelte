<script lang="ts">
  import { run } from 'svelte/legacy';

  import { spring } from 'svelte/motion';
  import { assets } from '$app/paths';
  import { writable } from 'svelte/store';

  let { dogVisible = writable<boolean>(false) } = $props();

  const x = spring<number>(-2000, { stiffness: 0.004, damping: 0.25, precision: 1 });
  const y = spring<number>(-1000, { stiffness: 0.004, damping: 0.25, precision: 1 });
  let sprite = $state(assets + '/images/dog_stand.gif');

  let last_mouse = $state({ clientX: -1000, clientY: 0 });
  let patting = false;

  let actual_mouse_x = $derived(last_mouse.clientX - 350);
  let actual_mouse_y = $derived(last_mouse.clientY - 100);
  let dx = $derived(Math.abs($x - actual_mouse_x));
  let dy = $derived(Math.abs($y - actual_mouse_y));
  let isClose = $derived(dx < 80 && dy < 40);
  let isLookingRight = $derived($x < actual_mouse_x);
  run(() => {
    sprite = assets + ('/images/dog_' + (isClose ? 'stand.gif' : 'boing.gif'));
  });
  let head_offset = $derived(isLookingRight ? -70 : 50);
  run(() => {
    x.set(actual_mouse_x + head_offset);
  });
  run(() => {
    y.set(actual_mouse_y);
  });

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
    if (isClose) {
      pat();
    }
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

<svelte:window onmousedown={try_pat} onmousemove={update_pos} onmouseup={end_pat} />

{#if $dogVisible}
  <img
    class={'doggo-flipper h-full' + (isLookingRight ? '-R' : '-L')}
    src={sprite}
    alt="Doggo!"
    title="Click to pat doggo!"
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
