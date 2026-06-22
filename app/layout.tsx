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
  metadataBase: new URL("https://leadertask.io"),
  title: "LeaderTask — Task management built for leaders",
  description: "Slim team task management for the Leader Suite. Tasks born from real data, team-wide visibility, and follow-up tracking so nothing slips between check-ins.",
  applicationName: "LeaderTask",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "LeaderTask",
    statusBarStyle: "default",
  },
  openGraph: {
    type: "website",
    siteName: "LeaderTask",
    title: "LeaderTask — Task management built for leaders",
    description: "Tasks born from real LeaderHQ data — never start from scratch. Team-wide visibility, priority tracking, and follow-up reminders all in one.",
    url: "https://leadertask.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeaderTask — Task management built for leaders",
    description: "Tasks born from real LeaderHQ data — never start from scratch. Team-wide visibility, priority tracking, and follow-up reminders all in one.",
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
