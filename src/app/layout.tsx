import type { Metadata } from "next";
import ClientComponent from "./ClientComponent"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ScrollToTop from "@/common/ScrollToTop";

import "./globals.css";

export const metadata: Metadata = {
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
  // Set the metadata for the page
  return (
    <ClientComponent>
      <html lang="en">
      <body> 
        <Navbar />
        <ScrollToTop />
        {children}
        <Footer />
      </body>
    </html>
    </ClientComponent>
  );
}