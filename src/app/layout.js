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
  title: "Aluminox | Facade Engineering Services",
  description:
    "Aluminox Technical Services LLC — precision aluminium and facade engineering solutions for buildings and interiors across the UAE. Over 20 years of expertise.",
  icons: {
    icon: "/images/fav.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <AOSInit />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
