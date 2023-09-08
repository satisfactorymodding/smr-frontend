import { join } from 'path';
import type { Config } from 'tailwindcss';

import { skeleton } from '@skeletonlabs/tw-plugin';

import colors from 'tailwindcss/colors';

import { customTheme } from './custom-theme'

const config = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    join(require.resolve(
        '@skeletonlabs/skeleton'),
      '../**/*.{html,js,svelte,ts}'
    )
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        flow: ['Flow']
      },
      colors: {
        gray: colors.neutral,
        lime: colors.lime,
      },
      screens: {
        'fhd': '1920px',
        '3xl': '2100px',
        'fhdx': {'max': '1920px'},
        '3xlx': {'max': '2100px'},
        '2xlx': {'max': '1535px'},
        'xlx': {'max': '1279px'},
        'lgx': {'max': '1023px'},
        'mdx': {'max': '767px'},
        'smx': {'max': '639px'},

      }
    }
  },
  plugins: [
    skeleton({
      themes: {
        custom: [customTheme]
      }
    })
  ],
} satisfies Config;

export default config;
