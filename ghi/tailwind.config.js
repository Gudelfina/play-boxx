/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        oasis: "#FCF1C0",
        maverick: "#C0B9BF",
        lavender: "#E6E6FA",
        hoverpink: "#f77777",
        darkpink: "#FF9494",
        lightpink: "#FFD1D1",
        lighterpink: "#FFE3E1",
        beige: "#FFF5E4",
        punch: "#F25278",
        aesthetic: "#FdF2F6",
        navy: "#1E6B8A",
        lightblue: "#2A82B8",
      },
      screens: {
        sm: "640px",
        md: "760px",
        lg: "1400px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
