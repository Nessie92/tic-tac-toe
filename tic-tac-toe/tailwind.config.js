/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '3': 'repeat(3, 100px)', // 3 columns each 100px wide
      },
      gridTemplateRows: {
        '3': 'repeat(3, 100px)', // 3 rows each 100px high
      },
    },
  },
  plugins: [],
}

