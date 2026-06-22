import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SwRegister } from "./sw-register";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leadercal.io"),
  title: "LeaderCal — Scheduling built for leaders",
  description: "The scheduling platform built for field leaders and their teams. Leadership booking profiles, team scheduling, custom event types, and seamless calendar sync — all in one.",
  applicationName: "LeaderCal",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "LeaderCal",
    statusBarStyle: "default",
  },
  openGraph: {
    type: "website",
    siteName: "LeaderCal",
    title: "LeaderCal — Scheduling built for leaders",
    description: "Leadership booking profiles, team scheduling, and smart availability — so your calendar works as hard as you do.",
    url: "https://leadercal.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeaderCal — Scheduling built for leaders",
    description: "Leadership booking profiles, team scheduling, and smart availability — so your calendar works as hard as you do.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1b2e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <SwRegister />
      </body>
    </html>
  );
}
