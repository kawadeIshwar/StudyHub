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
        'custom-lg': '1300px',
        'custom-lg': '1100px',
        'min-xs': '645px',
      },
       animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slideUp: 'slideUp 1s ease-in-out',
      },
       keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
  },
  plugins: [],
  },
}
