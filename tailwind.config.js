/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        greyline : '#3F3F3F',
        greyform: '#F5F5F5',
        carname: '#333333',
        darkgray: '#808080',
      },
      fontFamily: {
        poppins:['Poppins'],
        brunoace:['Bruno Ace'],
      },
    },
  },
  plugins: [],
}

