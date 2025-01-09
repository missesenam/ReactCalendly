/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary1: "#000000",
        primary2: "#ffffff",
        primary3: "#006bff",
        primary4: "gray",
        primary5: "#f0f3f8",
      },
      fontStyle: {
        font1: "sans",
        font2: "Roboto",
        font3: "sans-serif",
      },
    },
  },
  plugins: [],
};
