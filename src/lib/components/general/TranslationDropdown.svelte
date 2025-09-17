<script lang="ts">
  import { getTolgee, getTranslate } from '@tolgee/svelte';
  import { writable } from 'svelte/store';
  import { browser } from '$app/environment';
  import { Popover } from '@skeletonlabs/skeleton-svelte';

  const tolgee = getTolgee(['language']);

  export const { t } = getTranslate();

  let openState = $state(false);

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
</script>

<button
  class="preset-tonal-primary border-primary-500 btn btn-sm grid grid-flow-col border"
  onclick={() => (openState = !openState)}>
  <span>{languages[$lang].name}</span>
  <span class={`text-xl ${languages[$lang]?.style ?? defaultFlagTextStyle}`}>{languages[$lang].flag}</span>
</button>

<Popover
  open={openState}
  onOpenChange={(e) => (openState = e.open)}
  positioning={{ placement: 'bottom' }}
  contentBase="card w-56 overflow-y-auto scroll-smooth py-2 shadow-xl">
  {#snippet content()}
    <nav class="list-nav">
      <ul>
        {#each Object.entries(languages) as [k, v]}
          <li class:preset-filled-primary-500={$lang === k}>
            <button class="w-full" onclick={() => lang.set(k)}>
              <span>{v.name}</span>
              <span class="text-xl {v?.style ?? defaultFlagTextStyle}">{v.flag}</span>
            </button>
          </li>
        {/each}
      </ul>
    </nav>
  {/snippet}
</Popover>
