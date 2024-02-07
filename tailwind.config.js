/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#027738", // Primary collor
        secondary: "#027738", // Light version from primary for small details
        tertiary: "#09351C", // Dark variation from primary for titles
        quaternary: "#737373", // Neutral gray for paragraph
        quinary: "#f6f6f6", // Light gray for background
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        xxs: "0.625rem",
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
