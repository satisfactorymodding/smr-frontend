<script lang="ts">
  import { getTolgee, getTranslate } from '@tolgee/svelte';
  import { writable } from 'svelte/store';
  import { type PopupSettings, popup } from '@skeletonlabs/skeleton';
  import { browser } from '$app/environment';

  const tolgee = getTolgee(['language']);

  export const { t } = getTranslate();

  type language = {
    name: string;
    flag: string;
    style?: string;
  };

  const defaultFlagTextStyle = 'text-white';

  // Be sure to also update /routes/+layout.svelte when adding entries here
  // cspell:disable
  const languages: Record<string, language> = {
    en: {
      name: 'English',
      flag: '🇺🇳'
    },
    de: {
      name: 'Deutsch',
      flag: '🇩🇪',
      style: 'text-black' // Bug in something? text color affects the top stripe of the DE flag
    },
    es: {
      name: 'Español',
      flag: '🇪🇸'
    },
    fr: {
      name: 'Français',
      flag: '🇫🇷'
    },
    hu: {
      name: 'Magyar',
      flag: '🇭🇺'
    },
    it: {
      name: 'Italiano',
      flag: '🇮🇹'
    },
    ko: {
      name: '한국어',
      flag: '🇰🇷'
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
    'pt-BR': {
      name: 'Português (Brasil)',
      flag: '🇧🇷'
    },
    pl: {
      name: 'Polski',
      flag: '🇵🇱'
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
  // cspell:enable

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

<button class="variant-ghost-primary btn btn-sm grid grid-flow-col" use:popup={languageMenuBox}>
  <span>{languages[$lang].name}</span>
  <span class={`text-xl ${languages[$lang]?.style ?? defaultFlagTextStyle}`}>{languages[$lang].flag}</span>
</button>

<div class="card w-56 overflow-y-auto scroll-smooth py-2 shadow-xl" data-popup="languageMenuBox">
  <nav class="list-nav">
    <ul>
      {#each Object.entries(languages) as [k, v]}
        <li class:bg-primary-active-token={$lang === k}>
          <button class="w-full" on:click={() => lang.set(k)}>
            <span>{v.name}</span>
            <span class="text-xl {v?.style ?? defaultFlagTextStyle}">{v.flag}</span>
          </button>
        </li>
      {/each}
    </ul>
  </nav>
  <div class="bg-surface-100-800-token arrow" />
</div>
