module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          200: '#eeb781',
          300: '#ebab6c',
          400: '#e69342',
          500: '#e3872d',
          600: '#cc7a29',
          700: '#9f5f1f',
        },
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
