const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    screens: {
      xs: "0px",
      sm: "500px",
      md: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
    },
    extend: {
      colors: {
        neutral: {
          50: "rgba(250,250,250,1)",
          100: "rgba(245,245,245,1)",
          200: "rgba(229,229,229,1)",
          300: "rgba(212,212,212,1)",
          400: "rgba(163,163,163,1)",
          500: "rgba(115,115,115,1)",
          600: "rgba(82,82,82,1)",
          700: "rgba(64,64,64,1)",
          800: "rgba(38,38,38,1)",
          900: "rgba(23,23,23,1)",
        },
        blue: {
          400: "#354889",
        },
        text: {
          secondary: "#6C6C89",
          required: "#F53D6B",
          green: "#17663A",
        },
        dark: {
          0: "#000",
        },
        borders: {
          default: "#D1D1DB",
          input: "#D1D1DB",
          focus: "#7047EB",
        },
        success: "#009E60",
        gray: {
          primary: "#121217",
          normal: "#fff",
          50: "#FAFAFA",
          200: "#E5E5E5",
          300: "#D4D4D4",
          600: "#525252",
          400: "#A3A3A3",
          700: "#404040",
          900: "#171717",
          800: "#262626",
        },
        black: {
          primary: "#212121",
          light: "#595959",
        },
        green: {
          100: "#B2D1C2",
          500: "#076A3A",
          700: "#054B29",
        },
        bg: {
          green: "#EEFBF4",
        },
        icon: {
          primary: "#FFFFFF",
        },
      },
      boxShadow: {
        xs: "0px 1px 2px 0px rgba(18, 18, 23, 0.05)",
        sm: "0px 1px 3px 0px rgba(18, 18, 23, 0.10), 0px 1px 2px 0px rgba(18, 18, 23, 0.06)",
        md: "0px 4px 6px -1px rgba(18, 18, 23, 0.08), 0px 2px 4px -1px rgba(18, 18, 23, 0.06)",
        lg: "0px 10px 15px -3px rgba(18, 18, 23, 0.08), 0px 4px 6px -2px rgba(18, 18, 23, 0.05)",
        xl: "0px 20px 25px -5px rgba(18, 18, 23, 0.10), 0px 10px 10px -5px rgba(18, 18, 23, 0.04)",
        "2xl": " 0px 25px 50px -12px rgba(18, 18, 23, 0.25)",
        overlay:
          "0px 0px 0px 1px rgba(18, 18, 23, 0.10), 0px 24px 48px 0px rgba(18, 18, 23, 0.03), 0px 10px 18px 0px rgba(18, 18, 23, 0.03), 0px 5px 8px 0px rgba(18, 18, 23, 0.04), 0px 2px 4px 0px rgba(18, 18, 23, 0.04)",
      },
      fontSize: {
        61: "61px",
        49: "49px",
        39: "39px",
        31: "31px",
        25: "25px",
        20: "20px",
        16: "16px",
        14: "14px",
        13: "13px",
        10: "10px",
        8: "8px",
      },
      borderWidth: {
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
      },
      lineHeight: {
        61: "120%",
        49: "120%",
        39: "120%",
        31: "120%",
        25: "120%",
        20: "120%",
        16: "140%",
        14: "24px",
        13: "140%",
        10: "140%",
        8: "120%",
        0: "0",
      },
      fontWeight: {
        400: "400",
        500: "500",
        600: "600",
        700: "700",
      },
      fontFamily: {
        nunito: "Nunito",
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.2s ease-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
