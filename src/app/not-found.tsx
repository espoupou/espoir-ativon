"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTranslation } from "@/i18n";

export default function NotFound() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-[800px] flex-col items-center justify-center px-5 py-32 text-center md:px-8">
      <p className="mb-4 font-mono text-sm font-semibold text-accent-green">404</p>
      <h1 className="mb-4 font-heading text-4xl font-bold text-foreground">{t.states.notFoundTitle}</h1>
      <p className="mb-8 max-w-xl text-lg text-foreground-secondary">{t.states.notFoundDescription}</p>
      <Link href="/" className="inline-flex min-h-11 items-center rounded-md bg-accent-green px-6 py-3 font-semibold text-[#052415] transition-colors hover:bg-emerald-400">
        {t.states.returnHome}
      </Link>
    </section>
  );
}
