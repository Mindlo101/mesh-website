import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mesh Innovation Hub | Web, Mobile & Software Development",
  description:
    "Mesh Innovation Hub engineers custom web, mobile, and enterprise software for businesses across South Africa. Innovate • Connect • Empower.",
  keywords:
    "software development, web development, mobile apps, custom software, South Africa, Free State, Botshabelo, Mesh Innovation Hub",
  authors: [{ name: "Mesh Innovation Hub" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Mesh Innovation Hub | Web, Mobile & Software Development",
    description:
      "Custom web, mobile, and enterprise software built for South African businesses.",
    url: "https://meshinnovationhub.co.za",
    siteName: "Mesh Innovation Hub",
    locale: "en_ZA",
    type: "website",
  },
  metadataBase: new URL("https://meshinnovationhub.co.za"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans bg-navy-900 text-gray-100 antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}