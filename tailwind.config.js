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
      typography: {
        DEFAULT: {
          css: {
            color: "#333",
            a: {
              color: "#3182ce",
              "&:hover": {
                color: "#2c5282",
              },
            },
            h1: {
              color: "#fff",
            },
            h2: {
              color: "#f6c453",
            },
            h3: {
              color: "#fff",
            },
            p: {
              color: "#f5f5f7",
            },
            code: {
              color: "#f5f5f7",
              backgroundColor: "#333",
              padding: "0.2rem 0.4rem",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
