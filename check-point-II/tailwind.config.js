/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#202329",
        fontColor: "#202329",
        secundary: "#FFFFFF",
        bgCard: "#F5F5F5",
        grayColor: "#F5F5F5",
        hoverText: "#FF9800",
        aliveColor: "#08C952",
        deadColor: "#A1140A",
        unknowColor: "#A6A6A6",
        buttonBg: "#A1140A",
        starColor: "#FCE46D",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"]
      }
    }
  },
  plugins: [],
}
