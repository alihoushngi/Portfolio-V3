import localFont from "next/font/local";

export const FiraCodeFont = localFont({
  variable: "--font-fira-code",
  src: [
    {
      path: "../assets/fonts/en/FiraCode/FiraCode-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/en/FiraCode/FiraCode-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/en/FiraCode/FiraCode-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/en/FiraCode/FiraCode-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/en/FiraCode/FiraCode-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/en/FiraCode/FiraCode-VF.woff2",
      weight: "300 700",
      style: "normal",
    },
  ],
});

export const PofakFont = localFont({
  variable: "--font-pofak",
  src: [
    {
      path: "../assets/fonts/fa/pofak/PofakVF.woff",
      weight: "100 900",
      style: "normal",
    },
  ],
});
