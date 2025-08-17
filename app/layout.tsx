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
  creator: "RAKOTONJANAHARY Andrianofidiniaina Jeannot",
  

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png', 
  },
  
  // 🤖 SEO OPTIMIZATION 
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // 📱 RESPONSIVE 
  viewport: {
    width: 'device-width',
    initialScale: 1,
    // maximumScale retiré pour permettre le zoom accessibilité
  },
  
  // 🎨 MOBILE THEME (NICE TO HAVE)
  themeColor: '#6366F1',
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