/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#263238",
      secondary: "#8F95A5",
      black: "#000000",
      white: "#FFFFFF",
      "gray-light": "#F5F5F5",
      "gray-dark": "#EEEEEE",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {},
  },
  plugins: [],
};
