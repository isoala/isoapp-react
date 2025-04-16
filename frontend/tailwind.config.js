/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-blue': 'radial-gradient(600px at 270px 2833px, rgba(29, 78, 216, 0.15), transparent 80%)',
      },
      fontFamily: {
        'inter': ['__inter_20b187', '__inter_Fallback_20b187', ...require('tailwindcss/defaultTheme').fontFamily.sans],
        'sans': ['var(--secondary-font)', ...require('tailwindcss/defaultTheme').fontFamily.sans], 
        'system': ['var(--main-font)', ...require('tailwindcss/defaultTheme').fontFamily.sans], 
      }
    },
  },
  plugins: [],
}