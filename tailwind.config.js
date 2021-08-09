module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        "bg-primary": "#161415",
        "text-secondary": "#5F5F5F",
        "white-secondary": "#C3C1BA",
        "bg-surface": "#202022",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
