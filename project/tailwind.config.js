/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        indigo: {
          primary: '#012A5E',
          secondary: '#00A9E0',
          accent: '#FF7D00',
          light: '#E8F3FF',
          dark: '#001B3F'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
};