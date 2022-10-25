/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        loginContainer: "980px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans - serif"],
      },
    },
  },
  plugins: [],
};
