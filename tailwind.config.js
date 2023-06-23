/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      center: true,
    },
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
