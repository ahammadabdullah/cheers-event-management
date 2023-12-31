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
      fontFamily: {
        vidaloka: ["Vidaloka", "sans-serif"],
      },
      backgroundImage: {
        banner: "url('https://i.ibb.co/9vbmJWG/birthday.jpg')",
        banner2: "url('https://i.ibb.co/DzVtV7r/banner.jpg')",
        banner3: "url('https://i.postimg.cc/tgY5MsvK/team.jpg')",
        portfolio: "url('https://i.ibb.co/tmnhcfM/bg-portfolio.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
