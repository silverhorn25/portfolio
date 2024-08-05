/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'dark-grey': '#121212', // Replace with your desired dark grey color code
      'primary-grey': '#1F1B24',
    },
  },
  },
  plugins: [],
}

