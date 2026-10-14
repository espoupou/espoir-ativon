import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  metadataBase: new URL("https://espoir-ativon.vercel.app"),
  title: {
    default: "Kokou Espoir ATIVON — Génie industriel & digitalisation",
    template: "%s | Kokou Espoir ATIVON",
  },
  description: "Étudiant ingénieur en génie industriel avec un parcours en informatique, à la recherche d’un stage à partir de janvier 2027 en amélioration continue, production, qualité, données industrielles ou digitalisation.",
  alternates: { canonical: "/" },
  authors: [{ name: "Kokou Espoir ATIVON" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Kokou Espoir ATIVON",
    title: "Kokou Espoir ATIVON — Génie industriel & digitalisation",
    description: "Projets, expériences et compétences en génie industriel, données et développement logiciel. Recherche d’un stage à partir de janvier 2027.",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
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
        <Providers>
          <Header />
          <main id="main-content" tabIndex={-1} className="flex-grow scroll-mt-24">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
