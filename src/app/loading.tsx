"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { useTranslation } from "@/i18n";

export default function Loading() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <div role="status" aria-live="polite" className="flex min-h-[60vh] items-center justify-center px-5 py-32 text-foreground-secondary">
      <span className="sr-only">{t.states.loading}</span>
      <span aria-hidden="true" className="size-8 animate-spin rounded-full border-2 border-border border-t-accent-green" />
    </div>
  );
}
