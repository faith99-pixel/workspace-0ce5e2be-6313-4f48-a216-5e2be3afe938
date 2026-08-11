import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZZB Construction Company Ltd | Civil & Building Engineers",
  description:
    "ZZB Construction Company is a wholly owned Indigenous engineering outfit specializing in Civil & Building Engineering, Equipment Hiring, Geosynthetics, and Bitumen. RC: 728609",
  keywords: [
    "ZZB Construction",
    "Civil Engineering Nigeria",
    "Building Contractors Lagos",
    "Equipment Hiring",
    "Geosynthetics",
    "Bitumen Dealers",
    "Road Construction",
    "Bridge Construction",
  ],
  icons: {
    icon: "/images/logo/zzb-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
