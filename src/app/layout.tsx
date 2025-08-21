import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SnapLock - An App Blocker That Actually Works",
  description: "Stop wasting time on your phone. SnapLock uses physical barcode anchoring to block distracting apps. Download free on iOS.",
  keywords: ["app blocker", "productivity", "screen time", "focus", "iOS", "barcode", "digital wellness"],
  authors: [{ name: "SnapLock Team" }],
  creator: "SnapLock",
  publisher: "SnapLock",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://snaplock.app",
    siteName: "SnapLock",
    title: "SnapLock - An App Blocker That Actually Works",
    description: "Stop wasting time on your phone. SnapLock uses physical barcode anchoring to block distracting apps.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SnapLock App Blocker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@snaplock",
    creator: "@snaplock",
    title: "SnapLock - An App Blocker That Actually Works",
    description: "Stop wasting time on your phone. SnapLock uses physical barcode anchoring to block distracting apps.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when ready
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className="antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}
