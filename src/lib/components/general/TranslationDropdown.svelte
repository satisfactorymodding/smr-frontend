<script lang="ts">
  import { getTolgee, getTranslate } from '@tolgee/svelte';
  import { writable } from 'svelte/store';

  const tolgee = getTolgee(['language']);

  export const { t } = getTranslate();

  const languages = {
    en: 'English',
    de: 'Deutsch',
    fr: 'Français',
    lv: 'Latviešu'
  };

  const lang = writable<string>(localStorage.getItem('language') || $tolgee.getLanguage());
  lang.subscribe((l) => {
    $tolgee.changeLanguage(l);
    localStorage.setItem('language', l);
  });
</script>

<div class="darker-please mr-3 max-h-1/2">
  <select bind:value={$lang} class="select">
    {#each Object.entries(languages) as lang}
      <option value={lang[0]}>{lang[1]}</option>
    {/each}
  </select>
</div>
