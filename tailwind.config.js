/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter var', 'sans-serif'], // Add your custom font here
      }
    },
  },
  plugins: [],
}

