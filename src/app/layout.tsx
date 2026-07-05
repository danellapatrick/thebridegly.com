import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TheBridgely | Embedded Engineering Teams for Global Startups",
  description:
    "Premium embedded engineering teams from Pakistan. Pre-vetted frontend, backend, QA, design, and HR — ready to integrate into your product.",
  keywords: [
    "embedded engineering teams",
    "Pakistan software engineers",
    "startup engineering",
    "offshore development",
    "TheBridgely",
  ],
  openGraph: {
    title: "TheBridgely | Embedded Engineering Teams",
    description:
      "Build and scale with pre-vetted Pakistani engineering teams embedded directly into your product.",
    type: "website",
  },
  icons: {
    icon: "images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${outfit.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
