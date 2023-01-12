/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: '"SF Pro Display", -apple-system, BlinkMacSystemFonr, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      },
      fontSize: {
        md: "1.6rem",
        lg: "2.2rem",
        "5xl": "8rem",
      },
      colors: {
        background: "#000212",
      },
    },
  },
  plugins: [],
};
