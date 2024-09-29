/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'mainBlue':'#003f62',
        'mainYellow':'#eda415',
        'mainRed':'#c33131',
        'blackTextColor':'#292d32',
        'whiteTextColor':'#ffffff',
        'blueTextColor':'#1b5a7d',
        'lightBlue':'#e2f4ff',
        'lightGreen':'#30bd57'

      }
    },
  },
  plugins: [],
}

