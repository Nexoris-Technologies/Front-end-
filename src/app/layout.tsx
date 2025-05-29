import type { Metadata } from "next";

import "./globals.css";

import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Nexoris Technologies Ltd",
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
