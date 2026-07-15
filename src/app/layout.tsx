import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Amr Portfolio | Full-Stack Developer",
  description:
    "Full-stack developer building web applications that solve real-world problems. Exploring modern technologies and crafting thoughtful software.",
  keywords: [
    "full-stack developer",
    "web developer",
    "React",
    "Next.js",
    "TypeScript",
    "portfolio",
  ],
  openGraph: {
    title: "Mohammad Amr Pangandaman | Full-Stack Developer",
    description:
      "Full-stack developer building web applications that solve real-world problems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
