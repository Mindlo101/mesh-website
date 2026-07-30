import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Mesh Innovation Hub | Web, Mobile & Software Development",
  description: "Custom websites, mobile apps, and enterprise software built with modern technology. From fintech to logistics—we engineer digital solutions that scale.",
  keywords: "software development, web development, mobile apps, custom software, fintech, South Africa, Mesh Innovation Hub",
  authors: [{ name: "Mesh Innovation Hub" }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Mesh Innovation Hub | Web, Mobile & Software Development",
    description: "Custom websites, mobile apps, and enterprise software built with modern technology.",
    url: "https://meshinnovationhub.co.za",
    siteName: "Mesh Innovation Hub",
    locale: "en_ZA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-navy-900 text-gray-100 antialiased`}>
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}