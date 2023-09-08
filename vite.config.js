import { sveltekit } from '@sveltejs/kit/vite';
import terser from '@rollup/plugin-terser';

const mode = process.env.NODE_ENV || 'development';
const dev = mode === 'development' || process.env.RUNTIME === 'development';
process.env.TAILWIND_MODE = dev ? 'watch' : 'build';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  server: {
    port: 3000,
    strictPort: true
  },
  ssr: {
    noExternal: ['node-fetch', '@cfworker/json-schema', 'dompurify', 'custom-protocol-check']
  },
  optimizeDeps: {
    exclude: ['custom-protocol-check']
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
            id.includes('felte')
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
