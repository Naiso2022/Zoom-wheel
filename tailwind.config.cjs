/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "wheel-background": "#00053D",
        "Zoom-blue": "#0B5CFF",
      },
    },
  },
  plugins: [],
};
