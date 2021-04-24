const sveltePreprocess = require('svelte-preprocess');
const adapterNode = require('@sveltejs/adapter-node');
const adapterStatic = require('@sveltejs/adapter-static');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    postcss: true
  }),
  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: process.env.SVELTE_ADAPTER === 'node' ? adapterNode({
      out: 'build/node'
    }) : adapterStatic({
      pages: 'build/static',
      assets: 'build/static'
    }),

    ssr: true,

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',

    vite: {
      ssr: {
        noExternal: ['node-fetch', '@urql/svelte']
      },
      optimizeDeps: {
        exclude: ["@urql/svelte"]
      }
    },

    paths: {
      base: process.env.SVELTE_BASE_PATH || '',
      assets: process.env.SVELTE_BASE_PATH || ''
    }
  }
};
