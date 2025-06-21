import type { LayoutLoad } from './$types';
import { initializeGraphQLClient } from '$lib/core';
import { DevTools, FormatSimple, LanguageDetector, Tolgee } from '@tolgee/svelte';
import { browser } from '$app/environment';
import { PUBLIC_TOLGEE_API_KEY, PUBLIC_TOLGEE_API_URL } from '$env/static/public';

import enCommon from '../i18n/common/en.json';
import deCommon from '../i18n/common/de.json';
import esCommon from '../i18n/common/es.json';
import huCommon from '../i18n/common/hu.json';
import itCommon from '../i18n/common/it.json';
import koCommon from '../i18n/common/ko.json';
import frCommon from '../i18n/common/fr.json';
import lvCommon from '../i18n/common/lv.json';
import mtCommon from '../i18n/common/mt.json';
import nlCommon from '../i18n/common/nl.json';
import ptBrCommon from '../i18n/common/pt-BR.json';
import plCommon from '../i18n/common/pl.json';
import ruCommon from '../i18n/common/ru.json';
import zhHansCommon from '../i18n/common/zh-Hans.json';
import zhHantCommon from '../i18n/common/zh-Hant.json';

export const prerender = 'auto';

export const load: LayoutLoad = async ({ fetch }) => {
  const client = initializeGraphQLClient(fetch);

  let chainer = Tolgee().use(FormatSimple());

  if (browser) {
    chainer = chainer.use(LanguageDetector()).use(DevTools());
  }

  const tolgee = chainer.init({
    defaultNs: 'common',

    defaultLanguage: 'en',
    fallbackLanguage: 'en',

    apiUrl: browser ? PUBLIC_TOLGEE_API_URL : undefined,
    apiKey: browser ? PUBLIC_TOLGEE_API_KEY : undefined,

    // Be sure to also update TranslationDropdown.svelte when adding entries here
    staticData: {
      'en:common': enCommon,
      'de:common': deCommon,
      'es:common': esCommon,
      'fr:common': frCommon,
      'hu:common': huCommon,
      'it:common': itCommon,
      'ko:common': koCommon,
      'lv:common': lvCommon,
      'mt:common': mtCommon,
      'nl:common': nlCommon,
      'pt-BR:common': ptBrCommon,
      'pl:common': plCommon,
      'ru:common': ruCommon,
      'zh-Hans:common': zhHansCommon,
      'zh-Hant:common': zhHantCommon
    }
  });

  if (!browser) {
    await tolgee.run();
  }

  return {
    client,
    tolgee
  };
};
