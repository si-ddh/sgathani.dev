import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siddhkumar Gathani",
  description: "Computer Science student at the University of Waterloo",
  metadataBase: new URL("https://sgathani.dev"),
  openGraph: {
    title: "Siddhkumar Gathani",
    description: "Computer Science student at the University of Waterloo",
    url: "https://sgathani.dev",
    siteName: "Siddhkumar Gathani",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Siddhkumar Gathani - Portfolio",
      },
    ],
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
