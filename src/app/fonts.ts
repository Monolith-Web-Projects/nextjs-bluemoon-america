// src/app/fonts.ts
import localFont from "next/font/local";

export const roboto = localFont({
  src: [
    {
      path: "./fonts/roboto/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/roboto/Roboto-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-roboto",
  display: "swap",
});

export const robotoMono = localFont({
  src: [
    {
      path: "./fonts/roboto-mono/RobotoMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-roboto-mono",
  display: "swap",
});
