/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      serif: ["charter", "serif"],
      mono: ["monospace"],
    },
    extend: {colors: {
      darkVoid: "#161617",
      white: "#c9c7cd"
    }},
  },
  plugins: [require("@tailwindcss/typography")],
};
