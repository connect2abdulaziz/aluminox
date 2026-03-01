import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AOSInit from "@/components/shared/AOSInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aluminox | Precision Glass & Aluminium Solutions",
  description:
    "Aluminox Technical Services LLC — precision aluminium, glass, and glazing solutions for facades and interiors across the UAE. Over 20 years of expertise.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSInit />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
