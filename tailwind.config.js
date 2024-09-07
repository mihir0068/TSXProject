const colors = require("./colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      arialCyrillic: ["Arial Cyrillic Rounded Bold", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  plugins: [],
};
