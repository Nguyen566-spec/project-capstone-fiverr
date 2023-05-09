/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily : {
      nunito : ['Nunito Sans', 'sans-serif'],
      sans : ['Source Sans Pro', 'sans-serif'],
    },
    fontSize: {
      'font-10': '0.625rem',
      'font-14': '0.875rem',
      'font-18': '1.125rem',
      'font-20': '1.25rem',
      'font-30': '1.875rem',
      'font-32': '2rem'
    },
    colors : {
      'color-green-light': '#1dbf73',
      'color-green':'#19a463',
      'color-black': '#222325',
      'color-black-light': '#404145',
      'color-gray': '#74767e',
      'color-gray-light': '#62646a',
      'color-gray-light-2': '#b5b6ba',
      'color-white': '#fff',
      'color-white-light' : '#e4e5e7',
      'color-green-dark': '#003912',
      'color-puple-dark': '#0d084d',
      'color-puple':' #1e1692',
      'color-puple-light': '#446ee7',
    }
  },
  plugins: [],
}


  //font
