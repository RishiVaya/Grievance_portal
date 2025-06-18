
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1.2s ease forwards',
        'bounce': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: '0', transform: 'translateY(10px)'},
          '100%': {opacity: '1', transform: 'translateY(0)'}
        },
      },
    },
  },
  plugins: [],
}
