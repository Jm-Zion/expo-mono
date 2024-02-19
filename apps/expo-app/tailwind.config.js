// const config = require("../../packages/ui-kit/tailwind.config");
// module.exports = config;

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../packages/ui-kit/src/**/*.{js,ts,tsx,ts}",
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
