const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./theme/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['BerkeleyMono', ...defaultTheme.fontFamily.mono]
      },
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            },
            'code': {
              padding: '2px 5px',
              backgroundColor: '#f3f4f6',
              border: 'solid 1px #e1e4e5',
              borderRadius: '0.25em'
            },
            'pre': {
              padding: '0px !important',
              fontSize: '1em !important'
            }
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

