/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkgreen: "#031508", // tertiary
        mediumgreen: "#027738", // secondary
        lightgreen: "#3B8E53", // primary
        graybg: "#f6f6f6", // quinary
        primary: "#3B8E53",
        secondary: "#027738",
        tertiary: "#031508",
        quaternary: "#737373", // paragraph
        quinary: "#f6f6f6",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "10px": "0.625rem",
      },
      spacing: {
        112: "28rem",
        128: "32rem",
      },
      screens: {
        phone1: "325px",
        phone2: "380px",
        phone3: "435px",
        tablet1: "640px",
        tablet2: "768px",
        desktop1: "1024px",
        desktop2: "1280px",
        desktop3: "1440px",
      },
    },
  },
  plugins: [],
};
