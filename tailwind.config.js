/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-bottom': 'linear-gradient(to top, black, transparent)',
      })
    },
  },
  plugins: [],
}

