/** @type {import('tailwindcss').Config} */
const {heroui} = require("@heroui/react");

export default {
  
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",  "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",,],
  theme: {
    extend: {
      colors: {
        lighten:"#f7f1e9",
        light:"#e0c092",
        mid:"#c9a777",
        orangedark:"#942d01",
        orangeLight:"#bf3d06",
        graybase:"#b39a81",
        dark:"#8c7053",
        darken:"#5e4f39",
      },
      boxShadow: {
        'custom-light': '0 2px 4px -2px rgba(16, 24, 40, 0.06)',
        'custom-dark': '0px 4px 8px -2px rgba(16, 24, 40, 0.1)',
      },
      fontFamily: {
        'amita': ['"Amita"', 'cursive'], 
        'josefin': ['"Josefin Sans"', 'sans-serif'],
         'roboto': ['Roboto', 'sans-serif'],
      },
    }
  },
  plugins: [heroui()]
}
