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
        grayGr: "linear-gradient(106.73deg, #1E1541 -17.58%, #2E3947 165.49%)",
        shadowBlue:
          "linear-gradient(142.1deg, rgba(3, 96, 255, 0.15) 19.74%, rgba(44, 80, 109, 0.15) 80.39%)",
        shadowPurple:
          "linear-gradient(142.07deg, rgba(227, 188, 239, 0.15) -9.75%, rgba(133, 37, 163, 0.15) 112.5%)",
        shadowRedish:
          "linear-gradient(142.07deg, rgba(201, 27, 27, 0.09) -9.75%, rgba(197, 9, 255, 0.09) 112.5%)",
        shadowCyan:
          "linear-gradient(142.07deg, rgba(27, 201, 191, 0.15) -9.75%, rgba(14, 66, 155, 0.15) 112.5%)",
        shadowPinkish:
          "linear-gradient(142.07deg, rgba(197, 9, 255, 0.15) -9.75%, rgba(92, 255, 66, 0.15) 112.5%)",
      },
      colors: {
        dark: "#333333",
        gunMetal: "#28323F",
        btnSolid: "#14253D",
        gray: "#666666",
      },
      boxShadow: {
        teamBox: " 0px 6px 30px rgba(0, 0, 0, 0.08)",
        helpBox: " 0px 5px 30px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
