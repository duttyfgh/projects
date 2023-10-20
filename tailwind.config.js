/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Добавьте ваш пользовательский класс
      styles: {
        '.smooth-scroll': {
          scrollBehavior: 'smooth',
        },
      },
    },
  },
  plugins: [],
}