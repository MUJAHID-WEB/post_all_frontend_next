import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./all.min.css";
import ThemeProvider from "./theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Post on all Social Platform",
  description: "One Click and Boom!!! Post on your all Social account, pages and groups of Facebook, Instagram, Twitter, LikedIn and so on",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}><ThemeProvider >{children}</ThemeProvider></body>
    </html>
  );
}
