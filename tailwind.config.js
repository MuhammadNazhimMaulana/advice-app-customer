const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */


module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#ffff',
        'secondary': '#010101'
      },
    },
  },
  plugins: [],
})

