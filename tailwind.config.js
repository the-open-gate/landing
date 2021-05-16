module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        def: "Inter",
      },
      colors: {
        formBackground: "#212121",
        formBackgroundSecondary: "#3B3B3B",
        background: "#181818",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // ...
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
