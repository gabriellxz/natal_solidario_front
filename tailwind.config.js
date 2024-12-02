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
          200: "#f2f3f3"
        },
        darkChristmas: {
          100: "#565656",
          200: "#404040"
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}