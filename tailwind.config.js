/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0b5699",
        secondary: "#3a91ce",
        accent: "#2596be",
        light: "#6aabda",
        white: "#ffffff",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right bottom, rgba(11, 86, 153, 0.9), rgba(58, 145, 206, 0.8))',
      }
    },
  },
  plugins: [],
}
