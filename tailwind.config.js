/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
    
  ],

  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'color-principal':'#2406CE',
        'color-secundario-1':'#6F6FEF',
        'color-secundario-2':'#05055E',
        'color-gradiente':'bg-gradient-to-r from-color-secundario-1 via-color-principal to-color-secundario-2"'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

