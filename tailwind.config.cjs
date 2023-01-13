/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: '"SF Pro Display", -apple-system, BlinkMacSystemFonr, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    },
    fontSize: {
      md: "1.6rem",
      lg: ["2.2rem", "1.3"],
      "5xl": ["8rem", "1"],
    },
    colors: {
      white: "#fff",
      background: "#000212",
    },
  },
  plugins: [],
};
