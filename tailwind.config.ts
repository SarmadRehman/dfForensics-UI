import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "1736px",
    },
    extend: {
      colors: {
        brand: {
          main: "#145AFF",
          secondary: "#47C1FE",
        },
        black: {
          main: "#000",
        },
        gray: {
          main: "#40454F",
        },
        white: {
          main: "#fff",
          off: "#F9F9F9",
        },
      },
      boxShadow: {
        review: "0px 0px 40px 0px rgba(22, 22, 22, 0.12)",
        main: "(0px 0px 40px rgba(20, 90, 255, 0.40))",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
