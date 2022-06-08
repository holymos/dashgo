// eslint-disable-next-line @typescript-eslint/no-var-requires
const theme = require("./src/styles/theme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: theme,
  },
  fontFamily: {
    sans: ["Roboto", "sans-serif"],
  },
  plugins: [],
};
