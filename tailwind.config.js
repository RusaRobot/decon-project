/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellowPrimary: "#FFD100",
        yellowSecondary: "#FFEE32",
        yellowTertiary: "#D6D6D6",
      },
    },
  },
  plugins: [],
};
