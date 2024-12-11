/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "#2785FF",
      },
      keyframes: {
        slide: {
          "0%": { right: "150px", left: "2px" },
          "5%": { left: "2px" },
          "50%": { right: "2px", left: "150px" },
          "55%": { right: "2px" },
          "100%": { right: "150px", left: "2px" },
        },
      },
      animation: {
        slide: "slide 2s linear infinite",
      },
      boxShadow: {
        "inset-light": "inset 0 0 0 2px rgba(0, 0, 0, 0.05)",
        light: "0 1px 2px rgba(0, 0, 0, 0.2)",
      },
      borderRadius: {
        full: "50px",
      },
      spacing: {
        200: "200px",
        40: "40px",
        360: "360px",
        150: "150px",
        2: "2px",
      },
    },
  },
  plugins: [],
}
