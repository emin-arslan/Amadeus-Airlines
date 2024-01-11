/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {

      'md': { 'min': '0px', 'max': '900px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': { 'min': '900px', 'max': '1100px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': { 'min': '1101px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
    },
  },
  plugins: [],
}