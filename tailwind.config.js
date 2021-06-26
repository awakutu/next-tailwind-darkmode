  // tailwind.config.js
  module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
     darkMode: 'class', // or 'media' or 'class'
     theme: {
      extend: {
        typography: (theme) => ({
          dark: {
            css: {
              color: theme('colors.gray.300'),
              h1: {
                color: theme('colors.gray.100'),
              },
              h2: {
                color: theme('colors.gray.100'),
              },
            },
          },
        }),
      },
     },
     variants: {
      typography: ['dark'],
     },
     plugins: [require('@tailwindcss/typography')],
   }