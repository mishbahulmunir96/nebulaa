import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { poppins } from "./utils/font";
import Footer from "@/components/Footer";
import Box from "@/components/Box";

export const metadata: Metadata = {
  title: "Nebulaa | Bouqet, Gift, & Hantaran",
  description:
    "Temukan berbagai pilihan buket bunga, gift istimewa, dan layanan penyewaan serta hias box hantaran yang elegan untuk setiap momen spesial Anda. Kami menghadirkan produk berkualitas dengan sentuhan personal yang dirancang dengan cinta, untuk menjadikan setiap detail bermakna dan berkesan. Percayakan kebutuhan Anda pada kami dan rasakan layanan terbaik untuk menciptakan kenangan yang tak terlupakan.",
  keywords: [
    "bouqet",
    "buket",
    "bunga",
    "hantaran",
    "penyewaan box hantaran",
    "sewa hantaran",
    "sewa box hantaran",
    "gift",
    "gift istimewa",
    "buket mahar",
    "buket bunga",
    "buket uang",
    "buket nasi padang",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <Box className="-top-[24rem] left-10 origin-top-left rotate-[20deg]" />
      </body>
    </html>
  );
}
