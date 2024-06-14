const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{ts,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  "darkMode": "class",
  theme: {
    colors:{
      
     "green":"#2bb9a4",
     "dark":"#041b1e",
     
    },
    extend: {
  },
  },
  plugins: [nextui(),
    addVariablesForColors,
    require('preline/plugin'),
  ],
    
};
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
