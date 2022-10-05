/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'peque': { 'raw': '(max-height: 499px) and (max-width: 425px)' },
      }
    },
  },
  plugins: [],
}