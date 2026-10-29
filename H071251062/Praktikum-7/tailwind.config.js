/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#fbf7f4',
          100: '#f5eee6',
          200: '#ebd9cb',
          300: '#dcbeaa',
          400: '#c69a7f',
          500: '#b0795c',
          600: '#945f44',
          700: '#774a36',
          800: '#5c392b',
          900: '#432a21',
          950: '#251510',
        },
      },
    },
  },
  plugins: [],
};
