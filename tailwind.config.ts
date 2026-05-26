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
        background: "#FFFBF7",
        "soft-bg": "#F5F0EB",
        "soft-mint": "#EDF9F4",
        "soft-peach": "#FFF4ED",
        "soft-lavender": "#F5F3FF",
        primary: "#1A1625",
        secondary: "#5C5670",
        brand: "#54BD95",
        "brand-dark": "#2F7D62",
        "brand-light": "#7AD4B0",
        accent: "#54BD95",
        coral: "#EA580C",
        plum: "#9333EA",
        rose: "#E11D48",
        border: "#E8E2DC",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(26 22 37 / 0.05), 0 1px 2px -1px rgb(26 22 37 / 0.04)",
        "card-hover":
          "0 20px 40px -12px rgb(84 189 149 / 0.22), 0 8px 16px -8px rgb(47 125 98 / 0.12)",
        glow: "0 0 80px -16px rgb(84 189 149 / 0.35)",
        brand: "0 8px 24px -4px rgb(84 189 149 / 0.4)",
      },
      backgroundImage: {
        "gradient-accent":
          "linear-gradient(135deg, #2F7D62 0%, #54BD95 55%, #7AD4B0 100%)",
        "gradient-accent-soft":
          "linear-gradient(135deg, #B8E8D4 0%, #54BD95 50%, #7AD4B0 100%)",
        "gradient-soft":
          "linear-gradient(180deg, #EDF9F4 0%, #FFFBF7 50%, #FFFFFF 100%)",
        "gradient-mesh":
          "radial-gradient(ellipse 80% 50% at 20% 20%, rgb(84 189 149 / 0.14) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 80% 10%, rgb(47 125 98 / 0.1) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 70% 80%, rgb(122 212 176 / 0.08) 0%, transparent 50%)",
      },
    },
  },
  plugins: [],
};

export default config;
