/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "press-start": ['"Passion One"', "cursive"],
        title: ["Infinity", "cursive"],
      },
    },
  },
  plugins: [],
};
