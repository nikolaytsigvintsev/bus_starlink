// tailwind.config.js
const {heroui} = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/components/(button|form|input|modal|navbar|select|ripple|spinner|listbox|divider|popover|scroll-shadow).js"
],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};