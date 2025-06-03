import type { Metadata } from "next";
import { roboto, robotoMono } from "./fonts";
import "./globals.css";
import FooterSection from "./sections/FooterSection";
import Navbar from "@/parts/Navbar";

export const metadata: Metadata = {
  title: "Bluemoon International US",
  description: "Transforming businesses with heart & humanity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="m-0 bg-white p-0">
      <body
        className={`${roboto.variable} ${robotoMono.variable} relative w-screen overflow-x-clip bg-white antialiased`}
      >
        <header className="relative w-screen overflow-x-clip">
          <Navbar></Navbar>
        </header>
        <main>{children}</main>
        <footer className="relative w-screen overflow-x-clip bg-[#141414]">
          <FooterSection></FooterSection>
        </footer>
      </body>
    </html>
  );
}
