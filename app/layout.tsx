import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// const poppins = Poppins({
//   variable: "--font-poppins",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Cyborg",
  description: "Generated by create next app",
  icons: {
    icon: "/public/cyborg.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/cyborg.ico" sizes="any" />
        <meta name="description" content="Generated by create next app" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
