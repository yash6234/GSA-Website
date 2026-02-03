/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          charcoal: { DEFAULT: '#1f2937', 800: '#1f2937', 900: '#111827' },
        },
        borderRadius: { '2xl': '1rem', '3xl': '1.5rem' },
      },
    },
    plugins: [],
  }