const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: true,
  theme: {
    screens: {
      xs: { max: '639px' },
      ...defaultTheme.screens,
    },
    extend: {},
  },
  variants: {
    extend: { opacity: ['disabled'] },
  },
  plugins: [],
};
