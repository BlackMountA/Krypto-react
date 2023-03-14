/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/App.jsx','./src/**/*.{js,jsx}'],
  theme: {
    extend: {},
    colors:{
      'light-purple': 'rgb(169, 169, 231)',
      'dark-purple': 'rgb(116, 34, 192)',
      'white' : '#fff',
      
    },
    screens: {
      'xxs': '250px',
      'xs': '420px',
      'xsm': '500px',
      'sm': '600px',
      'md' : '800px',
      "lg": "1024px"
    },
    width: {
      '1/2': '50%',
      '7': '1.75rem',
      '24': '6rem',
      '56': '14rem',
      '60': '15rem',
      '70': '70%',
      '72': '18rem',
      '80': '20rem',
      '96': '24rem',
      '85': '85%',
      'full': '100%'
    },
    boxShadow: {
      '3xl': 'inset 300px 0 0 0 rgb(116, 34, 192)',
      '4xl': 'inset 300px 0 0 0 rgb(255, 255, 255)'
    },
    

  },
  plugins: [],
}
