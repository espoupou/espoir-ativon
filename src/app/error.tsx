"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { useTranslation } from "@/i18n";

export default function Error({ unstable_retry }: { unstable_retry: () => void }) {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-[800px] flex-col items-center justify-center px-5 py-32 text-center md:px-8">
      <h1 className="mb-4 font-heading text-4xl font-bold text-foreground">{t.states.errorTitle}</h1>
      <p className="mb-8 max-w-xl text-lg text-foreground-secondary">{t.states.errorDescription}</p>
      <button type="button" onClick={() => unstable_retry()} className="min-h-11 rounded-md bg-accent-green px-6 py-3 font-semibold text-[#052415] transition-colors hover:bg-emerald-400">
        {t.states.retry}
      </button>
    </section>
  );
}
