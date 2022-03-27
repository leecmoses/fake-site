module.exports = {
  purge: ["./src/components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        reddish: "#ee2d1c",
        blackish: "#4c4c51",
        blueish: "#88939e",
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};
