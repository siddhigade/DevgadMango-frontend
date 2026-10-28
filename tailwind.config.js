/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        brand: '#F5821F',
        brandDark: '#D66E0F',
        gold: '#D4A017',
        maroon: '#3D1F12',
        cream: '#FFF8F0',
        ink: '#2A2420',
        sand: '#FFFFFF',
        sandDeep: '#F2E6D2',
        laterite: '#F5821F',
        lateriteDark: '#D66E0F',
        sahyadri: '#2A2420',
        sahyadriDark: '#1A1512',
        mango: '#D4A017',
        sea: '#3D1F12',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Work Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};