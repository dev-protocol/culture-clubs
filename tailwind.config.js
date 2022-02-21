module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      fontFamily: {
        body: ['Syne', 'sans-serif']
      },
      colors: {
        link: '#AFA391',
        grey: '#BDBDBD',
        silver: '#91A1AF',
        gold: '#AFA391',
        asamurasaki: '#A091AF',
      },
      spacing: {
        sm: '1rem',
        md: '2rem',
        lg: '3rem',
        xl: '4rem'
      },
    },
  },
  plugins: [],
}
