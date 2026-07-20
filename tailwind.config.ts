import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#111113",
          soft: "#3d3d42",
          muted: "#6f6f78",
          faint: "#9c9ca4",
        },
        paper: {
          DEFAULT: "#ffffff",
          alt: "#f7f7f8",
          line: "#e8e8ec",
        },
        ig: {
          purple: "#833ab4",
          pink: "#e1306c",
          orange: "#f77737",
          yellow: "#fcaf45",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "var(--font-noto-sans-jp)",
          "system-ui",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "ig-gradient":
          "linear-gradient(115deg, #833ab4 0%, #e1306c 48%, #f77737 82%, #fcaf45 100%)",
        "ig-gradient-soft":
          "linear-gradient(115deg, rgba(131,58,180,0.08) 0%, rgba(225,48,108,0.08) 50%, rgba(252,175,69,0.08) 100%)",
      },
      maxWidth: {
        slide: "1200px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.25s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
