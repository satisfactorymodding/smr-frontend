import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';

const mode = process.env.NODE_ENV || 'development';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [tailwindcss(), sveltekit()],
  server: {
    port: 3000,
    strictPort: true
  },
  ssr: {
    noExternal: ['custom-protocol-check']
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
          if (id.includes('zod') || id.includes('felte')) {
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
      }
    }
  }
};

export default config;
