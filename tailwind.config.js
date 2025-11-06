/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0F",
        primary: {
          DEFAULT: "#FF007A",
          dark: "#D60067"
        },
        secondary: {
          DEFAULT: "#00D1FF",
          dark: "#00A7CC"
        },
        yellow: "#FFD600",
        orange: "#FF6B00",
        green: "#32D296"
      },
    },
  },
  plugins: [],
};
