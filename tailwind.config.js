/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
       colors: {
        'custom-637fa7': '#637fa7',
        'custom-FFF86D': '#FFF86D',
        'custom-#121212': '#121212',
      },
      screens: {
         'hide-img': '1300px',
        'custom-md': '890px',  // You can change the name and size
        'custom-lg': '1300px'
      }
  },
  plugins: [],
  }
}