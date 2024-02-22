/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      customBG: '#3e678a',
      customHeading: '#fff8cf',
      customSubtext: '#fff8cf',
      customText: '#fff8cf',
      customTitle: '#fff8cf',
      customLine: '#e8ddcc',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

