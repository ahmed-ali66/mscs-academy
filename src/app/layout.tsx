import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond, Noto_Naskh_Arabic, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ServiceWorkerRegister } from "@/components/pwa/ServiceWorkerRegister";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoArabic = Noto_Naskh_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MSCS Academy — Moral, Social & Cultural Studies",
    template: "%s | MSCS Academy",
  },
  description:
    "An interactive, heritage-grounded learning platform for UAE students in Grades 6–9. Making Learning Active, Not Passive.",
  keywords: [
    "MSCS",
    "Moral Studies",
    "Social Studies",
    "Cultural Studies",
    "UAE",
    "Education",
    "ADEK",
    "Irtiq'aa",
    "21st Century Learning",
  ],
  authors: [{ name: "Mr. Ahmed Ali" }],
  creator: "Mr. Ahmed Ali",
  publisher: "Mr. Ahmed Ali",
  applicationName: "MSCS Academy",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icon-192.png", sizes: "192x192", type: "image/png" }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "MSCS Academy",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "MSCS Academy — Moral, Social & Cultural Studies",
    description:
      "An interactive, heritage-grounded learning platform for UAE students in Grades 6–9.",
    type: "website",
    locale: "en_US",
    siteName: "MSCS Academy",
  },
  twitter: {
    card: "summary_large_image",
    title: "MSCS Academy",
    description:
      "An interactive, heritage-grounded learning platform for UAE students in Grades 6–9.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6EFDD" },
    { media: "(prefers-color-scheme: dark)", color: "#0F1714" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${cormorant.variable} ${notoArabic.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
