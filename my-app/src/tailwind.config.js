/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#F48700',
        secondary: '#A37319',
        tertiary: '#E5CF8C',
        black: '#000',
        white: '#FFF',
      },
      fontFamily: {
        'AustieBost': ['AustieBost'],
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}

