import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Nithyeshwar Tours",
    default: "Nithyeshwar Tours — The Sacred Journey",
  },
  description:
    "Curating transformative pilgrimage and travel experiences across India and beyond. Book your sacred journey with Nithyeshwar Tours.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' }
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    siteName: "Nithyeshwar Tours",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${notoSerif.variable} ${manrope.variable} h-full antialiased`}
      data-theme-edges="sharp"
      suppressHydrationWarning
    >
      <head />
      <body className="min-h-dvh flex flex-col bg-surface text-midnight">
        {children}
      </body>
    </html>
  );
}
