/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm':{'min':'0', 'max':'700px'},
      'md': { 'min': '701px', 'max': '900px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': { 'min': '900px', 'max': '1400px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': { 'min': '1400px','max':'1650px' },
      '2xl': {'min':'1651'}
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
    },
  },
  plugins: [],
}