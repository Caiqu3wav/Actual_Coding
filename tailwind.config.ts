import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      'major': {'max': '1260px'},
      'majortwo': {'max': '1235px'},
      'majorthree': {'max': '890px'},
      'midtw': {'max': '648px'},
      'midtwo': {'max': '553px'},
      'midtwo2': {'max': '538px'},
      'midthree': {'max': '600px'},
      'midfour': {'max': '452px'},
      'low': {'max': '400px'},
      'lowone': {'max': '382px'},
      'lowtwo': {'max': '370px'},
      'lowtwo2': {'max': '325px'},
      'lowtwo3': {'max': '293px'},
      'lowthree': {'max': '275px'},
      'lowthreetwo':{'max': '234px'},
    },
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
