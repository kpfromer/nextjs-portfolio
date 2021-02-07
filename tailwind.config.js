/* eslint-disable @typescript-eslint/no-var-requires */
const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

// TODO: https://github.com/leerob/leerob.io/blob/main/tailwind.config.js

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
        sans: ['Inter', ...fontFamily.sans],
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

      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
              code: { color: theme('colors.blue.400') },
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32],
            },
            code: { color: theme('colors.pink.500') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.600'),
              },
              code: { color: theme('colors.blue.400') },
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.300'),
            },
            'h2,h3,h4': {
              color: theme('colors.gray.100'),
              'scroll-margin-top': spacing[32],
            },
            hr: { borderColor: theme('colors.gray.700') },
            ol: {
              li: {
                '&:before': { color: theme('colors.gray.500') },
              },
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.500') },
              },
            },
            strong: { color: theme('colors.gray.300') },
            thead: {
              color: theme('colors.gray.100'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      animation: ['motion-safe', 'motion-reduce'],
    },
  },

  plugins: [require('@tailwindcss/typography')],
};
