const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    "./src/**/*.{html,js,svelte,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        flow: ['Flow']
      },
      colors: {
        gray: colors.trueGray,
        lime: colors.lime,
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
