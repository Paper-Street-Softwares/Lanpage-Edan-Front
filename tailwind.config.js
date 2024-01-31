/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        wallpaper: "#2f612c",
        darkgreen: "#031508",
        lightgreen: "#3B8E53",
        gray: "#707070",
        lighter: "#dfdfdf",
        cinzabg: "#f6f6f6",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      spacing: {
        112: "28rem",
        128: "32rem",
      },
    },
  },
  plugins: [],
};
