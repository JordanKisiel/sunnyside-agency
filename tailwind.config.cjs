/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.html"],
  theme: {
    screens:{
      'sm': '450px',
      'md': '550px',
      'lg': '700px',
      'xl': '950px',
      '2xl': '1100px',
      '3xl': '1300px',
      '4xl': '1440px',
      '5xl': '1800px'
    },
    colors:{
      transparent: 'transparent',
      softRed: 'hsl(7, 99%, 70%)',
      yellow: 'hsl(51, 100%, 49%)',
      skyBlue: '#3dbeff',
      darkDesatCyan: 'hsl(167, 40%, 24%)',
      darkBlue: 'hsl(198, 62%, 26%)',
      darkModerateCyan: 'hsl(168, 34%, 41%)',
      lightModerateCyan: '#90d4c5',
      veryDarkDesatBlue: 'hsl(212, 27%, 19%)',
      veryDarkGrayBlue: 'hsl(213, 9%, 39%)',
      darkGrayBlue: 'hsl(232, 10%, 55%)',
      grayBlue: 'hsl(210, 4%, 67%)',
      white: 'hsl(0, 0%, 100%)'
    },
    fontFamily:{
      'sans': ['Barlow', 'sans-serif'],
      'serif': ['Fraunces', 'serif'],
      'display': ['Fraunces', 'serif'],
      'body': ['Barlow', 'sans-serif']
    },
    extend: {
      
    },
  },
  plugins: [],
}
