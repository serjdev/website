/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bodyText: "#f5f5f7",
        dark: "#0d0d0d",
        accent: "#f6c453",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
