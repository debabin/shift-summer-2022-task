/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'greenBackground':"url('/src/img/backgroundGreen.jpg')",
      },
      screens: {
        'xs':'640px'
      },
      height: {
        '350': '350px'
      },
      colors: {
        'gray-dark': '#121111f7',
        'gray': '#333',
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.backface-visible': {
          'backface-visibility': 'visible',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.transition-transform-180': {
          'transform': 'rotateY(180deg)'
        },
        '.transition-transform-3d': {
          'transition': 'transform 0.8s',
          'transform-style': 'preserve-3d'
        }
      })
    })
  ]
}

