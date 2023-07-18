/** @type {import('tailwindcss').Config} */
const heroPatterns = require("tailwindcss-hero-patterns/src/patterns");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/blog/**/*.{.js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          500: "#78866b",
        },
      },
      fontFamily: {
        sans: ["Orbitron", "sans-serif"],
        serif: ["Changa", "serif"],
      },
    },
    heroPatterns: {
      bubbles: heroPatterns.bubbles,
    },
    heroPatternsShades: [
      "100",
      "200",
      "300",
      "400",
      "500",
      "600",
      "700",
      "800",
      "900",
    ],
    heroPatternsColors: ["gray", "green"],
  },
  plugins: [require("tailwindcss-hero-patterns")],
};
