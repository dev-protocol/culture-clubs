const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Syne', 'sans-serif'],
        accent: ['Clever-Medium', 'sans-serif'],
        logo: ['Glorify-Black', 'sans-serif']
      },
      // fontSize: {
      //   xs: '12px',
      //   sm: '18px',
      //   base: '24px',
      //   lg: '36px',
      //   xl: '48px',
      //   '2xl': '60px',
      //   '3xl': '144px'
      // },
      fontSize: {
        accent: '144px'
      },
      colors: {
        link: '#AFA391',
        grey: '#BDBDBD',
        silver: '#91A1AF',
        gold: '#AFA391',
        bg: '#FFC09C'
      },
      spacing: {
        sm: '1rem',
        md: '2rem',
        lg: '3rem',
        xl: '4rem'
      },
      gridTemplateColumns: {
        milestone: '2rem 1rem 1fr'
      }
    }
  },
  plugins: []
}
