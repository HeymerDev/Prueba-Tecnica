/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 0px 16px #00000029;',
        'navbar': '0px 3px 16px #D1E8FF74;',
        'paginado': 'box-shadow: 0px 3px 16px #AAAAAA4D;',
        'alert': 'box-shadow: 0px 3px 10px #E6E6E6',
      },
      colors: {
        'Button-Red': '#DD3542',
      },
      borderColor: {
        'input': '#ABB9C780'
      },
      placeholderColor: {
        'gray': '#ABB9C780'
      }
    },
  },
  plugins: [],
}

