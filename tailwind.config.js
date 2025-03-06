/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: { max: "370px" },               // Up to 370px
        md: { min: "371px", max: "555px" }, // 371px - 555px
        lg: { min: "556px", max: "740px" }, // 556px - 740px
        xl: { min: "741px", max: "925px" }, // 741px - 925px
        xxl: { min: "926px", max: "1110px" }, // 926px - 1110px
        xxxl: { min: "1111px" },            // 1111px and above
      },
    },
  },
  plugins: [],
};