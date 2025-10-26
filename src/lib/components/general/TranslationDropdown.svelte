<script lang="ts">
  import { getTolgee, getTranslate } from '@tolgee/svelte';
  import { writable } from 'svelte/store';
  import { browser } from '$app/environment';
  import { Popover, Portal } from '@skeletonlabs/skeleton-svelte';

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
</script>

<Popover>
  <Popover.Trigger class="btn grid grid-flow-col border border-primary-500 preset-tonal-primary btn-sm">
    <span>{languages[$lang].name}</span>
    <span class={`text-xl ${languages[$lang]?.style ?? defaultFlagTextStyle}`}>{languages[$lang].flag}</span>
  </Popover.Trigger>
  <Portal>
    <Popover.Positioner>
      <Popover.Content class="max-w-md space-y-2 card bg-surface-100-900 p-4 shadow-xl">
        <Popover.Description>
          <nav class="list-nav">
            <ul>
              {#each Object.entries(languages) as [k, v] (k)}
                <li class:preset-filled-primary-500={$lang === k}>
                  <button class="w-full" onclick={() => lang.set(k)}>
                    <span>{v.name}</span>
                    <span class="text-xl {v?.style ?? defaultFlagTextStyle}">{v.flag}</span>
                  </button>
                </li>
              {/each}
            </ul>
          </nav>
        </Popover.Description>
        <Popover.Arrow
          style="--arrow-size: calc(var(--spacing) * 2); --arrow-background: var(--color-surface-100-900);">
          <Popover.ArrowTip />
        </Popover.Arrow>
      </Popover.Content>
    </Popover.Positioner>
  </Portal>
</Popover>
