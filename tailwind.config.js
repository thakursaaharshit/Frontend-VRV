/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        warning: "#FFA500",
        success: "#4CAF50",
        info: "#0074D9",
        white: "#FFFFFF",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
