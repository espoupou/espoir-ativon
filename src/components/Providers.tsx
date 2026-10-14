"use client";

import { ThemeProvider } from "next-themes";
import { MotionConfig } from "framer-motion";
import { LanguageProvider } from "@/i18n/LanguageContext";
import LanguageMetadata from "@/components/LanguageMetadata";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <MotionConfig reducedMotion="user">
        <LanguageProvider>
          <LanguageMetadata />
          {children}
        </LanguageProvider>
      </MotionConfig>
    </ThemeProvider>
  );
}
