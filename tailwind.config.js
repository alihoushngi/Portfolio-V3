/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/Search/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/Search/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        Appearance: {
          Slate: {
            50: "#F8FAFC",
            100: "#F1F5F9",
            200: "#E2E8F0",
            300: "#CAD5E2",
            400: "#90A1B9",
            500: "#62748E",
            600: "#45556C",
            700: "#314158",
            800: "#1D293D",
            900: "#0F172B",
            950: "#020618",
          },
        },
        Primary: {
          Orange: {
            50: "#FFF7ED",
            100: "#FFEDD4",
            200: "#FFD6A7",
            "300_Main": "#FFB86A",
            400: "#FF8904",
            500: "#FF6900",
            600: "#F54900",
            700: "#CA3500",
            800: "#9F2D00",
            900: "#7E2A0C",
            950: "#441306",
          },
        },
        Secondary: {
          Teal: {
            50: "#F0FDFA",
            100: "#CBFBF1",
            200: "#96F7E4",
            300: "#46ECD5",
            "400_Main": "#00D5BE",
            500: "#00BBA7",
            600: "#009689",
            700: "#00786F",
            800: "#005F5A",
            900: "#0B4F4A",
            950: "#022F2E",
          },
        },
        Secondary: {
          Indigo: {
            50: "#EEF2FF",
            100: "#E0E7FF",
            200: "#C6D2FF",
            300: "#A3B3FF",
            400: "#7C86FF",
            "500_Main": "#615FFF",
            600: "#4F39F6",
            700: "#432DD7",
            800: "#372AAC",
            900: "#312C85",
            950: "#1E1A4D",
          },
        },
        Secondary: {
          Rose: {
            50: "#FFF1F2",
            100: "#FFE4E6",
            200: "#FFCCD2",
            "300_Main": "#FFA1AD",
            400: "#FF637E",
            500: "#FF2056",
            600: "#EC003F",
            700: "#C60036",
            800: "#A50036",
            900: "#8B0836",
            950: "#4D0218",
          },
        },
        Accent: {
          Purple: {
            50: "#FAF5FF",
            100: "#F3E8FF",
            200: "#E9D4FF",
            300: "#DAB2FF",
            "400_Main": "#C27AFF",
            500: "#AD46FF",
            600: "#9810FA",
            700: "#8200DB",
            800: "#6E11B0",
            900: "#59168B",
            950: "#3C0366",
          },
        },
        Error: {
          Red: {
            50: "#FEF2F2",
            100: "#FFE2E2",
            200: "#FFC9C9",
            300: "#FFA2A2",
            400: "#FF6467",
            "500_Main": "#FB2C36",
            600: "#E7000B",
            700: "#C10007",
            800: "#9F0712",
            900: "#82181A",
            950: "#460809",
          },
        },
        Success: {
          Green: {
            50: "#F0FDF4",
            100: "#DCFCE7",
            200: "#B9F8CF",
            300: "#7BF1A7",
            400: "#05DF72",
            "500_Main": "#00C950",
            600: "#00A63E",
            700: "#008235",
            800: "#016630",
            900: "#0D542B",
            950: "#032E15",
          },
        },
        Info: {
          Yellow: {
            50: "#FEFCE8",
            100: "#FEF9C2",
            200: "#FFF085",
            300: "#FFDF20",
            400: "#FDC700",
            "500_Main": "#F0B100",
            600: "#D08700",
            700: "#A65F00",
            800: "#894B00",
            900: "#733E0A",
            950: "#432004",
          },
        },
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["FiraCodeFont", "sans-serif"],
      },

      fontSize: {
        1: "14px",
        2: "16px",
        3: "18px",
        4: "20px",
        5: "24px",
        6: "30px",
        7: "36px",
        8: "48px",
        9: "60px",
      },

      spacing: {
        1: "2px",
        2: "4px",
        3: "8px",
        4: "12px",
        5: "16px",
        6: "24px",
        7: "32px",
        8: "40px",
        9: "48px",
        10: "64px",
      },

      borderRadius: {
        checkboxes: "2px",
        icon_boxes: "4px",
        default: "8px",
        cards: "16px",
      },
    },
  },

  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".btn": {
          padding: "10px 12px",
          borderRadius: theme("borderRadius.default"),
          fontWeight: "100",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.2s ease",
          border: "1px solid transparent",
          boxSizing: "border-box",
        },

        ".btn-primary": {
          backgroundColor: theme("colors.Primary.Orange.300_Main"),
          color: theme("colors.black"),
          "&:hover": {
            backgroundColor: theme("colors.Primary.Orange.200"),
          },
        },

        ".btn-secondary": {
          backgroundColor: theme("colors.Appearance.Slate.600"),
          color: theme("colors.white"),
          "&:hover": {
            backgroundColor: theme("colors.Appearance.Slate.500"),
          },
        },

        ".btn-outline": {
          border: `1px solid ${theme("colors.Appearance.Slate.50")}`,
          color: theme("colors.Appearance.Slate.50"),
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: theme("colors.Appearance.Slate.800"),
            border: `1px solid ${theme("colors.Appearance.Slate.800")}`,
            color: theme("colors.white"),
          },
        },

        ".btn-success": {
          backgroundColor: theme("colors.Success.Green.500_Main"),
          color: theme("colors.white"),
          "&:hover": {
            backgroundColor: theme("colors.Success.Green.400"),
          },
        },

        ".btn-error": {
          backgroundColor: theme("colors.Error.Red.500_Main"),
          color: theme("colors.white"),
          "&:hover": {
            backgroundColor: theme("colors.Error.Red.400"),
          },
        },

        ".btn-warning": {
          backgroundColor: theme("colors.Info.Yellow.500_Main"),
          color: theme("colors.white"),
          "&:hover": {
            backgroundColor: theme("colors.Info.Yellow.400"),
          },
        },

        ".btn-disable": {
          backgroundColor: theme("colors.Appearance.Slate.800"),
          color: theme("colors.Appearance.Slate.500"),
          cursor: "not-allowed",
          pointerEvents: "none",
        },
      });
    }),
  ],
};
