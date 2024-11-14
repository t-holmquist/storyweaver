import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      oswald: "var(--font-oswald)",
      sourceSerif: "var(--font-sourceSerif)",
    },
    backgroundImage: {
      gradient_primary: "radial-gradient(circle, rgba(136,52,213,0.2) 14%, rgba(222,102,97,0.15) 100%)",
    },
    colors: {
      primary: "#8834D5",
      primary_hover: "#9C46EA",
      secondary: "#E88FAA",
      secondary_hover: "#F4A5BD",
      accent: "#DE6661",
      background_gray: "#F5F3F4",
      background_red: "#F5DAE4",
      text_black: "#0A0F0A",
      text_white: "#F5F9F4",
      text_gray: "#7A7A7A",
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;