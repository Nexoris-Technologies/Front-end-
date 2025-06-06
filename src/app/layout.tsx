import { Poppins, Inter } from 'next/font/google';
import type { Metadata } from 'next';
import ClientComponent from './ClientComponent';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar/Navbar';
import ScrollToTop from '@/common/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

// Load fonts using next/font/google
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  icons: {
    icon: '/favicon-32x32.png',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientComponent>
      <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
        <body className="font-sans">
          <Navbar />
          <ScrollToTop />
          <ToastContainer />
          {children}
          <Footer />
        </body>
      </html>
    </ClientComponent>
  );
}
