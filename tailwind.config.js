/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          100: '#F8F4F0',
          500: '#F8F4F0',
        },
        Grey: {
          100: '#F2F2F2',
          300: '#B3B3B3',
          500: '#696868',
          900: '#201F24',
        },
      },
    },
  },
  plugins: [],
}

