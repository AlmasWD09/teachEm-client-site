/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        'primary':'#2563eb', // blue-600
        'primaryGray':'#eff6ff',// blue-50
        'secondery':'#60a5fa',// blue-400
        'seconderyGray':'#dbeafe',// blue-100
      },
      fontFamily: {
        'Urbanist': "'Urbanist, 'sans-serif'",
      },
      backgroundImage: {
        'hero-bg': "url('/Public/study.jpg')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

