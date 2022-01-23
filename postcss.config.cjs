const postcssPresetEnv = require('postcss-preset-env');
const tailwindCSS = require('tailwindcss');
const tailwindCSSNesting = require('tailwindcss/nesting');
// ^ Just for now, will merge to tailwindcss. Check https://blog.tailwindcss.com/just-in-time-the-next-generation-of-tailwind-css
const autoprefixer = require('autoprefixer');
const importUrl = require('postcss-import-url');

module.exports = {
  plugins: [
    postcssPresetEnv({
      stage: 4,
      features: {
        'nesting-rules': true
      }
    }),

    importUrl({
      modernBrowser: true
    }),
    tailwindCSSNesting(),
    tailwindCSS(),
    autoprefixer,
  ],
};
