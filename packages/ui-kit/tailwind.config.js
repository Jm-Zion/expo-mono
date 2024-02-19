/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../packages/ui-kit/**/*.{js,ts,tsx,ts}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "rgb(99 102 241)",
        secondary: "rgb(251 191 36)",
      },
    },
  },
  plugins: [],
};

// module.exports = {
//   content: ["src/**/*.{js,jsx,ts,tsx}"],
//   presets: [require("nativewind/preset")],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
