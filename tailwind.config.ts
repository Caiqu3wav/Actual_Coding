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
        "blue-light-opac": "rgb(180, 219, 255, 0.7)",
        "blue-light": "rgb(180, 219, 255)",
        "blue-dark": "rgb(20, 74, 190)",
      },
    },
  },
  plugins: [],
};
export default config;
