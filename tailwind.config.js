/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#1F2937',
        whiteText: '#F2F2F2',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

