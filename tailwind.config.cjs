/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/App.jsx','./src/**/*.{js,jsx}'],
  theme: {
    extend: {},
    colors:{
      'light-purple': 'rgb(169, 169, 231)',
      'dark-purple': 'rgb(156, 50, 255)',
      'white' : '#fff'
      }
  },
  plugins: [],
}
