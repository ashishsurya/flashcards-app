import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "425px",
        md: "768px",
        lg: "1024px",
      },
      fontFamily: {
        rubik: "Rubik",
      },
    },
  },
  plugins: [require("flowbite-typography")],
} satisfies Config;
