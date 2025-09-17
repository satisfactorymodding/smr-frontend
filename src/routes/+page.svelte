<script lang="ts">
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import Doggo from '$lib/components/general/Doggo.svelte';
  import { assets } from '$app/paths';
  import { onMobile, easterEgg, doggoNeedsPats } from '$lib/stores/global';
  import type { PageData } from './$types';
  import { getTranslate, T } from '@tolgee/svelte';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

  let { mods } = $derived(data);

  export const { t } = getTranslate();
</script>

<svelte:head>
  <MetaDescriptors description="Satisfactory Mod Repository" title="Home" />
</svelte:head>

<Doggo dogVisible={doggoNeedsPats} />

<div class="flex min-h-full flex-col" style="height: calc(100vh - 64px - 3rem)">
  <div class="mb-4 min-h-[35vh] overflow-hidden">
    {#if !$onMobile}
      <a href="https://smm.ficsit.app" rel="noopener" target="_blank">
        <div class="card h-full">
          <div class="relative h-full w-full">
            <div class="banner smm-banner"></div>
            <div class="absolute top-0 flex h-full w-full items-center justify-center">
              {#if $easterEgg}
                <img class="flipper-1 h-full" src={assets + '/images/smm_hand.webp'} alt="Ficsit Minion" />
                <img class="flipper-2 h-full" src={assets + '/images/smm_hand.webp'} alt="Ficsit Minion" />
              {:else}
                <img class="flipped h-full" src={assets + '/images/smm_hand.webp'} alt="Ficsit Minion" />
              {/if}
              <div class="text-center">
                <div class="mb-2 text-4xl">{$t('home.satisfactory-mod-manager')}</div>
                <div class="mb-4 text-xl">
                  Windows - Linux - Epic - Steam
                  {#if $easterEgg || $doggoNeedsPats}{' - Doggo'}{/if}
                </div>
                <div class="flex h-1/3 justify-center 2xl:h-1/2">
                  <div class="preset-outlined-primary-500 preset-tonal-surface btn btn-lg m-6 text-3xl">
                    <span
                      ><T
                        keyName="home.download-satisfactory-mod-manager"
                        defaultValue="Download the Mod Manager" /></span>
                    <img class="h-full" src={assets + '/images/smm_icon_white.webp'} alt="Satisfactory Mod Manager" />
                  </div>
                </div>
              </div>
              {#if $easterEgg}
                <img class="flipper-3 h-full" src={assets + '/images/smm_hand.webp'} alt="Ficsit Minion" />
                <img class="flipper-4 h-full" src={assets + '/images/smm_hand.webp'} alt="Ficsit Minion" />
              {:else}
                <img class="h-full" src={assets + '/images/smm_hand.webp'} alt="Ficsit Minion" />
              {/if}
            </div>
          </div>
        </div>
      </a>
    {:else}
      <a href="/mods" class="overflow-hidden">
        <div class="card h-full">
          <div class="relative h-full w-full">
            <div class="smm-banner banner"></div>
            <div class="absolute top-0 flex h-full w-full items-center justify-end text-center">
              <img class="h-full" src={assets + '/images/mods_mobile.webp'} alt="Ficsit Minion" />
            </div>
            <div class="absolute top-0 flex h-4/5 w-full items-center pl-8">
              <div>
                <div class="text-md">
                  {$t('home.banner.we-have-over')}
                  <span class="font-bold text-amber-600">
                    {#if $mods.fetching || $mods.error}
                      ...
                    {:else}
                      {$mods.data.getMods.count}
                    {/if}
                  </span>
                  {$t('home.banner.mods')}!
                </div>
                <div class="text-md max-w-prose">{$t('home.banner.most-are-compatible')}</div>
              </div>
            </div>
            <div class="absolute top-0 flex h-full w-full items-end justify-center">
              <button class="btn h-1/4 w-full px-14 py-3" style="background: #5a7b78; color: white">
                {$t('home.banner.take-a-look')}
              </button>
            </div>
          </div>
        </div>
      </a>
    {/if}
  </div>

  <div class="mb-4 grid flex-1 grid-cols-1 gap-4 xl:grid-cols-2">
    <a href="https://discord.gg/xkVJ73E" rel="noopener" target="_blank" class="min-h-[25vh] overflow-hidden">
      <div class="card h-full">
        <div class="relative h-full w-full">
          <div class="modding-banner banner"></div>
          <div class="absolute top-0 flex h-full w-full flex-col items-center justify-center">
            <img class="centered-logo" src={assets + '/images/sf_modding_logo.webp'} alt="Satisfactory Modding Logo" />
            <div class="preset-outlined-secondary-500 preset-tonal-secondary btn btn-md m-6">
              <span><T keyName="home.banner.join-discord" defaultValue="Join the Modding Discord" /></span>
              <span class="material-icons">people</span>
            </div>
          </div>
          <div class="absolute bottom-0 w-full px-4 pb-4 text-center text-neutral-400 xl:text-left">
            <span>{$t('home.banner.community-run-discord')}</span>
          </div>
        </div>
      </div>
    </a>
    <a href="https://www.satisfactorygame.com/" rel="noopener" target="_blank" class="min-h-[25vh] overflow-hidden">
      <div class="card h-full">
        <div class="relative h-full w-full">
          <div class="css-banner banner"></div>
          <div class="absolute top-0 flex h-full w-full flex-col items-center justify-center">
            <img
              class="centered-logo"
              src={assets + '/images/satisfactory_logo_full_color_small.webp'}
              alt="Satisfactory Logo" />
            <div class="preset-outlined-surface-500 preset-tonal-surface btn btn-md m-6">
              <span
                ><T keyName="home.banner.open-official-website" defaultValue="Visit the Satisfactory Website" /></span>
              <span class="material-icons">launch</span>
            </div>
          </div>
          <div class="absolute bottom-0 w-full px-4 pb-4 text-center text-neutral-300 xl:text-right">
            <span>{$t('home.banner.official-website')}</span>
          </div>
        </div>
      </div>
    </a>
  </div>
</div>

<style lang="postcss">
  .smm-banner {
    background-image: url('/images/smm_background.webp');
    filter: blur(8px);
    -webkit-filter: blur(8px);
  }

  .modding-banner {
    background-image: url('/images/bg_nologo.webp');
    filter: blur(8px);
    -webkit-filter: blur(8px);
  }

  .css-banner {
    background-image: url('/images/Satisfactory_KeyArt_1_1024x1024_NoLogo.webp');
    filter: blur(8px) brightness(0.5);
    -webkit-filter: blur(8px) brightness(0.5);
  }

  .banner {
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .centered-logo {
    max-height: 50%;
    max-width: 60%;
  }

  .flipped {
    transform: scaleX(-1);
  }

  .flipper-1 {
    animation: 0.11s linear 1s infinite alternate flipper;
  }

  .flipper-2 {
    animation: 0.12s linear 1s infinite alternate flipper;
  }

  .flipper-3 {
    animation: 0.13s linear 1s infinite alternate flipper;
  }

  .flipper-4 {
    animation: 0.14s linear 1s infinite alternate flipper;
  }

  @keyframes flipper {
    from {
      transform: scaleX(-1);
    }
    to {
      transform: scaleX(1);
    }
  }

  @media (min-width: 1280px) {
    .centered-logo {
      max-height: 15vh;
    }
  }
</style>
