/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "press-start": ['"Passion One"', "cursive"],
        title: ["Infinity", "cursive"],
      },
    },
    colors: {
      ivory: "#FFFFF0",
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
});
