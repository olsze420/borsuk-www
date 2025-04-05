/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          'forest': {
            500: '#334119',
            700: '#32440f',
          },
          'earth': {
            300: '#6b6b47',
            500: '#535335',
          }
        },
        height: {
          '128': '32rem',
        },
        fontFamily: {
          'mono': ['Roboto Mono', 'monospace'],
        },
        boxShadow: {
          'card': '0 4px 6px rgba(0, 0, 0, 0.1)',
          'card-hover': '0 10px 25px rgba(0, 0, 0, 0.2)',
        },
        transitionProperty: {
          'transform': 'transform',
        },
      },
    },
    plugins: [],
  }