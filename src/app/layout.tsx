import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  IdentityJsonLd,
  SITE_NAME,
  SITE_URL,
  SOCIAL_IMAGE_PATH,
} from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kokou Espoir ATIVON — Génie industriel & digitalisation",
    template: "%s | Kokou Espoir ATIVON",
  },
  description: "Étudiant ingénieur en génie industriel avec un parcours en informatique, à la recherche d’un stage à partir de janvier 2027 en amélioration continue, production, qualité, données industrielles ou digitalisation.",
  alternates: { canonical: "/" },
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "portfolio",
  keywords: [
    "Kokou Espoir ATIVON",
    "génie industriel",
    "amélioration continue",
    "Lean manufacturing",
    "données industrielles",
    "digitalisation industrielle",
    "stage génie industriel 2027",
    "Python",
    "SQL",
    "Node-RED",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "6hYcteaAxEMI_2w4yWdeSt075_U_UOzP_RlGwXTAdv8",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_GB"],
    siteName: "Kokou Espoir ATIVON",
    title: "Kokou Espoir ATIVON — Génie industriel & digitalisation",
    description: "Projets, expériences et compétences en génie industriel, données et développement logiciel. Recherche d’un stage à partir de janvier 2027.",
    url: "/",
    images: [
      {
        url: SOCIAL_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: "Kokou Espoir ATIVON — Génie industriel et digitalisation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kokou Espoir ATIVON — Génie industriel & digitalisation",
    description: "Projets, expériences et compétences en génie industriel, données et développement logiciel.",
    images: [SOCIAL_IMAGE_PATH],
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
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300`}
      >
        <IdentityJsonLd />
        <Providers>
          <Header />
          <main id="main-content" tabIndex={-1} className="flex-grow scroll-mt-24">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
