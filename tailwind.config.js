/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueChristmas: {
          100: "#C8DDFF"
        },
        whiteChristmas: {
          100: "#fff",
          200: "#f2f3f3",
          300: "#F4F7FE",
          400: "#A3AED0"
        },
        darkChristmas: {
          100: "#565656",
          200: "#404040",
          300: "#2B3674"
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ["Inter", "sans-serif"],
        dmsans: ["DM sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}