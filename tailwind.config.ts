import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellow: "var(--yellow)",
        green: "var(--green)",
        coral: "var(--coral)",
        blue: "var(--blue)",
        "yellow-light": "var(--yellow-light)",
        "green-light": "var(--green-light)",
        "coral-light": "var(--coral-light)",
        "blue-light": "var(--blue-light)",
        "yellow-dark": "var(--yellow-dark)",
        "green-dark": "var(--green-dark)",
        "coral-dark": "var(--coral-dark)",
        "blue-dark": "var(--blue-dark)",
      }
    },
  },
  plugins: [],
} satisfies Config;
