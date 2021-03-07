module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx', './utils/**/*.tsx'],
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

      keyframes: {
        'grow-and-shrink': {
          '0%, 100%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' },
        },
        'star-spin': {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(180deg)',
          },
        },
      },
      animation: {
        'grow-and-shrink': 'grow-and-shrink 700ms forwards',
        'star-spin': 'star-spin 1000ms linear',
      },

      gridTemplateColumns: {
        experience: 'auto 64px',
      },
    },
  },
  variants: {
    extend: {
      animation: ['motion-safe', 'motion-reduce'],
    },
  },
  plugins: [],
};
