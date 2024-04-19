/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      motiva: [
        "Motiva Sans",
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    colors: {
      txt: { DEFAULT: "#F3F3F3", dim: "#76808C" },
      bg: {
        DEFAULT: "#0E141B",
        high: "#1E2329",
        hover: "#313843",
        secondary: "#14344B",
        tertiary: "#212B45",
      },
      primary: "#66C0F4",
      secondary: "#4B619B",
      "acc-green": "A1CD44",
      "acc-red": "#CD5444",
      "acc-yellow": "#C1B15F",
    },
    extend: {},
  },
  plugins: [],
};
