/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    fontSize: {
      sm: "0.8rem",
      base: "1.125rem", // 18px
      xl: "1.75rem", // 28px (necesario para otros elementos)
      "2xl": "1.875rem", // 30px (H3)
      "3xl": "2.375rem", // 38px (H2)
      "4xl": "2.75rem", // 44px (H1)
    },
    colors: {
      atlantis: {
        50: "#f4fce9",
        100: "#e7f7d0", //secundary
        200: "#d0efa7",
        300: "#b1e373",
        400: "#88cf35", //primary btn
        500: "#74b929",
        600: "#58931d",
        700: "#44711a",
        800: "#395a1a",
        900: "#314c1b",
        950: "#172a09",
      },
      tuatara: {
        100: "#dfe2e6",
        200: "#d1d1d1",
        300: "#999999",
      },
      black: "#000000",
      white: "#ffffff",
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme("fontSize.4xl"),
          fontWeight: "700",
          fontFamily: theme("fontFamily.poppins"),
        },
        h2: {
          fontSize: theme("fontSize.3xl"),
          fontWeight: "600",
          fontFamily: theme("fontFamily.poppins"),
        },
        h3: {
          fontSize: theme("fontSize.2xl"),
          fontWeight: "400",
          fontFamily: theme("fontFamily.poppins"),
        },
        p: {
          fontSize: theme("fontSize.base"),
          fontWeight: "300",
          fontFamily: theme("fontFamily.poppins"),
        },
      });
    }),
  ],
};
