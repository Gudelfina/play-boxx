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
