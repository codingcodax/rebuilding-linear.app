/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: '"SF Pro Display", -apple-system, BlinkMacSystemFonr, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    },
    fontSize: {
      sm: '1.4rem',
      md: '1.6rem',
      lg: ['2.2rem', '1.3'],
      xl: '2.4rem',
      '2xl': '2.6rem',
      '3xl': '3.2rem',
      '4xl': '4.0rem',
      '5xl': '4.4rem',
      '6xl': '4.8rem',
      '7xl': ['8rem', '1'],
    },
    colors: {
      white: '#fff',
      background: '#000212',
      grey: '#858699',
      'grey-dark': '#222326',
    },
    backgroundImage: {
      'primary-gradient':
        'linear-gradient(92.83deg, #455eb5 9.16%, #5643cc 43.89%, #673fd7 64.72%)',
    },
    boxShadow: {
      primary: 'rgb(80 63 205 / 50%) 0px 1px 40px',
    },
    spacing: {
      0: '0',
      1: '0.4rem',
      2: '0.8rem',
      3: '1.2rem',
      4: '1.6rem',
      5: '2.0rem',
      6: '2.4rem',
      7: '2.8rem',
      8: '3.2rem',
      9: '3.8rem',
      10: '4.0rem',
      11: '4.4rem',
      12: '4.8rem',
    },
    screens: {
      md: '660px',
      lg: '1001px',
    },
  },
  plugins: [],
};
