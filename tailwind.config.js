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
    extend: {
      colors: {
        primary: '#0071dc',
        primaryDark: '#0d346b',
        secondary: '#ffc220',
        accent: '#5fb446',
      },
    },
  },
  variants: {
    extend: { opacity: ['disabled'] },
  },
  plugins: [],
};
