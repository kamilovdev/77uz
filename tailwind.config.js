/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'blurs': '0px 2px 28px 0px #17181A33',
        'custom-focus': '0px 8.83px 35.31px 0px #388FF370',
      },
      
    },
  },
  
  plugins: [],
}
