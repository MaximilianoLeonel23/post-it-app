/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          red: "#FB8B8C",
          blue: "#8BC3FB",
          green: "#7EBB94",
          yellow: "#FEDC98",
          purple: "#C1BEFA",
          orange: "#F9C38C",
          neutral: "#d4d4d4",
        },
      },
    },
  },
  plugins: [],
};
