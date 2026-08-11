import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const josefin = Josefin_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  verification: {
    google: 'UKIB5j4MTJFGK3BkiJrGT1f-2JP6ikCFOa1MqaRy-DU',
  },
  metadataBase: new URL('https://zzbconstruction.com'),
  title: {
    default: "ZZB Construction Company Ltd | Civil & Building Engineers Nigeria",
    template: "%s | ZZB Construction",
  },
  description:
    "ZZB Construction Company Ltd (RC: 728609) is a leading indigenous engineering firm in Nigeria specializing in Civil & Building Engineering, Road Construction, Bridge Building, Equipment Hiring, Geosynthetics supply, and Bitumen. Trusted by MTN, UACN, FERMA, Lagos State and more.",
  keywords: [
    "ZZB Construction",
    "Civil Engineering Nigeria",
    "Building Contractors Lagos",
    "Road Construction Nigeria",
    "Bridge Construction Nigeria",
    "Equipment Hiring Nigeria",
    "Geosynthetics Nigeria",
    "Bitumen Dealers Nigeria",
    "Construction Company Lagos",
    "Indigenous Engineering Nigeria",
    "FERMA contractor",
    "Lagos State contractor",
    "ZZB Construction Company Ltd",
  ],
  authors: [{ name: 'ZZB Construction Company Ltd' }],
  creator: 'ZZB Construction Company Ltd',
  publisher: 'ZZB Construction Company Ltd',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://zzbconstruction.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://zzbconstruction.com',
    siteName: 'ZZB Construction Company Ltd',
    title: 'ZZB Construction Company Ltd | Civil & Building Engineers Nigeria',
    description:
      'Leading indigenous engineering firm in Nigeria. Civil & Building Engineering, Road & Bridge Construction, Equipment Hiring, Geosynthetics and Bitumen supply.',
    images: [
      {
        url: '/images/hero/hero-bg.jpeg',
        width: 1200,
        height: 630,
        alt: 'ZZB Construction Company Ltd',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZZB Construction Company Ltd | Civil & Building Engineers Nigeria',
    description:
      'Leading indigenous engineering firm in Nigeria. Civil & Building Engineering, Road & Bridge Construction, Equipment Hiring, Geosynthetics and Bitumen supply.',
    images: ['/images/hero/hero-bg.jpeg'],
  },
  icons: {
    icon: '/images/logo/zzb-logo.png',
    apple: '/images/logo/zzb-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${josefin.variable} antialiased`} suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
