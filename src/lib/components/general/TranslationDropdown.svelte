<script lang="ts">
  import { getTolgee, getTranslate } from '@tolgee/svelte';
  import { writable } from 'svelte/store';
  import { type PopupSettings, popup } from '@skeletonlabs/skeleton';
  import { browser } from '$app/environment';

  const tolgee = getTolgee(['language']);

  export const { t } = getTranslate();

  const languages = {
    en: {
      name: 'English',
      flag: '🇺🇳'
    },
    de: {
      name: 'Deutsch',
      flag: '🇩🇪'
    },
    fr: {
      name: 'Français',
      flag: '🇫🇷'
    },
    it: {
      name: 'Italiano',
      flag: '🇮🇹'
    },
    lv: {
      name: 'Latviešu',
      flag: '🇱🇻'
    },
    mt: {
      name: 'Malti',
      flag: '🇲🇹'
    },
    nl: {
      name: 'Nederlands',
      flag: '🇳🇱'
    },
    ru: {
      name: 'Pусский',
      flag: '🇷🇺'
    },
    'zh-Hans': {
      name: '简体中文',
      flag: '🇨🇳'
    },
    'zh-Hant': {
      name: '繁體中文',
      flag: '🇹🇼'
    }
  } as const;

  const lang = writable<string>((browser && localStorage.getItem('language')) || $tolgee.getLanguage());
  lang.subscribe((l) => {
    $tolgee.changeLanguage(l);
    if (browser) {
      localStorage.setItem('language', l);
    }
  });

  const languageMenuBox: PopupSettings = {
    event: 'focus-click',
    target: 'languageMenuBox',
    placement: 'bottom',
    closeQuery: 'li'
  };
</script>

<button class="grid grid-flow-col btn btn-sm variant-ghost-primary" use:popup={languageMenuBox}>
  <span>{languages[$lang].name}</span>
  <span class="text-xl">{languages[$lang].flag}</span>
</button>

<div class="card w-48 shadow-xl py-2" data-popup="languageMenuBox">
  <nav class="list-nav">
    <ul>
      {#each Object.entries(languages) as [k, v]}
        <li class:bg-primary-active-token={$lang === k}>
          <button class="w-full" on:click={() => lang.set(k)}>
            <span>{v.name}</span>
            <span class="text-xl text-white">{v.flag}</span>
          </button>
        </li>
      {/each}
    </ul>
  </nav>
  <div class="arrow bg-surface-100-800-token" />
</div>
