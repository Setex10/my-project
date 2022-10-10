/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'movilS' : '320px',
        'movilM' : '375px',
        'movilL' : '425px',
        'tablet' : '768px',
        'laptop' : '1024px',
        'laptopL' : '1440px'
      },
    },
  },
  plugins: [],
}
