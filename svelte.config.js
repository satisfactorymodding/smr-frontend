import sveltePreprocess from 'svelte-preprocess';
import adapterBun from 'svelte-adapter-bun';
import adapterStatic from '@sveltejs/adapter-static';

const mode = process.env.NODE_ENV || 'development';
const dev = mode === 'development' || process.env.RUNTIME === 'development';
process.env.TAILWIND_MODE = dev ? 'watch' : 'build';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    postcss: true,
    sourceMap: true
  }),

  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: process.env.SVELTE_ADAPTER === 'node' ? adapterBun({
      out: 'build/node',
    }) : adapterStatic({
      pages: 'build/static',
      assets: 'build/static',
      fallback: 'index.html'
    }),

    paths: {
      base: process.env.SVELTE_BASE_PATH || ''
    }
  }
};

export default config;
