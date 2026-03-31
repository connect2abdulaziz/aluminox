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
    "Aluminox Technical Services LLC — Expert Facade Solutions in UAE. Over 20 years of expertise.",
  icons: {
    icon: [
      {
        url: "/favicon-48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "/favicon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
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
