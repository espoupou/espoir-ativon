"use client";

import { ThemeProvider } from "next-themes";
import { MotionConfig } from "framer-motion";
import { LanguageProvider } from "@/i18n/LanguageContext";
import LanguageMetadata from "@/components/LanguageMetadata";
import HashUrlGuard from "@/components/HashUrlGuard";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <MotionConfig reducedMotion="user">
        <LanguageProvider>
          <LanguageMetadata />
          <HashUrlGuard />
          {children}
        </LanguageProvider>
      </MotionConfig>
    </ThemeProvider>
  );
}
