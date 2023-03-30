const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        btn: "linear-gradient(113.97deg, #354252 -13.65%, #28323F 136.31%)",
        aboutRow: "linear-gradient(90deg, #F3F4F6 9.23%, #FFFFFF 100%)",
      },
      colors: {
        dark: "#333333",
        gunMetal: "#28323F",
        btnSolid: "#14253D",
        gray: "#666666",
      },
      boxShadow: {
        teamBox: " 0px 6px 30px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
