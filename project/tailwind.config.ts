import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /w-column-(1|2|3|4|5|6|7|8|9|10|11|12)/,
      variants: ["sm", "md", "lg", "xl"],
    },
    {
      pattern: /offset-(1|2|3|4|5|6|7|8|9|10|11)/,
      variants: ["sm", "md", "lg", "xl"],
    },
  ],
  theme: {
    extend: {
      screens: {
        xl: "1296px",
      },
      colors: {
        red: {
          700: "#DF4718",
          900: "#BD3207",
        },
        grayscale: {
          10: "#FDFDFD",
          20: "#FBFBFB",
          30: "#F8F8F9",
          50: "#F4F4F4",
          100: "#E7E7E7",
          200: "#D1D1D1",
          300: "#BBBBBB",
          400: "#A3A3A3",
          500: "#808080",
          600: "#545457",
          700: "#3A3A3B",
          800: "#1F1F20",
          900: "#050505",
        },
        yellow: {
          400: "#FFEFB7",
        },
        orange: {
          25: "#FCF9F7",
          200: "#F4EBE6",
          800: "#C67D54",
        },
      },
      fontSize: {
        "2xs": "12px",
        xs: "14px",
        base: "16px",
        md: "20px",
        lg: "24px",
        xl: "32px",
        "2xl": "36px",
        "3xl": "40px",
        "4xl": "48px",
        "5xl": "56px",
        "6xl": "64px",
        "7xl": "72px",
        "8xl": "80px",
      },
      borderRadius: {
        "1": "4px",
      },
      borderWidth: {
        "6": "6px",
      },
      height: {
        18: "4.5rem",
      },
      padding: {
        7.5: "1.875rem",
      },
      margin: {
        15: "3.75rem",
        18: "4.5rem",
        21: "5.25rem",
        26: "6.5rem",
        34: "8.5rem",
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
      minWidth: {
        124: "31rem",
      },
      keyframes: {
        hamburgerMenu: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        hamburgerMenuOut: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(100%)" },
        },
        overlayShow: {
          from: { opacity: "1" },
          to: { opacity: "1" },
        },
        overlayHide: {
          from: { opacity: "1" },
          to: { opacity: "1" },
        },
      },
      animation: {
        hamburgerMenu: "hamburgerMenu 300ms ease-out",
        hamburgerMenuOut: "hamburgerMenuOut 300ms ease-out",
        overlayShow: "overlayShow 300ms ease-out",
        overlayHide: "overlayHide 300ms ease-out",
      },
    },
  },
};

export default config;
