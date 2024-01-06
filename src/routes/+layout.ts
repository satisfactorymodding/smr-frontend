import type { LayoutLoad } from './$types';
import { initializeGraphQLClient } from '$lib/core';
import { DevTools, FormatSimple, LanguageDetector, Tolgee } from '@tolgee/svelte';
import { browser } from '$app/environment';
import { PUBLIC_TOLGEE_API_KEY, PUBLIC_TOLGEE_API_URL } from '$env/static/public';

import deCommon from '../i18n/common/de.json';
import enCommon from '../i18n/common/en.json';
import frCommon from '../i18n/common/fr.json';
import itCommon from '../i18n/common/it.json';
import lvCommon from '../i18n/common/lv.json';
import mtCommon from '../i18n/common/mt.json';
import nlCommon from '../i18n/common/nl.json';
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

    staticData: {
      'de:common': deCommon,
      'en:common': enCommon,
      'fr:common': frCommon,
      'it:common': itCommon,
      'lv:common': lvCommon,
      'mt:common': mtCommon,
      'nl:common': nlCommon,
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
