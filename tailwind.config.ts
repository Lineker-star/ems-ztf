import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef6f7",
          100: "#d3e9ea",
          200: "#a8d3d6",
          300: "#7bbcc1",
          400: "#4a9ea5",
          500: "#1f7e87",
          600: "#16636b",
          700: "#124f56",
          800: "#0f3f45",
          900: "#0c2f33",
          950: "#071e21",
        },
        gold: {
          50: "#fdf8ec",
          100: "#faeec9",
          200: "#f4dc97",
          300: "#edc35d",
          400: "#e6ab33",
          500: "#d6911e",
          600: "#b27117",
          700: "#8e5417",
          800: "#754418",
          900: "#633a19",
        },
        ink: {
          50: "#f6f7f8",
          100: "#eceef0",
          200: "#d5d9de",
          300: "#b0b8c1",
          400: "#85909d",
          500: "#677281",
          600: "#535c6b",
          700: "#444b57",
          800: "#3a3f49",
          900: "#23262c",
          950: "#16181c",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
