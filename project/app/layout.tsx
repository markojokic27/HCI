import type { Metadata } from "next";
import { Inter, Libre_Bodoni } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "900"],
});

const libreBodoni = Libre_Bodoni({
  subsets: ["latin"],
  variable: "--font-libre-bodoni",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Bizaca shop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${libreBodoni.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
