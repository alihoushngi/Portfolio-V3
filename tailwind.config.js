/** @type {import('tailwindcss').Config} */
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
        body: "1rem",
        heading: "1.875rem",
        subheading: "1.25rem",
        small: "0.875rem",
      },

      spacing: {
        layout: "2rem",
        section: "1.5rem",
        element: "1rem",
        gap: "0.75rem",
      },

      borderRadius: {
        btn: "0.5rem",
        card: "1rem",
        input: "0.375rem",
      },

      boxShadow: {
        soft: "0 1px 2px rgba(0,0,0,0.05)",
        medium: "0 4px 6px rgba(0,0,0,0.1)",
        strong: "0 10px 15px rgba(0,0,0,0.2)",
        focus: "0 0 0 3px rgba(37, 99, 235, 0.5)",
      },

      transitionDuration: {
        DEFAULT: "200ms",
      },
    },
  },

  plugins: [],
};
