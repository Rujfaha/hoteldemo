import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-heading)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        accent: ["var(--font-accent)", "system-ui", "sans-serif"],
      },
      colors: {
        sand: {
          50: "#fbf8f3",
          100: "#f4ecdf",
          200: "#e8d8b9",
          300: "#d6bb89",
          400: "#c29a5b",
          500: "#a8803f",
          600: "#876530",
        },
        ink: {
          900: "#0c0a09",
          800: "#1c1917",
          700: "#292524",
        },
        accent: {
          DEFAULT: "#e8455d",
          dark: "#c93a4f",
        },
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
