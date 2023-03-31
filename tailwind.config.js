/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#23a53f",
        "disabled-gray": "#e9ecef",
      },
      backgroundImage: {
        "bhome-pattern": "url('assets/background.jpg')",
      },
    },
  },
  plugins: [],
};
