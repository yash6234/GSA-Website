/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          serif: ['Playfair Display', 'Georgia', 'serif'],
        },
        colors: {
          primary: { DEFAULT: '#84cc16', 50: '#f7fee7', 100: '#ecfccb', 500: '#84cc16', 600: '#65a30d' },
          charcoal: { DEFAULT: '#1f2937', 800: '#1f2937', 900: '#111827' },
        },
        borderRadius: { '2xl': '1rem', '3xl': '1.5rem' },
      },
    },
    plugins: [],
  }   