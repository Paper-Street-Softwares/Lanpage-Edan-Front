/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#027738", // Primary collor (lighter)
        secondary: "#09351C", // Dark variation from primary for small details (darker)
        tertiary: "", // Optional
        quaternary: "#737373", // Neutral gray for paragraph
        quinary: "#f6f6f6", // Light primary collor (or gray) for background
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
        phone2: "365px",
        phone3: "435px",
        tablet1: "640px",
        tablet2: "768px",
        desktop1: "1024px",
        desktop2: "1280px",
        desktop3: "1440px",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-7%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(0%)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
      },
      animation: {
        "slide-down": "slideDown 1s ease",
        "slide-up": "slideUp 1s ease",
      },
    }
  },
  plugins: [],
};
