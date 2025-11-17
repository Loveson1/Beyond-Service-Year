/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        boska: ["Boska", "serif"],
      },
      backgroundImage: {
        hero: "url('../src/assets/images/hero.webp')",
        "hero-mobile": "url('../src/assets/images/hero-mobile.webp')",
        "hero-tab": "url('../src/assets/images/hero-tab.webp')",
        story: "url('../src/assets/images/story.webp')",
        why: "url('../src/assets/images/why.webp')",
        why2: "url('../src/assets/images/why2.webp')",
        why3: "url('../src/assets/images/why3.webp')",
        resource: "url('../src/assets/images/resource.webp')",
         contact: "url('../src/assets/images/contact.webp')",
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
