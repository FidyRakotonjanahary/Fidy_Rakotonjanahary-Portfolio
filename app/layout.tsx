import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "./providers/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RAKOTONJANAHARY Andrianofidiniaina Jeannot - Portfolio",
  description: "Portfolio professionnel de développeur full-stack",
  keywords: ["développeur", "web", "portfolio", "react", "next.js"],
  authors: [{ name: "RAKOTONJANAHARY Andrianofidiniaina Jeannot" }],
  creator: "Votre Nom",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://votre-site.com",
    title: "RAKOTONJANAHARY Andrianofidiniaina Jeannot - Portfolio",
    description: "Portfolio professionnel de développeur full-stack",
    siteName: "Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAKOTONJANAHARY Andrianofidiniaina Jeannot - Portfolio",
    description: "Portfolio professionnel de développeur full-stack",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}