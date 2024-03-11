/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Moderateviolet': 'hsl(263, 55%, 52%)',
        'Verydarkgrayish-blue': 'hsl(217, 19%, 35%)',
        'Verydarkblackish-blue': 'hsl(219, 29%, 14%)',
        'White': 'hsl(0, 0%, 100%)',
        'Light-gray': 'hsl(0, 0%, 81%)',
        'Light-grayish-blue': 'hsl(210, 46%, 95%)',

        'Red': 'hsl(0, 78%, 62%)',
        'Cyan': 'hsl(180, 62%, 55%)',
        'Orange': 'hsl(34, 97%, 64%)',
        'Blue': 'hsl(212, 86%, 64%)',
        'Very-Dark-Blue': 'hsl(234, 12%, 34%)',
        'Grayish-Blue': 'hsl(229, 6%, 66%)',
        'Very-Light-Gray': 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
}