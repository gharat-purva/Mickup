/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'purple': '#524cf0',
        'light-purple': '#e6e0f6',
        'lesser-black': '#191919',
        'white': '#ffffff',
        'gray': '#878787',
        'dark-white': '#f5f5f5',
        'light-gray': '#d9d9d9',
        success: {
          light: '#cdfede',
          dark: '#04ae3e',
        },
        waiting: {
          light: '#fcd9cf',
          dark: '#f1663e',
        },

      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
