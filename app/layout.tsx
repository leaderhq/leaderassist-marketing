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
  metadataBase: new URL("https://leaderassist.io"),
  title: "LeaderAssist — AI assistant built for field leaders",
  description: "Your AI-powered field leader assistant. Draft messages, coach reps, summarize your pipeline, and get answers from your own LeaderHQ data — instantly.",
  applicationName: "LeaderAssist",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "LeaderAssist",
    statusBarStyle: "default",
  },
  openGraph: {
    type: "website",
    siteName: "LeaderAssist",
    title: "LeaderAssist — Your AI field leader assistant.",
    description: "Draft messages, coach reps, summarize your pipeline, and get answers from your own LeaderHQ data — instantly.",
    url: "https://leaderassist.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeaderAssist — Your AI field leader assistant.",
    description: "Draft messages, coach reps, summarize your pipeline, and get answers from your own LeaderHQ data — instantly.",
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
