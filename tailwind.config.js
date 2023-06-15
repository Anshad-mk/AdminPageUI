/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    },
    screens:{
      'xs': '320px',    // Extra small screens and up
      'sm': '640px',    // Small screens and up
      'md': '768px',    // Medium screens and up
      'lg': '1024px',   // Large screens and up
      'xl': '1280px',   // Extra large screens and up
      '2xl': '1440px',  // 2 Extra large screens and up
      // Add your custom breakpoints here
      'md2':'943px'
    }
  },
  plugins: [],
}

