/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#027738", // Com primária (clara)
        secondary: "#09351C", // Cor primária (escura)
        tertiary: "", // Opcional
        quaternary: "#737373", // Cinza neutro -> Parágrafos
        quinary: "#f6f6f6", // Com primária bem clara ou cinza -> Bg de seções
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        xxs: "0.625rem",
        title1: "1.25rem", // 20px -> | Cards Mobile e subtítulos de seção
        title2: "1.375rem", // 22px -> Cards com muita info | Section header mobile, paralaxe
        title3: "1.5rem", // 24px -> Cards de serviços | Hero mobile
        title4: "1.875rem", // 30px -> Paralax e Seções 1/2 | Números grandes
        title5: "2.25rem", // 36px -> Section header
        title6: "3rem", // 48px -> Números grandes
        title7: "3.4375rem", // 55px -> Hero desktop
        paragraph1: "",
        paragraph2: "",
        paragraph3: "",
        paragraph4: "",
      },
      spacing: {
        112: "28rem",
        120: "30rem",
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
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(0%)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
      },
      animation: {
        "slide-down": "slideDown 2s ease",
        "slide-up": "slideUp 2s ease",
      },
    },
  },
  plugins: [],
};
