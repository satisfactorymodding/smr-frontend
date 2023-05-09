import { sveltekit } from '@sveltejs/kit/vite';
import terser from '@rollup/plugin-terser';

const mode = process.env.NODE_ENV || 'development';
const dev = mode === 'development' || process.env.RUNTIME === 'development';
process.env.TAILWIND_MODE = dev ? 'watch' : 'build';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  ssr: {
    noExternal: [
      'node-fetch',
      '@urql/svelte',
      '@cfworker/json-schema',
      'dompurify',
      'custom-protocol-check',
      '@felte/common',
      '@material/animation',
      '@material/base',
      '@material/button',
      '@material/card',
      '@material/checkbox',
      '@material/circular-progress',
      '@material/data-table',
      '@material/density',
      '@material/dialog',
      '@material/dom',
      '@material/drawer',
      '@material/elevation',
      '@material/fab',
      '@material/floating-label',
      '@material/form-field',
      '@material/icon-button',
      '@material/layout-grid',
      '@material/line-ripple',
      '@material/list',
      '@material/menu',
      '@material/menu-surface',
      '@material/notched-outline',
      '@material/ripple',
      '@material/rtl',
      '@material/select',
      '@material/shape',
      '@material/switch',
      '@material/textfield',
      '@material/theme',
      '@material/tokens',
      '@material/top-app-bar',
      '@material/touch-target',
      '@material/typography'
    ]
  },
  optimizeDeps: {
    exclude: ['@urql/svelte', 'custom-protocol-check']
  },
  mode,
  build: {
    sourcemap: true,
    target: ['es2020'],
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('jszip')) {
            return 'jszip';
          }
          if (
            id.includes('zod') ||
            id.includes('felte') ||
            id.includes('@smui/textfield') ||
            id.includes('@smui/select') ||
            id.includes('@smui/data-table') ||
            id.includes('@smui/floating-label')
          ) {
            return 'forms';
          }
          if (
            id.includes('marked') ||
            id.includes('prismjs') ||
            id.includes('dompurify') ||
            id.includes('jsdom') ||
            id.includes('@cfworker/json-schema')
          ) {
            return 'extras';
          }
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      },
      plugins: [
        ...(mode !== 'development'
          ? [
              terser({
                format: {
                  comments: false
                },
                compress: false
              })
            ]
          : [])
      ]
    }
  }
};

export default config;
