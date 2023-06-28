/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "",
        fontColor: "#202329",
        secundary: "#FFFFFF",
        greyColor: "#08C952",
        aliveColor: "",
        deadColor: "#A1140A",
        unknowColor: "#A6A6A6",
        buttonBg: "#A1140A",
        starColor: "#FCE46D",
      },
      fonts: {
        h1Font: {
          fontWeight: "bold",
          fontSize: "2rem",
        },
        h2Font: {
          fontWeight: "semibold",
          fontSize: "1.5rem",
        },
        h3Font: {
          fontWeight: "bold",
          fontSize: "2rem",
        },
        pFont: "",
        buttonFont: "",

      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}
