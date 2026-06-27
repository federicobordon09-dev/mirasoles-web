import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { SEO } from "@/lib/contenido";
import ScrollRestore from "@/components/ScrollRestore";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mirasoles.vercel.app"),
  title: SEO.title,
  description: SEO.description,
  keywords: SEO.keywords,
  authors: [{ name: "Mirasoles" }],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://mirasoles.vercel.app",
    siteName: "Mirasoles",
    title: SEO.openGraph.title,
    description: SEO.openGraph.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mirasoles Restaurante en La Consulta Mendoza",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <ScrollRestore />
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
