import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samit Gugle — PR Agency & Creative Direction",
  description: "Samit Gugle PR Agency — Narrative-led brand elevation, PR strategy, and high-impact visual direction. Mumbai · London · Worldwide.",
  icons: {
    icon: "/assets/samit-gugle-logo.png",
    shortcut: "/assets/samit-gugle-logo.png",
    apple: "/assets/samit-gugle-icon.jpg",
  },
  openGraph: {
    title: "Samit Gugle — PR Agency & Creative Direction",
    description: "Narrative-led brand elevation, strategic public relations, and high-impact visual direction.",
    images: ["/assets/samit-gugle-logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#070709",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
