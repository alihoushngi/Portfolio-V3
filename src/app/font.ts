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
    // اگر نسخه Variable Font رو هم بخوای
    {
      path: "../assets/fonts/en/FiraCode/FiraCode-VF.woff2",
      weight: "300 700", // رنج وزن‌ها
      style: "normal",
    },
  ],
});

export const VazirFont = localFont({
  variable: "--font-vazir",
  src: [
    {
      path: "../assets/fonts/fa/vazirmatn/Vazirmatn-Light.woff2",
      weight: "100",
      style: "normal",
    },

    {
      path: "../assets/fonts/fa/vazirmatn/Vazirmatn-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },

    {
      path: "../assets/fonts/fa/vazirmatn/Vazirmatn-Light.woff2",
      weight: "300",
      style: "normal",
    },

    {
      path: "../assets/fonts/fa/vazirmatn/Vazirmatn-Regular.woff2",
      weight: "400",
      style: "normal",
    },

    {
      path: "../assets/fonts/fa/vazirmatn/Vazirmatn-Medium.woff2",
      weight: "500",
      style: "normal",
    },

    {
      path: "../assets/fonts/fa/vazirmatn/Vazirmatn-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },

    {
      path: "../assets/fonts/fa/vazirmatn/Vazirmatn-Bold.woff2",
      weight: "700",
      style: "normal",
    },

    {
      path: "../assets/fonts/fa/vazirmatn/Vazirmatn-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },

    {
      path: "../assets/fonts/fa/vazirmatn/Vazirmatn-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});
