/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        wallpaper: "#2f612c",
        darkgreen: "#031508",
        mediumgreen: "#027738",
        lightgreen: "#3B8E53",
        lightgray: "#707070",
        lighter: "#dfdfdf",
        graybg: "#f6f6f6",
        lightyellow: '#FBD178'
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
