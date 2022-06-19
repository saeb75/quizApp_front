const generateColorClass = (variable) => {
  return () => `var(--${variable})`;
};
const allCollors = {
  primaryBg: generateColorClass("bg-primary"),
  primaryBorder: generateColorClass("border-primary"),
  contentBg: generateColorClass("bg-content"),
  primaryText: generateColorClass("text-primary"),
  secondaryText: generateColorClass("text-secondary"),
  tertiaryText: generateColorClass("text-tertiary"),
  innerContentInnerBg: generateColorClass("bg-inner-content"),
};
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...allCollors,
        shiba: "#FFA409",
        primaryColor: "#2C79E8",
        secondaryColor: "#53627A",
        gradientStart: "#8000FF",
        gradientEnd: "#061325",
      },
    },
  },
  plugins: [],
};
