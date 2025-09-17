import type { Config } from 'tailwindcss';

const config = {
  mode: 'jit',
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        flow: ['Flow']
      },
      screens: {
        fhd: '1920px',
        '3xl': '2100px',
        fhdx: { max: '1920px' },
        '3xlx': { max: '2100px' },
        '2xlx': { max: '1535px' },
        xlx: { max: '1279px' },
        lgx: { max: '1023px' },
        mdx: { max: '767px' },
        smx: { max: '639px' }
      }
    }
  },
} satisfies Config;

export default config;
