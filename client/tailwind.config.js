/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'black': "#494B4E",
      'grey': "#E2EAF1",
      'darkgrey': '#989898',
      'pink': '#FEC5BB',
      'light-pink': '#F8EDEB',
      'pale-green': '#E8E8E4',
      'green': '#D8E2DC',
      'orange': '#FFD7BA', 
      'red-100': "#fee2e2",
      'red-400': "#f87171",
      'red-700': "#b91c1c",
      'green-100': "#ecfccb",
      'green-400': '#a3e635',
      'green-700': "#4d7c0f",
    },
    extend: {
      fontFamily: {
      'montserrat': ['Montserrat'],
    },},
  },
  plugins: [],
}