/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    debugScreens: {
      position: ['top', 'left'],
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
};
