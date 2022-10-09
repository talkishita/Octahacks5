/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        azonix: ['Azonix', 'sans-serif'],
      },
    },
    debugScreens: {
      position: ['top', 'left'],
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
};
