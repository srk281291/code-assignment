/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bhome-pattern': "url('assets/background.jpg')",
        
      }
    },
  },
  plugins: [],
}
