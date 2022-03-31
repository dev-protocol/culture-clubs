const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Syne', 'sans-serif'],
        logo: ['Glorify-Black', 'sans-serif']
      },
      colors: {
        link: '#AFA391',
        grey: '#BDBDBD',
        silver: '#91A1AF',
        gold: '#AFA391',
        bg: '#FFDBD0',
        orange: '#FE8761'
      },
      spacing: {
        sm: '1rem',
        md: '2rem',
        lg: '3rem',
        xl: '4rem'
      },
      keyframes: {
        loopFront: {
          '0%': {
            transform: 'translateX(100%)'
          },
          to: {
            transform: 'translateX(-100%)'
          }
        },
        loopBack: {
          '0%': {
            transform: 'translateX(0)'
          },
          to: {
            transform: 'translateX(-200%)'
          }
        }
      }
    }
  },
  plugins: []
}
