/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ff635c",
        },
        secondary: {
          DEFAULT: "#fcb900",
        },
      },
      backgroundImage: {
        banner: "url('https://i.ibb.co/DzVtV7r/banner.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
