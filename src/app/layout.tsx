import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://framey-landing.vercel.app"),
  title: "Framey | AI Website Builder for Production Landing Pages",
  description:
    "Day 3/30 of the AI-Generated Landing Page Challenge. Framey is a conceptual AI website builder that turns prompts into polished Next.js, React, and Remix landing pages.",
  keywords: [
    "Framey",
    "AI website builder",
    "AI landing page",
    "Next.js",
    "React",
    "Remix",
    "Tailwind CSS",
    "bento design",
    "web design",
    "AI challenge",
  ],
  openGraph: {
    title: "Framey | AI Website Builder for Production Landing Pages",
    description:
      "A conceptual AI website builder landing page for Day 3/30 of the AI-Generated Landing Page Challenge.",
    url: "https://framey-landing.adrielzimbril.com",
    siteName: "Framey",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Framey AI website builder landing page preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Framey | AI Website Builder for Production Landing Pages",
    description:
      "A conceptual AI website builder landing page for Day 3/30 of the AI-Generated Landing Page Challenge.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} font-sans antialiased selection:bg-zinc-950 selection:text-white relative`}
      >
        {children}
      </body>
    </html>
  );
}
