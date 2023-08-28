/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textSubHeading: "hsl(276, 100%, 81%)",
        textChatLeft: "hsl(276, 55%, 52%)",
        textChatRight: "hsl(271, 15%, 43%)",
        textPlaceholder: "hsl(206, 6%, 79%)",
        textMainHeading: "hsl(271, 36%, 24%)",
        textParagraph: "hsl(270, 7%, 64%)",
        white: "hsl(0, 0%, 100%)",
        appBackground: "hsl(270, 20%, 96%)",
        submitButtonBackground: "hsl(271, 36%, 24%)",
        radioButtonOutline: "hsl(289, 100%, 72%)",
        gradientColor1: "hsl(293, 100%, 63%)",
        gradientColor2: "hsl(264, 100%, 61%)",
      },
    },
  },
  plugins: [],
};
