module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        "bg-primary": "#101112",
        "text-secondary": "#5F5F5F",
        "white-secondary": "#C3C1BA",
        "bg-surface": "#242729",
      },
    },
  },
  plugins: [],
};
