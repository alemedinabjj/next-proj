/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#FD4556",
        secondary: "#BD3944",
        accent: "#53212B",
        muted: "#FFFBF5",
        darkprimary: "#010513",
        bgdark: "#0A0A0A",
      },
    },
  },
  plugins: [],
}
