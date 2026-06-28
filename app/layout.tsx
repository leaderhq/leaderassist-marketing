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
  title: "LeaderAssist — AI Assistant for Leaders",
  description: "One chat that drafts your follow-ups, books your calls, and runs your busywork across every Leader app — so you can focus on people, not tools.",
  applicationName: "LeaderAssist",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-light.png", type: "image/png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.png", type: "image/png", media: "(prefers-color-scheme: dark)" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
  appleWebApp: {
    capable: true,
    title: "LeaderAssist",
    statusBarStyle: "default",
  },
  openGraph: {
    type: "website",
    siteName: "LeaderAssist",
    title: "LeaderAssist — Your AI assistant for the whole Suite.",
    description: "One chat that drafts your follow-ups, books your calls, and runs your busywork across every Leader app — so you can focus on people, not tools.",
    url: "https://leaderassist.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeaderAssist — Your AI assistant for the whole Suite.",
    description: "One chat that drafts your follow-ups, books your calls, and runs your busywork across every Leader app — so you can focus on people, not tools.",
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
