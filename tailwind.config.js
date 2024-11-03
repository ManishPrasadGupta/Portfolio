/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hero-gradient-from': '#ff7e5f', // Example starting color
        'hero-gradient-to': '#feb47b',   // Example ending color
      },
    },
  },
  plugins: [],
}

