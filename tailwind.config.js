/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../src/assets/images/hero.webp')",
        "hero-mobile": "url('../src/assets/images/hero-mobile.webp')",
         "story": "url('../src/assets/images/story.webp')",
      },
       margin: {
        xl: "80px",
        lg: "40px",
        sm: "20px",
      },

      colors: {
        yellow: "#F2B705",
        blue: "#194CB5",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 30s linear infinite",
      },
    },
  },
  plugins: [],
};
