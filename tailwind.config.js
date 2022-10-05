/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "teal-dark": "#8AAAA5",
        "teal-light": "#E2EEEC",
        "tan-dark": "#A5956D",
        "tan-light": "#CABD9A",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        cursive: ["cursive", "sans-serif"]
      },
    },
  },
  plugins: [],
};
