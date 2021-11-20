/* eslint-disable @typescript-eslint/no-var-requires */
const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
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
        naturalGray: {
          400: '#535353',
          500: '#1e1e1e',
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
      gridTemplateColumns: {
        experience: 'auto 64px',
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
            // Disables pre styling in favor of my custom styling defined in the code block component
            pre: false,
            table: {
              'border-collapse': 'collapse',
            },
            tr: {
              'border-width': '1px',
              'border-style': 'solid',
              'border-color': theme('colors.gray.700'),
              // TODO: dark mode?
            },
            th: {
              'border-width': '1px',
              'border-style': 'solid',
              'border-color': theme('colors.gray.700'),
            },
            td: {
              'border-width': '1px',
              'border-style': 'solid',
              'border-color': theme('colors.gray.700'),
            },
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
            'h1,h2,h3,h4': {
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
  plugins: [require('@tailwindcss/typography')],
};
